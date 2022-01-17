const express = require('express');
const userInteractionController = require('./user_interaction_controller');

const router = new express.Router();

router.get(
  '/retrieveReadContents',
  userInteractionController.retrieveReadContents
);

router.get(
  '/retrieveLikedContents',
  userInteractionController.retrieveLikedContents
);

router.post(
  '/updateReadContents',
  userInteractionController.updateReadContents
);

router.post(
  '/updateLikedContents',
  userInteractionController.updateLikedContents
);

router.get('/checkUserExistence', userInteractionController.checkUserExistence);

module.exports = router;
