const Library = require("../../model/librarySchema")
const STATUS = require("../../helper/status")

async function libraryRegistrationService(req, callback) {

    const { bookName,bookNumber,quantity,instock, departmentcode,author } = req;

    const library = await Library.findOne({ bookNumber })
    if (library) {
        errors.bookNumber = "This book is already added"
        callback({
            errors
        }, STATUS.BAD_REQ)
    }

    const newLibrary = await new Library({
        bookName,
        bookNumber,
        quantity,
        instock,
        departmentcode,
        author   
    })

    newLibrary.save()
        .then((result) => {
            console.log("CREATED : ", result)

            callback({
                result: result
            }, STATUS.SUCCESS)

        })
        .catch((error) => {
            console.log("ERROR : ", error)
            const errors = { message: `error in book", ${err.message}` }

            callback({
                result: errors
            }, STATUS.INTERNAL_SERVER)
        })

}

async function getLibraryBookService(req, callback) {

    Library.aggregate([{
        $lookup:{ 
            from:'departments',
            localField:'departmentcode',
            foreignField:'departmentcode',
            as:'dept_output'
        }
    }]).then((result) => {
        console.log("BOOK DATA : ", result)

        callback({
            result: result  
        }, STATUS.SUCCESS)

    })
    .catch((error) => {
        console.log("ERROR : ", error)
        const errors = { message: `error in showing books", ${err.message}` }

        callback({
            result: errors
        }, STATUS.INTERNAL_SERVER)
    })
    

}

module.exports={
    libraryRegistrationService,
    getLibraryBookService
}
