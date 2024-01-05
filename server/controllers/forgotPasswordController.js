const forgotPasswordService = require('../services/forgotPasswordService');
const {buildResponce} = require('../helpers/buildResponce');

const jwt = require('jsonwebtoken');

let user = {
    id: "abc",
    email: "harshawardhanmore14@gmail.com",
    password: "abc"
}


exports.forgotPasswordGet = async (req, res) => {
    res.render("forgot-password");
};


exports.forgotPasswordPost = async (req, res) => {

    try {
        const { email } = req.body;
        console.log("email --->");
        console.log(email);
        await forgotPasswordService.forgotPassword( {email} );
        // if (data != null) {
        //     buildResponce(res, 200,
        //         {
        //             error: false,
        //             message: "Link has been sent!",
        //             data: ''
        //         })
        // } else {
        //     buildResponce(res, 200,
        //         {
        //             error: true,
        //             message: "User not present in database!, please try again",
        //             data: ''
        //         })
        // }
    } catch (error) {
        console.log(error.message);

        // buildResponce(res, 500,
        //     {
        //         error: true,
        //         message: "Internal Server Error",
        //         data: ''
        //     })
    }

}