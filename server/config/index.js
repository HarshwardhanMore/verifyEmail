require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALECT: process.env.DB_DIALECT,
    HOST_URL: process.env.HOST_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    USER_EMAIL_ID: process.env.USER_EMAIL_ID,
    USER_PASSWORD: process.env.USER_PASSWORD,
}