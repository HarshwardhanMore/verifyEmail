const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');



const app = express();


const allowedOrigins = [
    "http://localhost:4200"
  ];
app.use(cors({ origin: allowedOrigins, credentials: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.set('view engine', 'ejs');


app.use(require('./routes'));


app.get('/', (req, res) => {
    res.send("Im live");
})


// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 
// app.use(cors(corsOptions));

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

db.sequelize.sync().then(()=>{
    console.log('Models Sync Successfully')
}).catch((err)=>{  
    console.log('Unable to sync model', err)
});




module.exports = app;



