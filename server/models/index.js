const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
    config.DB_DATABASE,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT ,
    dialectModule: require('mysql2')
  });

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.emailVerificationToken = require('./emailVerificationToken')(sequelize, Sequelize);



module.exports = db;