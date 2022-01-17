const express = require('express');
const userServiceController = require('./user_service_controller');

const router = new express.Router();

router.post('/saveUser', userServiceController.saveUser);

router.get('/retrieveUserByEmail', userServiceController.retrieveUserByEmail);

router.get('/retrieveUserByPhone', userServiceController.retrieveUserByPhone);

router.patch('/updatePhone', userServiceController.updatePhone);

router.patch('/updateEmail', userServiceController.updateEmail);

router.patch('/updateFirstName', userServiceController.updateFirstName);

router.patch('/updateLastName', userServiceController.updateLastName);

router.delete('/deleteUser', userServiceController.deleteUser);

router.get('/checkUserExistence', userServiceController.checkUserExistence);

router.use(async (err, req, res, next) =>
  res.status(400).send({ status: 'failed', message: err.message })
);

module.exports = router;
