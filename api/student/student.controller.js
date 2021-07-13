const {
  getStudentListService,
  studentCheckService,
} = require("./student.service");

const getStudentController = (req, res) => {
  getStudentListService(req, (status, json) => {
    res.status(status).json(json);
  });
};

const studentCheckController = (req, res) => {
  studentCheckService(req, (status, json) => {
    res.status(status).json(json);
  });
};

module.exports = {
  getStudentController,
  studentCheckController,
};
