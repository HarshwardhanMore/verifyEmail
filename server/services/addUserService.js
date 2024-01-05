const db = require('../models');
const { randomBytes } = require('crypto');
const config = require('../config');
const jwt = require('jsonwebtoken');
const sendVerificationEmail = require('../helpers/sendVerificationEmail');
const searchOperation = require('../helpers/searchOperation');

const User = db.user;
const EmailVerificationToken = db.emailVerificationToken;



exports.addUser = async (userDetails)=>{

    try {

        const getUser = await searchOperation.findUserByEmail(userDetails.email);
        if(getUser){
            console.log("User already exists");
            return null;
        }

        const newUser = await User.create(userDetails)

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
        
        try {
            await sendVerificationEmail(newUser.email, link);
        } catch (error) {
            console.log(error.message);
        }

        return newUser;


        // after user adding to database, redirect user to new static page to tell that user verification is sent on registered email
        // ON The same page, put there if else so that as soon as it will get responce from backend with 200 status code after user clicking the link, then show him user verified text.
    } catch (error) {
        throw new Error("Error adding user : "+error.message);
    }
}