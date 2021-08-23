const mongoose = require('mongoose')
const { Schema } = mongoose


const studentSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    fatherName: {
        type: String
    },
    gender: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    departmentcode: {
        type: String,
        required: true
    },
    batch: {
        type: String
    },
    dob: {
        type: String,
        required: true
    },
    studentMobileNumber: {
        type: Number
    },
    fatherMobileNumber: {
        type: Number
    } 

})


module.exports = mongoose.model('student',studentSchema)




