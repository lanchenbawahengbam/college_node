const express = require("express")
const {studentRegisterController} = require("../student/student.controller")
const router = express.Router()

//STUDENT ADD
router.post("/register",studentRegisterController) 


module.exports = router