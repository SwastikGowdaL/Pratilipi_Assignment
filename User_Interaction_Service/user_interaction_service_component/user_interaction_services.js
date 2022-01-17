const axios = require('axios');
const userInteractionDAL = require('./user_interaction_DAL');

const checkUserExistence = async (phoneNumber) => {
  const userExistence = await userInteractionDAL.checkUserExistence(
    phoneNumber
  );
  if (userExistence) return true;
  return false;
};

const retrieveReadContents = async (phoneNumber) => {
  const userExists = await checkUserExistence(phoneNumber);
  if (!userExists) throw new Error('user does not exist');
  return await userInteractionDAL.queryReadContents(phoneNumber);
};

const retrieveLikedContents = async (phoneNumber) => {
  const userExists = await checkUserExistence(phoneNumber);
  if (!userExists) throw new Error('user does not exist');
  return await userInteractionDAL.queryLikedContents(phoneNumber);
};

const updateReadUsers = async (userID, content) => {
  try {
    await axios.post('http://localhost:3000/updateReadUsers', {
      user_id: userID,
      title: content,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateLikedUsers = async (userID, content) => {
  try {
    await axios.post('http://localhost:3000/updateLikedUsers', {
      user_id: userID,
      title: content,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateReadContents = async (phoneNumber, content) => {
  const userExists = await checkUserExistence(phoneNumber);
  if (!userExists) throw new Error('user does not exist');
  const userID = await userInteractionDAL.queryUserID(phoneNumber);
  await updateReadUsers(String(userID[0]._id), content);
  const updatedContent = await userInteractionDAL.updateReadContents(
    phoneNumber,
    content
  );
  if (!updatedContent.modifiedCount) throw new Error('update was unsuccessful');
  return updatedContent;
};

const updateLikedContents = async (phoneNumber, content) => {
  const userExists = await checkUserExistence(phoneNumber);
  if (!userExists) throw new Error('user does not exist');
  const userID = await userInteractionDAL.queryUserID(phoneNumber);
  await updateLikedUsers(String(userID[0]._id), content);
  const updatedContent = await userInteractionDAL.updateLikedContents(
    phoneNumber,
    content
  );
  if (!updatedContent.modifiedCount) throw new Error('update was unsuccessful');
  return updatedContent;
};

module.exports = {
  retrieveReadContents,
  retrieveLikedContents,
  updateReadContents,
  updateLikedContents,
  checkUserExistence,
};
