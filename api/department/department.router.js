const express = require("express");
const { departmentRegisterController, getAllDepartmentController,departmentDeleteController } = require("./department.controller");
const router = express.Router()


// DEPARTMENT REGISTRATION 
router.post("/add",departmentRegisterController)

// GET ALL DEPARTMENT
router.get("/getDepartment",getAllDepartmentController)

// DELETE  DEPARTMENT 
router.delete("/delete/:id", departmentDeleteController)


//ADMIN LOGIN
// router.get("/", getAllDeptController)   

module.exports = router;