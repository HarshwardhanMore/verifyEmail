const verifyEmailService = require('../services/verifyEmailService');
const {buildResponce} = require('../helpers/buildResponce');

exports.verifyEmail = async (req, res) => {

    const {userId, token} = req.params;

    if(!userId || !token){
        return buildResponce(res, 200,
            {
                error: false,
                message: "Unable to verify email",
                data: ''
            })
    }

    try {
        const emailVerificationToken = await verifyEmailService.verifyEmail({userId, token});
        if(emailVerificationToken){
            res.send("Email Verified!");
        } else {
            res.send("Unable to verify email");
        }
    } catch (error) {
        console.log(error.message);
    }

    // res.render("forgot-password");
};