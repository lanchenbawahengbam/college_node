const { getAllDeptService } = require("./department.service");



function getAllDeptController(req, res) {
    let body = req.body;
    getAllDeptService(body, (results, status) => {

        return res.status(status).json(results);

    })
}


module.exports = {
    getAllDeptController
}