const express = require("express")
const { libraryRegisterController, getLibraryBookController } = require("./library.Controller")
const router = express.Router()


// ADD BOOKS 
router.post("/add", libraryRegisterController)

// SHOW BOOKS 
router.get("/getBooks", getLibraryBookController)


module.exports = router
