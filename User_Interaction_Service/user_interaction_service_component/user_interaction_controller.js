const userInteractionServices = require('./user_interaction_services');

const retrieveReadContents = async (req, res) => {
  try {
    const phoneNumber = req.query.phone_number;
    const readContents = await userInteractionServices.retrieveReadContents(
      phoneNumber
    );
    res.status(200).send(readContents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveLikedContents = async (req, res) => {
  try {
    const phoneNumber = req.query.phone_number;
    const likedContents = await userInteractionServices.retrieveLikedContents(
      phoneNumber
    );
    res.status(200).send(likedContents);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateReadContents = async (req, res) => {
  try {
    const phoneNumber = req.body.phone_number;
    const { content } = req.body;
    await userInteractionServices.updateReadContents(phoneNumber, content);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateLikedContents = async (req, res) => {
  try {
    const phoneNumber = req.body.phone_number;
    const { content } = req.body;
    await userInteractionServices.updateLikedContents(phoneNumber, content);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const checkUserExistence = async (req, res) => {
  try {
    const phoneNumber = req.query.phone_number;
    const userExistence = await userInteractionServices.checkUserExistence(
      phoneNumber
    );
    res.status(200).send({ userExistence });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

module.exports = {
  retrieveReadContents,
  retrieveLikedContents,
  updateReadContents,
  updateLikedContents,
  checkUserExistence,
};
