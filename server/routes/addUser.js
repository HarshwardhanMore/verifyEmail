const express = require('express');
const router = express.Router();
const addUserController = require('../controllers/addUserController');

router.get('/addUser', addUserController.addUserForm);
router.post('/addUser', addUserController.addUser);

module.exports = router


