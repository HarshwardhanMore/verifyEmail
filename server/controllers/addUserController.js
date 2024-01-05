
const addUserService = require('../services/addUserService');
const {buildResponce} = require('../helpers/buildResponce');


exports.addUserForm = async (req, res) => {
    res.render('add-user');
}

exports.addUser = async (req, res) => {

    try {
        const userDetails = req.body;
        const data = await addUserService.addUser(userDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "User added successfully, email verification is sent to registered email address",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "User already exists",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}