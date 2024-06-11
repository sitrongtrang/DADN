const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/profile', userController.getUser);

module.exports = router;
