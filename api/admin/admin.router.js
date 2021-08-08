const express = require("express")
const { adminLoginController, adminRegisterController } = require("./admin.controller")
const router = express.Router()



//ADMIN LOGIN
router.post("/login", adminLoginController)

//ADMIN ADD
router.post("/register", adminRegisterController)

module.exports = router;