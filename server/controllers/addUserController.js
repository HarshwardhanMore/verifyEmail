
const addUserService = require('../services/addUserService');
const {buildResponce} = require('../helpers/buildResponce');



exports.addUser = async (req, res) => {

    try {
        const userDetails = req.body;
        const data = await addUserService.addUser(userDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "User added successfully",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to add, please try again",
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