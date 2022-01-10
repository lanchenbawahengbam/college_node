const express = require("express");
const { documentUploadController } = require("./document.controller");
const router = express.Router()
const {authenticateToken} = require("../../helper/token")
const {upload} = require("../../utils/multer")


router.post("/upload",upload,authenticateToken, documentUploadController);

module.exports = router;
