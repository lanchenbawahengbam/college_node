const express = require("express")
const { adminLoginController, adminRegisterController,adminUpdateController,adminDeleteController, getAllAdminController, getSingleAdminController}= require("./admin.controller")
const router = express.Router()


 
//ADMIN LOGIN
router.post("/login", adminLoginController)

//ADMIN GET
router.get("/getAdmin", getAllAdminController)


//ADMIN ADD
router.post("/register", adminRegisterController)  

// ADMIN UPDATE 
router.patch("/update/:id", adminUpdateController)  

// ADMIN DELETE
router.delete("/delete/:id", adminDeleteController)  

// GET SINGLE ADMIN 
router.get("/getSingleAdmin/:id", getSingleAdminController)  






module.exports = router;