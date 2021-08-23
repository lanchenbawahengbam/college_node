const mongoose = require('mongoose')
const { Schema } = mongoose


const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
    },
    designation: {
        type: String,
        required: true
    },
    departmentcode: {
        type: String, 
        required: true
    },
    facultyMobileNumber: {
        type: Number
    },
    qualification:{
        type:String,
        required:true
    }  
})


module.exports = mongoose.model('faculty', facultySchema)