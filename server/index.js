const http = require('http');
const app = require('./app');
const config = require('./config');


const port = config.PORT || 3000;

const server = http.createServer(app);


// Start the Express server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});





// const express = require('express');
// const jwt = require('jsonwebtoken');

// const PORT = 3000;
// const HOST_URL = 'http://localhost:3000'

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended:false }));
// app.set('view engine', 'ejs');


// let user = {
//     id: "abc",
//     email: "harshawardhanmore14@gmail.com",
//     password: "abc"
// }

// const JWT_SECRET = "secret key here!";


// app.get('/', (req, res) => {
//     res.send("Im live");
// })

// app.get('/forgot-password', (req, res, next) => {
//     res.render("forgot-password");
// });
// app.post('/forgot-password', (req, res, next) => {
//     const { email } = req.body;
    
    
//     // check user exist in database
//     if(email != user.email){
//         res.send("user does not exist");
//         return;
//     }

//     // if exist, create one time link valid for 15 mins
//     const secret = JWT_SECRET + user.password;
//     const payload = {
//         email: user.email,
//         id: user.id,
//     }
//     const token = jwt.sign(payload, secret, {expiresIn: '15m'});
//     const link = `${HOST_URL}/reset-password/${user.id}/${token}`; // send this link to client email
//     console.log(link);
//     res.send("Link has been sent successfully");
// });

// app.get('/reset-password/:id/:token', (req, res, next) => {
//     const { id, token } = req.params;
    
//     // check if this id exist in database
//     if(id != user.id){
//         res.send("Invalid Id");
//         return ;
//     }

//     // we have valid id and user
//     const secret = JWT_SECRET + user.password;
//     try {
//         const payload = jwt.verify(token, secret); // if this succeeds then below code runs else catches error
//         res.render('reset-password', {email: user.email});
//     } catch (error) {
//         console.log(error.message);
//         res.send(error.message);
//     }




//     // ---------------

// });
// app.post('/reset-password/:id/:token', (req, res, next) => {
//     const { id, token } = req.params;
//     const { password1, password2 } = req.body;
    
//     // check if this id exist in database
//     if(id != user.id){
//         res.send("Invalid Id");
//         return ;
//     }
    
//     // we have valid id and user
//     const secret = JWT_SECRET + user.password;

//     try {
//         const payload = jwt.verify(token, secret); // if this succeeds then below code runs else catch block

//         // we can validate the password1 == password2 here but better do it on client side.

//         // find the user with payload id and email to make changes in password in database.
//         // hash the password before sending.
//         user.password = password1;
//         res.send(user);

//     } catch (error) {
//         console.log(error.message);
//         res.send(error.message);
//     }
// });

// app.listen(PORT, () => {
//     // res.send("Im Listning");
//     console.log("listening on port 3000")
// })