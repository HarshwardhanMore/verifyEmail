const router = require('express').Router();

router.use('/user', require('./addUser'));
router.use('/user', require('./forgotPassword'));
router.use('/user', require('./resetPassword'));
router.use('/user', require('./verifyEmail'));

module.exports = router

