const {admissionRegistrationService, getAdmittedStudentService} = require("../admission/adm.service")

function admissionRegisterController(req, res) {
    let body = req.body; 

   admissionRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function getAdmittedStudentController(req, res) {
    let body = req.body; 

   getAdmittedStudentService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

module.exports={
    admissionRegisterController,
    getAdmittedStudentController
}
