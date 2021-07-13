function getStudentListService(req, callback) {
  let std_json = [
    {
      name: "Amar",
      dept: "CSE",
      roll: "172014",
    },
    {
      name: "Lanchenba",
      dept: "CSE",
      roll: "172016",
    },
    {
      name: "Lanchenba",
      dept: "CSE",
      roll: "172003",
    },
  ];

  callback(200, std_json);
}

function studentCheckService(req, callback) {
  callback(200, { msg: "CHECKED" });
}

module.exports = {
  getStudentListService,
  studentCheckService,
};
