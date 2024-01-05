const express = require('express');
const router = express.Router();
const resetPasswordController = require('../controllers/resetPasswordController');

router.get('/resetPassword/:id/:token', resetPasswordController.resetPasswordGet);
router.post('/resetPassword/:id/:token', resetPasswordController.resetPasswordPost);

module.exports = router


