const mongoose = require('mongoose')
const { Schema } = mongoose


const librarySchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    },  
    bookNumber: {
        type: String,
        required: true,
        unique:true
    },
    instock:{
        type: Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    departmentcode: {
        type: String, 
        required: true
    }
})


module.exports = mongoose.model('library', librarySchema)