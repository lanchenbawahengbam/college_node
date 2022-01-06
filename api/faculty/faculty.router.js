const express = require("express");
const {facultyRegisterController, getAllFacultyController,getDepartmentFacultyController,facultyDeleteController,facultyUpdateController,getSingleFacultyController,facultyLoginController} = require("./faculty.controller");
const router = express.Router()
const {authenticateToken} = require('../../helper/token')


//ADMIN LOGIN
router.post("/login", facultyLoginController)

//FACULTY ADD
router.post("/register", facultyRegisterController)  

// GET ALL FACULTY 
router.get("/getFaculty", authenticateToken, getAllFacultyController)

// DELETE ALL FACULTY 
router.delete("/delete/:id", facultyDeleteController)

// UPDATE ALL FACULTY 
router.patch("/update/:id",authenticateToken, facultyUpdateController)

// GET A PARTICULAR FACULTY 
router.get("/getSingleFaculty/:id", getSingleFacultyController)

// GET FACULTY BY DEPARTMENT 
router.post("/getDepartmentFaculty", getDepartmentFacultyController)


module.exports = router;