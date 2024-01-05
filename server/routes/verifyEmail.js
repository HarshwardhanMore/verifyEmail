const express = require('express');
const router = express.Router();
const verifyEmailController = require('../controllers/verifyEmailController');

router.get('/verifyEmail/:userId/:token', verifyEmailController.verifyEmail);

module.exports = router


