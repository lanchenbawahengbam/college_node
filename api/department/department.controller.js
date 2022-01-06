const {departmentRegistrationService,getAllDepartmentService,departmentDeleteService} = require("./department.service")


function departmentRegisterController(req, res) {
    let body = req.body; 

   departmentRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}
function getAllDepartmentController(req, res) {
    let body = req.body; 

   getAllDepartmentService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function departmentDeleteController(req, res) {
    //  let body = req.body; 

    departmentDeleteService(req, (results, status) => {

        return res.status(status).json(results);

    })
}


// function getAllDeptController(req, res) {
//     let body = req.body;
//     getAllDeptService(body, (results, status) => {

//         return res.status(status).json(results);

//     })
// }


module.exports = {
    departmentRegisterController,
    getAllDepartmentController,
    departmentDeleteController
}