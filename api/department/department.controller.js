const {departmentRegistrationService} = require("./department.service")


function departmentRegisterController(req, res) {
    let body = req.body; 

   departmentRegistrationService(body, (results, status) => {

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
    departmentRegisterController
    // getAllDeptController
}