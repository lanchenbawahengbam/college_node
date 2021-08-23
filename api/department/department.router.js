const express = require("express");
const { departmentRegisterController, getAllDepartmentController } = require("./department.controller");
const router = express.Router()


// DEPARTMENT REGISTRATION 
router.post("/add",departmentRegisterController)

// GET ALL DEPARTMENT
router.get("/getDepartment",getAllDepartmentController)

//ADMIN LOGIN
// router.get("/", getAllDeptController)   

module.exports = router;