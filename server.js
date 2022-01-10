const dotenv = require('dotenv');
const express = require("express");
const server = express();
const cors = require("cors");
//ROUTES
const adminRouter = require("./api/admin/admin.router")
const departmentRouter = require("./api/department/department.router")
const facultyRouter = require("./api/faculty/faculty.router")
const studentRouter = require("./api/student/student.router")
const admissionRouter = require("./api/admission/adm.router")
const libraryRouter = require("./api/library/library.router")
const documentRouter = require("./api/college_document/document.router")

dotenv.config({ path: './.env' });
require('./db/conn');


server.use(express.json());

// server.use(require("./routes/adminRoutes"))
server.use(cors({ allowedHeaders: "*", origin: "*" }));


//ROUTES
server.use("/admin", adminRouter)
server.use("/department", departmentRouter)
server.use("/faculty",facultyRouter)
server.use("/student",studentRouter)
server.use("/admission",admissionRouter)
server.use("/library",libraryRouter)
server.use("/document",documentRouter)


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`The app is running at port ${PORT}`)
})
