
const db = require('../models');
const config = require('../config');
const searchOperation = require("../helpers/searchOperation");

const User = db.user;


exports.verifyEmail = async ({userId, token})=>{

    const emailVerificationData = await searchOperation.findUserIdAndToken({userId, token});
    if(emailVerificationData){
        try {
            await User.update({isVerified: true}, {
                where: {
                    id: userId,
                }
            });
        } catch (error) {
            console.log("error verifying email : ", error.message);
        }
    }
    return emailVerificationData;
    

}