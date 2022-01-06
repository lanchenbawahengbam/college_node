const express = require("express")
const {studentRegisterController, getAllStudentController, getDepartmentStudentController} = require("../student/student.controller")
const router = express.Router()

//STUDENT ADD
router.post("/register",studentRegisterController) 

// SHOW ALL STUDENT 
router.get("/getStudent",getAllStudentController) 

// SHOW STUDENT OF RESPECTIVE DEPARTMENT 
router.post("/getDepartmentStudent",getDepartmentStudentController) 



module.exports = router