
const Admin = require('../../model/adminSchema');
const STATUS = require("../../helper/status");
const validateAdminLoginInput = require("../../validation/adminlogin");
const { INTERNAL_SERVER } = require('../../helper/status');

//ADMIN LOGIN
async function adminLoginService(req, callback) {
    // const { errors, isValid } = validateAdminLoginInput(req.body);
    // if (!isValid) {  
    //     callback({
    //         errors
    //     }, STATUS.BAD_REQ) 
    // }
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email,password })
    if (!admin) {
        callback({message:"Invalid Cridentials"},STATUS.BAD_REQ)
    }else{
        callback({message:"User Login Successfull"},STATUS.SUCCESS)
    }
}

// ADMIN REGISTRATION 
async function adminRegistrationService(req, callback) {
    // const { errors, isValid } = validateAdminRegisterInput(req);
    // if (!isValid) {
    //     callback({
    //         errors
    //     }, STATUS.BAD_REQ)
    // }
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

// ADMIN UPDATE 
async function adminUpdateService(req,callback){
    const _id = req.params.id;
        const adminUpdate = await Admin.findByIdAndUpdate(_id,req.body,{
            new:true   
        });
    if(!adminUpdate){
        callback({message:"Data update error"},INTERNAL_SERVER )
    }else{
        console.log(adminUpdate)
        callback(
            {message:"Data is updated" }, STATUS.SUCCESS)            
    }
}
// ADMIN DELETE
async function adminDeleteService(req,callback){
    const adminDelete = await Admin.findByIdAndDelete(req.params.id);
    if(!adminDelete){
        callback({message:"Error in data deletion"},INTERNAL_SERVER )
    }else{
        console.log(adminDelete)
        callback({message:"Data is deleted" }, STATUS.SUCCESS)            
    } 
}

async function getAllAdminService(req, callback) {

    const getAdmin = await Admin.find({})
    if(!getAdmin){
        callback({message:"Data is not received"},STATUS.BAD_REQ)
    }else{
        console.log(getAdmin)
        callback({
            result: getAdmin
        }, STATUS.SUCCESS)
    }
}    


module.exports = {
    adminLoginService,
    adminRegistrationService,
    adminUpdateService,
    adminDeleteService,
    getAllAdminService
}