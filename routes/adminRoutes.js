const express = require("express")
const router = express.Router()


const {addAdmin} = require('../controller/adminController')

router.post('/addAdmin', addAdmin )