const {facultyRegistrationService,getAllFacultyService} = require("./faculty.service");

function facultyRegisterController(req, res) {
    let body = req.body; 

   facultyRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function getAllFacultyController(req, res) {
    let body = req.body; 

   getAllFacultyService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

module.exports = {
    facultyRegisterController,
    getAllFacultyController
}
