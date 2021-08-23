const {studentRegistrationService} = require("../student/student.service")

function studentRegisterController(req, res) {
    let body = req.body; 

   studentRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}


module.exports = {
    studentRegisterController
}