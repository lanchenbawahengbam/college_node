function getAuthServicesList(req, callback) {
    let auth_json = [
        {
            userid:"STD_01",
            password:"new"

        },
        {
            userid:"STD_02",
            password:"new01"
        },
        {
            userid:"STD_03",
            password:"new02"
        }
    ];

    callback(200, auth_json);

};


module.exports = {
    getAuthServicesList
};