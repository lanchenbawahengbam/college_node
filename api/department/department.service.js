

function getAllDeptService(req, callback) {

    let department_list = [
        {
            name: "Computer Science and Engineering",
            value: "cse"
        },
        {
            name: "Electronics and Communication Engineering",
            value: "ece"
        },
        {
            name: "Civil Engineering",
            value: "ce"
        },
        {
            name: "Mechanical Engineering",
            value: "me"
        },
        {
            name: "Electrical Engineering",
            value: "ee"
        }
    ]

    callback(department_list, 200)

}

module.exports = {
    getAllDeptService
}