const Faculty = require("../../model/facultySchema") 
const STATUS = require("../../helper/status")

async function facultyRegistrationService(req, callback) {

    const { name, email,designation, password, facultyMobileNumber, gender, departmentcode, qualification } = req;

    const faculty = await Faculty.findOne({ email })
    if (faculty) {
        errors.email = "Email already exist"
        callback({
            errors
        }, STATUS.BAD_REQ)
    }

    const newFaculty = await new Faculty({
        name,
        email,
        password: password,
        designation,
        facultyMobileNumber,
        gender,
        departmentcode,
        qualification,
    })

    newFaculty.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding new faculty", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })

}


async function getAllFacultyService(req, callback) {

    Faculty.aggregate([{
        $lookup:{ 
            from:'departments',
            localField:'departmentcode',
            foreignField:'departmentcode',
            as:'dept_output'
        }
    }]).then((result) => {
        console.log("FACULTY DATA : ", result)

        callback({
            result: result
        }, STATUS.SUCCESS)

    })
    .catch((error) => {
        console.log("ERROR : ", error)
        const errors = { message: `error in showing the falculty data", ${err.message}` }

        callback({
            result: errors
        }, STATUS.INTERNAL_SERVER)
    })
    

}

module.exports = {
    facultyRegistrationService,
    getAllFacultyService

}
