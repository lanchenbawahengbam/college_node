const {libraryRegistrationService, getLibraryBookService} = require("../library/library.service")

function libraryRegisterController(req, res) {
    let body = req.body; 

   libraryRegistrationService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

function getLibraryBookController(req, res) {
    let body = req.body; 

   getLibraryBookService(body, (results, status) => {

       return res.status(status).json(results);

   })
}

module.exports = {
    libraryRegisterController,
    getLibraryBookController

}