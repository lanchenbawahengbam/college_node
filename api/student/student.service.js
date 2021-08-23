const Student = require("../../model/studentSchema")
const STATUS = require("../../helper/status")

async function studentRegistrationService(req, callback) {

    const { name, email, password, fatherMobileNumber,studentMobileNumber, gender, departmentcode, year,dob,batch, fatherName, registrationNumber } = req;

    const student = await Student.findOne({ email })
    if (student) {
        errors.email = "Email already exist"
        callback({
            errors
        }, STATUS.BAD_REQ)
    }

    const newStudent = await new Student({
        name,
        email,
        password: password,
        year,
        departmentcode,
        gender,
        fatherName,
        batch,
        dob,
        registrationNumber,
        fatherMobileNumber,
        studentMobileNumber
    })

    newStudent.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding new student", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })

}

module.exports = {
    studentRegistrationService

}

