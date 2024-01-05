const db = require('../models');
const { randomBytes } = require('crypto');
const config = require('../config');
const jwt = require('jsonwebtoken');

const User = db.user;
const EmailVerificationToken = db.emailVerificationToken;



exports.addUser = async (userDetails)=>{

    try {
        // const getUser = await User.findOne({
        //     where: {
        //         email: userDetails.email
        //     }
        // });
        // if(getUser != NULL){
        //     buildResponce(res, 200,
        //         {
        //             error: false,
        //             message: "User already exists",
        //             data: ''
        //         })
        //     return ;
        // }
        const newUser = await User.create(userDetails)

        // if(!newUser) {
        //     return buildResponce(res, 200,
        //         {
        //             error: false,
        //             message: "Unable to create user",
        //             data: ''
        //         })
        // }

        // token generated
        // const userId = (newUser.id).toString();
        // const token = randomBytes(16).toString('hex');
        // const verificationData = {userId: userId.toString(), token: token}
        // const newEmailVerificationToken = await EmailVerificationToken.create(verificationData);
        // console.log(newEmailVerificationToken);
        // const link = `http://localhost:3000/user/verifyEmail`

            
        // if exist, create one time link valid for 15 mins
        const secret = config.JWT_SECRET + newUser.password;
        const payload = {
            email: newUser.email,
            id: newUser.id,
        }

        const userId = newUser.id;
        const token = jwt.sign(payload, secret, {expiresIn: '15m'});
        const verificationData = {userId: userId, token: token};
        const newEmailVerificationToken = await EmailVerificationToken.create(verificationData);
        const link = `${config.HOST_URL}/user/verifyEmail/${userId}/${token}`; // send this link to client email
        // await sendMail.resetPassword(email);
        console.log(link);
        
        // try {
        //     await sendResetPasswordEmail(email, link);
        // } catch (error) {
        //     console.log(error.message);
        // }

        return newUser;
    } catch (error) {
        throw new Error("Error adding user : "+error.message);
    }
}