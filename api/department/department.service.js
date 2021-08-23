const Department = require("../../model/departmentSchema")
const STATUS = require("../../helper/status");
const { INTERNAL_SERVER } = require('../../helper/status');


async function departmentRegistrationService(req, callback) {
    const { departmentname,departmentcode } = req;
    const department = await Department.findOne({ departmentname })
    if (department) {
        errors.departmentname = "Given department is already added"
        callback({  
            errors
        },STATUS.BAD_REQ)
        // return res.status(400).json(errors)
    }
    const newDepartment = await new Department({
        departmentname,
        departmentcode
    })
    newDepartment.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding new department", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })
        
         

}

// GET ALL DEPARTMENT
async function getAllDepartmentService(req, callback) {

    const getDepartment = await Department.find({})
    if(!getDepartment){
        callback({message:"Data is not received"},STATUS.BAD_REQ)
    }else{
        console.log(getDepartment)
        callback({
            result: getDepartment
        }, STATUS.SUCCESS)
    }
}    


// function getAllDeptService(req, callback) {

//     const {department} = req.body ;
     



//     let department_list = [
//         {
//             name: "Computer Science and Engineering",
//             value: "cse"
//         },
//         {d
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
    departmentRegistrationService,
    getAllDepartmentService
}