const {studentRegistrationService, getAllStudentService, getDepartmentStudentService} = require("../student/student.service")

function studentRegisterController(req, res) {
    let body = req.body; 

   studentRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
} 

function getAllStudentController(req, res) {
    let body = req.body; 

   getAllStudentService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function getDepartmentStudentController(req, res) {
    let body = req.body; 

   getDepartmentStudentService(body, (results, status) => {

       return res.status(status).json(results);

   })
}



module.exports = {
    studentRegisterController,
    getAllStudentController,
    getDepartmentStudentController
}