const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//ROUTERS
const studentRouter = require("./api/student/student.router");

app.use("/students", studentRouter);

app.get("/check", (req, res) => {
  res.status(200).json({
    msg: "WORKING FINE",
  });
});

app.listen(4000, () => console.log("LISTENING ON PORT 4000"));
