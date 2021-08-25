const { adminRegistrationService, adminLoginService , adminUpdateService,adminDeleteService,getAllAdminService, getSingleAdminService} = require("./admin.service");
 

function adminLoginController(req, res) {

    console.log(req.body)
    // let body
    // body.email = req.body.email;
    // body.password = req.body.password;

    adminLoginService(req, (results, status) => {
        return res.status(status).json(results);
    });

}

function adminRegisterController(req, res) {
     let body = req.body; 

    adminRegistrationService(body, (results, status) => {

        return res.status(status).json(results);

    })
}

function adminUpdateController(req, res) {
    //  let body = req.body; 

    adminUpdateService(req, (results, status) => {

        return res.status(status).json(results);

    })
}
function adminDeleteController(req, res) {
    //  let body = req.body; 

    adminDeleteService(req, (results, status) => {

        return res.status(status).json(results);

    })
}

function getAllAdminController(req, res) {
    //  let body = req.body; 

    getAllAdminService(req, (results, status) => {

        return res.status(status).json(results);

    })
}

function getSingleAdminController(req, res) {
    //  let body = req.body; 

    getSingleAdminService(req, (results, status) => {

        return res.status(status).json(results);

    })
}

module.exports = {
    adminLoginController,
    adminRegisterController,
    adminUpdateController,
    adminDeleteController,
    getAllAdminController,
    getSingleAdminController
}