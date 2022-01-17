const express = require('express');
const contentServiceController = require('./content_service_controller');
const upload = require('./middleware/multer');

const router = new express.Router();

router.post(
  '/postCsv',
  upload.single('csv_file'),
  contentServiceController.postContent
);

router.post('/saveContent', contentServiceController.saveContent);

router.get('/readContent', contentServiceController.readContent);

router.patch('/updateTitle', contentServiceController.updateTitle);

router.patch('/updateStory', contentServiceController.updateStory);

router.delete('/deleteContent', contentServiceController.deleteContent);

router.get('/newContents', contentServiceController.retrieveNewContents);

router.post('/updateReadUsers', contentServiceController.updateReadUsers);

router.post('/updateLikedUsers', contentServiceController.updateLikedUsers);

router.get(
  '/sortByNumberOfLikes',
  contentServiceController.sortByNumberOfLikes
);

router.get(
  '/sortByNumberOfReads',
  contentServiceController.sortByNumberOfReads
);

router.get(
  '/sortByNumberOfReadsAndLikes',
  contentServiceController.sortByNumberOfReadsAndLikes
);

router.use(async (err, req, res, next) =>
  res.status(400).send({ status: 'failed', message: err.message })
);

module.exports = router;
