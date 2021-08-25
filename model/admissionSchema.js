const mongoose = require('mongoose')
const { Schema } = mongoose


const admissionSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    gender: {
        type: String,
    },
    departmentcode: {
        type: String, 
        required: true
    },
    studentMobileNumber: {
        type: Number,
        required:true
    },
    registrationNumber: {
        type: String,
        required:true
    },
    transactionId:{
        type:String,
        required:true,
        unique: true
    }
})


module.exports = mongoose.model('admission', admissionSchema)