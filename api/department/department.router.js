const express = require("express");
const { departmentRegisterController } = require("./department.controller");
const router = express.Router()


// DEPARTMENT REGISTRATION 
router.post("/add",departmentRegisterController)

//ADMIN LOGIN
// router.get("/", getAllDeptController)

module.exports = router;