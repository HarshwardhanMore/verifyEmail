const nodemailer = require("nodemailer");

const fs = require("fs");
const handlebars = require("handlebars");

require("dotenv").config();



const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_EMAIL_ID,
    pass: process.env.USER_PASSWORD,
  },
});


const sendResetPasswordEmail = async (receiver, link)=>{

  const source = fs.readFileSync("./helpers/temp.html", 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    link: link,
  }
  const htmlToSend = template(replacements);

  const mailOptions = {
    from: {
        name: "ProducTry",
        address: process.env.USER_EMAIL_ID
    },
    to: [receiver],
    subject: "Reset Password For ProducTry",
    text: "Reset Password For ProducTry",
    html: htmlToSend
    // html: ` <b2>Click below link to reset password</b2> <br/> 
    //         <a class="link" href="${link}">${link}</a>`,
  }

  try {
    await transporter.sendMail(mailOptions);
      console.log("Email Sent!");
  } catch (error) {
      console.log(error);
  }
}

module.exports = sendResetPasswordEmail;



// const sendMail = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();

//   // connect with the smtp
//   let transporter = await nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "wellington.dibbert77@ethereal.email",
//       pass: "n92TjfmJMaDTYg1WQ1",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"wellington.dibbert77@ethereal.email', // sender address
//     to: "harshawardhanmore14@gmail.com", // list of receivers
//     subject: "Hello Thapa", // Subject line
//     text: "Hello YT Thapa", // plain text body
//     html: "<b>Hello YT Thapa</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   res.json(info);
// };

// module.exports = sendMail;