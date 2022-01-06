const {facultyRegistrationService,getAllFacultyService,getDepartmentFacultyService,facultyUpdateService,facultyDeleteService,getSingleFacultyService,facultyLoginService} = require("./faculty.service");

function facultyLoginController(req, res) {

    console.log(req.body)
    // let body
    // body.email = req.body.email;
    // body.password = req.body.password;

    facultyLoginService(req, (results, status) => {
        return res.status(status).json(results);
    });

}

function facultyRegisterController(req, res) {
    let body = req.body; 

   facultyRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function facultyUpdateController(req, res) {
    //  let body = req.body; 

    facultyUpdateService(req,req.decoded, (results, status) => {

        return res.status(status).json(results);

    })
}

function getAllFacultyController(req, res) {
    let body = req.body; 

   getAllFacultyService(body, (results, status) => {

       return res.status(status).json(results);


   })
}

function facultyDeleteController(req, res) {
    //  let body = req.body; 

    facultyDeleteService(req, (results, status) => {

        return res.status(status).json(results);

    })
}

function getDepartmentFacultyController(req, res) {
    let body = req.body; 

   getDepartmentFacultyService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function getSingleFacultyController(req, res) {
    //  let body = req.body; 

    getSingleFacultyService(req, (results, status) => {

        return res.status(status).json(results);

    })
}

module.exports = {
    facultyRegisterController,
    getAllFacultyController,
    getDepartmentFacultyController,
    facultyUpdateController,
    facultyDeleteController,
    getSingleFacultyController,
    facultyLoginController

}
