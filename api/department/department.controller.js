const {departmentRegistrationService,getAllDepartmentService} = require("./department.service")


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


// function getAllDeptController(req, res) {
//     let body = req.body;
//     getAllDeptService(body, (results, status) => {

//         return res.status(status).json(results);

//     })
// }


module.exports = {
    departmentRegisterController,
    getAllDepartmentController
}