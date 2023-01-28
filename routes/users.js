const express = require('express');
const Users = require('../models/Users')
const userController = require('../controllers/usersControllers')
const router = express.Router();

/* GET users listing. */
router.get('/users/view', userController.getAllUser);
router.post("/users/create", userController.createUser)

module.exports = router;
