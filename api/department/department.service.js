const Subject = require("../../model/subjectSchema");
const STATUS = require("../../helper/status");
const { INTERNAL_SERVER } = require('../../helper/status');


async function departmentRegistrationService(req, callback) {
    const { totalLectures, department, subjectCode,
        subjectName, year } = req;
    const departmentname = await Subject.findOne({ department })
    if (departmentname) {
        errors.department = "Given department is already added"
        callback({
            errors
        },STATUS.BAD_REQ)
        // return res.status(400).json(errors)
    }
    const newSubject = await new Subject({
        totalLectures,
        department,
        subjectCode,
        subjectName,
        year
    })
    newSubject.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding new subject", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })
        
         

}


// function getAllDeptService(req, callback) {

//     const {department} = req.body ;
     



//     let department_list = [
//         {
//             name: "Computer Science and Engineering",
//             value: "cse"
//         },
//         {
//             name: "Electronics and Communication Engineering",
//             value: "ece"
//         },
//         {
//             name: "Civil Engineering",
//             value: "ce"
//         },
//         {
//             name: "Mechanical Engineering",
//             value: "me"
//         },
//         {
//             name: "Electrical Engineering",
//             value: "ee"
//         }
//     ]

//     callback(department_list, 200)

// }

module.exports = {
    departmentRegistrationService 
    // getAllDeptService
}