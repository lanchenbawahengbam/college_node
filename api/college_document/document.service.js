require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const STATUS = require("../../helper/status");
const { INTERNAL_SERVER } = require("../../helper/status");
// const {upload} = require("../../utils/multer")

const { AWS_ID, AWS_SECRET, AWS_BUCKET_NAME } = process.env;
const s3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
});

async function documentUploadService(req,file,callback){
    let myFile = file.originalname.split(".");
    const fileType = myFile[myFile.length - 1];

    console.log(file);

    // res.send({
    //     message:"Hello World"
    // })
    const minimum = 1024 * 500;
    const maximum = 1024 * 1024 * 2;

    if (
      file.mimetype != "image/jpeg" &&
      file.mimetype != "image/png" &&
      file.mimetype != "image/jpg"&&
      file.mimetype != "application/pdf"
    ) {
      console.log("hi");
      return callback( { message: "File Type is Incorrect" },STATUS.UNAUTHORIZED);
    }

    if (file.size < minimum || file.size > maximum) {
      console.log("hi");
      console.log(process.env.AWS_BUCKET_NAME);
      return callback({ message: "File Size is Incorrect" },STATUS.UNAUTHORIZED);
    }
    // console.log(upload)

    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${uuidv4()}.${fileType}`,
      Body: file.buffer,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        return callback({ error: err },INTERNAL_SERVER);
      }
      const { Location } = data;
      // console.log(data)
      return callback({ url: Location, type: fileType },STATUS.SUCCESS);
      //   res.status(200).send({ url: Location, type: fileType });
    });

}

module.exports ={
    documentUploadService
}
