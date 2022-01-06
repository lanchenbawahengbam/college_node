const Admission = require("../../model/admissionSchema");
const STATUS = require("../../helper/status")


async function admissionRegistrationService(req, callback) {

    const { name, email,semester,studentMobileNumber, gender, amount, departmentcode, year,transactionId, registrationNumber } = req;

    const admission = await Admission.findOne({ transactionId })
    if (admission) {
        errors.transactionId = "This Student has already admitted"
        callback({
            errors
        }, STATUS.BAD_REQ)
    }

    const newAdmission = await new Admission({
        name,
        email,
        semester,
        year,
        departmentcode,
        gender,
        transactionId,
        amount,
        registrationNumber,
        studentMobileNumber
    })

    newAdmission.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in adding admitted student", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })

}

async function getAdmittedStudentService(req, callback) {

    Admission.aggregate([{
        $lookup:{ 
            from:'students',
            localField:'registrationNumber',
            foreignField:'registrationNumber',
            as:'admitted_output'
        }
    }]).then((result) => {
        console.log("ADMITTED STUDENT DATA : ", result)

        callback({
            result: result  
        }, STATUS.SUCCESS)

    })
    .catch((error) => {
        console.log("ERROR : ", error)
        const errors = { message: `error in showing the ADMITTED  Student data", ${err.message}` }

        callback({
            result: errors
        }, STATUS.INTERNAL_SERVER)
    })
    

}



module.exports = {
    admissionRegistrationService,
    getAdmittedStudentService
}
