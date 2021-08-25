const express = require("express");
const {admissionRegisterController, getAdmittedStudentController} = require("../admission/adm.controller")
const router = express.Router()

// ADMISSION REGISTER  
router.post("/register",admissionRegisterController) 

// GET ADMITTED STUDENT 
router.get("/getAdmittedStudent",getAdmittedStudentController) 


module.exports = router

