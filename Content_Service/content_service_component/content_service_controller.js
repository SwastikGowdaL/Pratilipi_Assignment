const contentServices = require('./content_services');

const postContent = async (req, res, next) => {
  try {
    await contentServices.storeCsvData(req.file.filename);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const saveContent = async (req, res) => {
  try {
    const { user_id, story, title, date_published } = req.body;
    await contentServices.saveContent({
      user_id,
      story,
      title,
      date_published,
    });
    res.status(200).send({ status: 'success' });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const readContent = async (req, res) => {
  try {
    const content = await contentServices.readContent(req.query.title);
    res.status(200).send(content);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateTitle = async (req, res) => {
  try {
    const { old_title, new_title } = req.body;
    await contentServices.updateTitle(old_title, new_title);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const deleteContent = async (req, res) => {
  try {
    await contentServices.deleteContent(req.body.title);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateStory = async (req, res) => {
  try {
    await contentServices.updateStory(req.body.title, req.body.new_story);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveNewContents = async (req, res) => {
  try {
    const contents = await contentServices.retrieveNewContents();
    res.status(200).send(contents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateReadUsers = async (req, res) => {
  try {
    await contentServices.updateReadUsers(req.body.title, req.body.user_id);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateLikedUsers = async (req, res) => {
  try {
    await contentServices.updateLikedUsers(req.body.title, req.body.user_id);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const sortByNumberOfLikes = async (req, res) => {
  try {
    const contents = await contentServices.sortByNumberOfLikes();
    res.status(200).send(contents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const sortByNumberOfReads = async (req, res) => {
  try {
    const contents = await contentServices.sortByNumberOfReads();
    res.status(200).send(contents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const sortByNumberOfReadsAndLikes = async (req, res) => {
  try {
    const contents = await contentServices.sortByNumberOfReadsAndLikes();
    res.status(200).send(contents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

module.exports = {
  postContent,
  readContent,
  updateTitle,
  deleteContent,
  updateStory,
  retrieveNewContents,
  updateReadUsers,
  updateLikedUsers,
  sortByNumberOfLikes,
  sortByNumberOfReads,
  sortByNumberOfReadsAndLikes,
  saveContent,
};
