const express = require("express");
const { getAllDeptController } = require("./department.controller");
const router = express.Router()



//ADMIN LOGIN
router.get("/", getAllDeptController)

module.exports = router;