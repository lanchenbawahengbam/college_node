const { adminRegistrationService, adminLoginService } = require("./admin.service");



function adminLoginController(req, res) {

    let body
    body.username = req.body.username;
    body.password = req.body.password;

    adminLoginService(body, (results, status) => {
        return res.status(status).json(results);
    });

}

function adminRegisterController(req, res) {
    let body = req.body;

    adminRegistrationService(body, (results, status) => {

        return res.status(status).json(results);

    })
}

module.exports = {
    adminLoginController,
    adminRegisterController
}