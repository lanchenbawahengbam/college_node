
const Admin = require('../../model/adminSchema');
const STATUS = require("../../helper/status");
const validateAdminRegisterInput = require('../../validation/adminRegistration');

//ADMIN LOGIN
function adminLoginService(req, callback) {


}


async function adminRegistrationService(req, callback) {
    const { errors, isValid } = validateAdminRegisterInput(req);
    if (!isValid) {
        callback({
            errors
        }, STATUS.BAD_REQ)
    }
    const { name, email,
        dob, department, contactNumber, password } = req;

    const admin = await Admin.findOne({ email })
    if (admin) {
        errors.email = "Email already exist"
        callback({
            errors
        }, STATUS.BAD_REQ)
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
        password: password,
        joiningYear,
        registrationNumber,
        department,
        contactNumber,
        dob,
    })


    newAdmin.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding new admin", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })





    // res.status(200).json({ result: newAdmin })
}


module.exports = {
    adminLoginService,
    adminRegistrationService
}