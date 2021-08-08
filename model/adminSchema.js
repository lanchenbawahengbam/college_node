const mongoose = require('mongoose')
const { Schema } = mongoose


const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    registrationNumber: {
        type: String
    },
    department: {
        type: String
    },
    dob: {
        type: String
    },
    joiningYear: {
        type: String
    },
    contactNumber: {
        type: String
    }

})

adminSchema.pre('save', async function (next){
    console.log('Hi from inside')
    // the pre before 'save' defines this functions should be performed before saving
    // it means when we want to hash password then only we will use this function  
    if(this.isModified('password')){
       
        // so this password means the password given by the user a present should be hashed
        // 12 is the number of rounds to be hased 
        const hashedPassword  = await bcrypt.hash(dob, 10); 
    }
    // since it is a middleware 
    next();

});



module.exports = mongoose.model('admin', adminSchema)
