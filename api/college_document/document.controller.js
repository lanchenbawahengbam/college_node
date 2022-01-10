const {documentUploadService} = require("./document.service")

function documentUploadController(req, res) {
    let body = req.body; 

     documentUploadService(body,req.file, (results, status) => {

       return res.status(status).json(results);

   })
}

module.exports ={
   documentUploadController
}