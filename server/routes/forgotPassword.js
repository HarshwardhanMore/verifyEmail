const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPasswordController');

router.get('/forgotPassword', forgotPasswordController.forgotPasswordGet);
router.post('/forgotPassword', forgotPasswordController.forgotPasswordPost);

module.exports = router


