const router = require("express").Router();
const {
  getStudentController,
  studentCheckController,
} = require("./student.controller");

router.get("/", getStudentController);
router.get("/check", studentCheckController);

module.exports = router;
