const express = require("express")
const { adminLoginController, adminRegisterController,adminUpdateController,adminDeleteController}= require("./admin.controller")
const router = express.Router()



//ADMIN LOGIN
router.post("/login", adminLoginController)

//ADMIN ADD
router.post("/register", adminRegisterController)  

// ADMIN UPDATE 
router.patch("/update/:id", adminUpdateController)  

// ADMIN DELETE
router.delete("/delete/:id", adminDeleteController)  




module.exports = router;