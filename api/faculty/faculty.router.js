const express = require("express");
const {facultyRegisterController, getAllFacultyController} = require("./faculty.controller");
const router = express.Router()

//FACULTY ADD
router.post("/register", facultyRegisterController)  

// GET ALL FACULTY 
router.get("/getFaculty", getAllFacultyController)

module.exports = router;