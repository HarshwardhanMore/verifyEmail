
const db = require('../models');
const config = require('../config');
const searchOperation = require("../helpers/searchOperation");

const User = db.user;
const EmailVerificationToken = db.emailVerificationToken;


exports.verifyEmail = async ({userId, token})=>{

    const emailVerificationData = await searchOperation.findUserIdAndToken({userId, token});
    if(emailVerificationData){
        try {
            await User.update({isVerified: true}, {
                where: {
                    id: userId,
                }
            });
            await EmailVerificationToken.destroy({
                where: {
                    userId: userId,
                    token: token
                }
            })
        } catch (error) {
            console.log("error verifying email : ", error.message);
        }
    }
    return emailVerificationData;
    

}