const mongoose = require('mongoose')
const { Schema } = mongoose


const departmentSchema = new Schema({
    departmentname: {
        type: String,
        required: true
    },
    departmentcode:{
        type:String,
        required:true
    }   
})


module.exports = mongoose.model('department', departmentSchema)
