const bcrypt = require('bcryptjs')

const validateAdminRegisterInput = require('../validation/adminRegistration')

// Models 
const Student = require('../model/studentSchema')
const Faculty = require('../model/facultySchema')
const Admin = require('../model/adminSchema')


module.exports = {
    addAdmin: async (req, res, next) => {
        try {
            const { errors, isValid } = validateAdminRegisterInput(req.body);
            if (!isValid) { 
                return res.status(400).json(errors)
            }
            const { name, email,
                dob,department, contactNumber} = req.body
            const admin = await Admin.findOne({ email })
            if (admin) {
                errors.email = "Email already exist"
                return res.status(400).json(errors)
            }
            let departmentHelper;
            if (department === "Civil") {
                departmentHelper = "1"
            }
            else if (department === "C.S.E") {
                departmentHelper = "2"
            }
            else if (department === "E.C.E") {
                departmentHelper = "3"
            }
            else if (department === "E.E.E") {
                departmentHelper = "4"
            }
            else if (department === "Bsic Science And Humanities") {
                departmentHelper = "05"

            }
            else {
                departmentHelper = "00"
            }
            const admins = await Admin.find({ department })
            let helper;
            if (admins.length < 10) {
                helper = "00" + admins.length.toString()
            }
            else if (students.length < 100 && students.length > 9) {
                helper = "0" + admins.length.toString()
            }
            else {
                helper = admins.length.toString()
            }


            var date = new Date();
            const joiningYear = date.getFullYear()
            var components = [
                "ADM",
                date.getFullYear(),
                departmentHelper,
                helper
            ];

            var registrationNumber = components.join("");
            const newAdmin = await new Admin({
                name,
                email,
                password: hashedPassword,
                joiningYear,
                registrationNumber,
                department,
                contactNumber,
                dob,
            })
            await newAdmin.save()
            res.status(200).json({ result: newAdmin })
        }
        catch (err) {
            res.status(400).json({ message: `error in adding new admin", ${err.message}` })
        }

    }
}    
