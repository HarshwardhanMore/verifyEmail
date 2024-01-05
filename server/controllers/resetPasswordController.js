const config = require('../config');
const jwt = require('jsonwebtoken');

const resetPasswordService = require('../services/resetPasswordService');
const {buildResponce} = require('../helpers/buildResponce');
const searchOperation = require("../helpers/searchOperation");


let user = {
    id: "abc",
    email: "harshawardhanmore14@gmail.com",
    password: "abc"
}


exports.resetPasswordGet = async (req, res) => {
    const { id, token } = req.params;
    console.log("reset password get data : " + id + " " + token);
    
    
    // check if this id exist in database
    // if(id != user.id){
    //     res.send("Invalid Id");
    //     return ;
    // }

    const user = await searchOperation.findUserById(id);
    console.log("fetchedUser : "+ user);
    if(user == null){
        console.log("invalid id");
        return;
    }

    // we have valid id and user
    const secret = config.JWT_SECRET + user.password;
    try {
        const payload = jwt.verify(token, secret); // if this succeeds then below code runs else catches error
        res.render('reset-password', {email: user.email});
    } catch (error) {
        console.log("Error in reset password "+error.message);
        res.send(error.message);
    }

    console.log("reset password executed");
}

exports.resetPasswordPost = async (req, res) => {

    try {
        const { id, token } = req.params;
        const {password1, password2} = req.body;
        console.log("reset data are : " + id + " " + token + " " + password1)
        await resetPasswordService.resetPassword({ id, token, password1 });
        // if (data != null) {
        //     buildResponce(res, 200,
        //         {
        //             error: false,
        //             message: "Password Reset successfully",
        //             data: data
        //         })
        // } else {
        //     buildResponce(res, 200,
        //         {
        //             error: true,
        //             message: "Unable to reset password, please try again",
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