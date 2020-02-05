const express = require('express');
const router = express.Router();
const userController = require('../controllers/crud-controller');
router.get('/createUsers', userController.createUser);
router.get('/updateUser', userController.updateUser);
router.post('/deleteUser', userController.deleteUser);
router.get('/shouwUsers', userController.showUsers);

module.exports = router;