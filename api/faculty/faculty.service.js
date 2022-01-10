require("dotenv").config();
const Faculty = require("../../model/facultySchema");
const STATUS = require("../../helper/status");
const { INTERNAL_SERVER } = require("../../helper/status");
const jwt = require("jsonwebtoken");

//FACULTY LOGIN
async function facultyLoginService (req, callback) { 
  // const { errors, isValid } = validateAdminLoginInput(req.body;
  // if (!isValid) {
  //     callback({
  //         errors
  //     }, STATUS.BAD_REQ)
  // }
  const { email, password } = req.body;

  const faculty = await Faculty.findOne({ email,password});
  console.log(faculty)
  if (!faculty) {
    callback({ message: "Invalid Cridentials" }, STATUS.BAD_REQ);
  } else {
    const accessToken = jwt.sign(
      {faculty },
      process.env.SECRET__TOKEN,{expiresIn: '30s'}
    );
    callback({ accessToken: accessToken }, STATUS.SUCCESS);
  }
  // callback({message:"User Login Successfull"},STATUS.SUCCESS
}

async function facultyRegistrationService(req, callback) {
  const {
    name, 
    email,
    designation,
    password,
    facultyMobileNumber,
    gender,
    departmentcode,
    qualification,
  } = req;

  const faculty = await Faculty.findOne({ email });
  if (faculty) {
    errors.email = "Email already exist";
    callback(
      {
        errors,
      },
      STATUS.BAD_REQ
    );
  }

  const newFaculty = await new Faculty({
    name,
    email,
    password: password,
    designation,
    facultyMobileNumber,
    gender,
    departmentcode,
    qualification,
  });

  newFaculty
    .save()
    .then((result) => {
      console.log("CREATED : ", result);

      callback(
        {
          result: result,
        },
        STATUS.SUCCESS
      );
    })
    .catch((error) => {
      console.log("ERROR : ", error);
      const errors = {
        message: `error in adding new faculty", ${err.message}`,
      };

      callback(
        {
          result: errors,
        },
        STATUS.INTERNAL_SERVER
      );
    });
}

// GET ALL FACULTY
async function getAllFacultyService(req, callback) {
  Faculty.aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "departmentcode",
        foreignField: "departmentcode",
        as: "dept_output",
      },
    },
  ])
    .then((result) => {
      console.log("FACULTY DATA : ", result);

      callback(
        {
          result: result,
        },
        STATUS.SUCCESS
      );
    })
    .catch((error) => {
      console.log("ERROR : ", error);
      const errors = {
        message: `error in showing the falculty data", ${err.message}`,
      };

      callback(
        {
          result: errors,
        },
        STATUS.INTERNAL_SERVER
      );
    });
}

// FACULTY UPDATE
async function facultyUpdateService(req, decoded, callback) {
  // const { email, gender, facultyMobileNumber, aadharCard } = req.body;
  // const faculty = await Faculty.findOne({ email });
  // if (gender) {
  //   faculty.gender = gender;
  //   await faculty.save();
  // }
  // if (facultyMobileNumber) {
  //   faculty.facultyMobileNumber = facultyMobileNumber;
  //   await faculty.save();
  // }
  // if (aadharCard) {
  //   faculty.aadharCard = aadharCard;
  //   await faculty.save();
  // }
  // faculty.avatar = imgResponse.secure_url;
  // await faculty.save();
  // res.status(200).json(faculty);
    
  // if (!email) {
  //   console.log("hi")
  //   callback({ message: "Cannot update others Profile" }, INTERNAL_SERVER);
  // } else {
    const _id = req.params.id;
    console.log(_id)
  // const { email, password } = decoded;
  if(decoded.faculty._id !== _id){
  callback({ message: "Cannot update others Profile" }, INTERNAL_SERVER);
  }else{
     
    const facultyUpdate = await Faculty.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!facultyUpdate) {
      callback({ message: "Data update error" }, INTERNAL_SERVER);
    } else {
      console.log(facultyUpdate);
      callback({ facultyUpdate }, STATUS.SUCCESS);
    }
  }
    
  // }
}

// FACULTY DELETE
async function facultyDeleteService(req, callback) {
  const facultyDelete = await Faculty.findByIdAndDelete(req.params.id);
  if (!facultyDelete) {
    callback({ message: "Error in data deletion" }, INTERNAL_SERVER);
  } else {
    console.log(facultyDelete);
    callback({ facultyDelete }, STATUS.SUCCESS);
  }
}

// GET A PARTICULAR FACULTY

async function getSingleFacultyService(req, callback) {
  const _id = req.params.id;
  const singleFaculty = await Faculty.findById(_id);
  if (!singleFaculty) {
    callback({ message: "Error in showing single data" }, INTERNAL_SERVER);
  } else {
    console.log(singleFaculty);
    callback(
      {
        result: singleFaculty,
      },
      STATUS.SUCCESS
    );
  }
}

async function getDepartmentFacultyService(req, callback) {
  const { departmentcode } = req;
  const getDepartmentFaculty = await Faculty.find({ departmentcode });
  if (!getDepartmentFaculty) {
    callback({ message: "Data is not received" }, STATUS.BAD_REQ);
  } else {
    console.log(getDepartmentFaculty);
    callback(
      {
        result: getDepartmentFaculty,
      },
      STATUS.SUCCESS
    );
  }
}

module.exports = {
  facultyRegistrationService,
  getAllFacultyService,
  getDepartmentFacultyService,
  facultyUpdateService,
  facultyDeleteService,
  getSingleFacultyService,
  facultyLoginService,
};
