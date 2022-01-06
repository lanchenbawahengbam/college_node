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

async function getAllStudentService(req, callback) {

    Student.aggregate([{
        $lookup:{ 
            from:'departments',
            localField:'departmentcode',
            foreignField:'departmentcode',
            as:'std_dept_output'
        }
    }]).then((result) => {
        console.log("STUDENT DATA : ", result)

        callback({
            result: result
        }, STATUS.SUCCESS)

    })
    .catch((error) => {
        console.log("ERROR : ", error)
        const errors = { message: `error in showing the student data", ${err.message}` }

        callback({
            result: errors
        }, STATUS.INTERNAL_SERVER)
    })
    

}

async function getDepartmentStudentService(req, callback) {
    
    const { departmentcode, year} = req;
    const getDepartmentStudent = await Student.find({ departmentcode,year})
    if(!getDepartmentStudent){
        callback({message:"Data is not received"},STATUS.BAD_REQ)
    }else{
        console.log(getDepartmentStudent)
        callback({
            result: getDepartmentStudent
        }, STATUS.SUCCESS)
    }
}

module.exports = {
    studentRegistrationService,
    getAllStudentService,
    getDepartmentStudentService

}

