require('../db/mongoose');
const Users = require('../Schema/users');

const queryReadContents = async (phoneNumber) =>
  Users.findOne(
    { phone_number: phoneNumber },
    {
      __v: 0,
      _id: 0,
      first_name: 0,
      last_name: 0,
      email_id: 0,
      liked_contents: 0,
      phone_number: 0,
    }
  );

const queryLikedContents = async (phoneNumber) =>
  Users.findOne(
    { phone_number: phoneNumber },
    {
      __v: 0,
      _id: 0,
      first_name: 0,
      last_name: 0,
      email_id: 0,
      read_contents: 0,
      phone_number: 0,
    }
  );

const queryUserID = async (phoneNumber) =>
  Users.find({ phone_number: phoneNumber }, { _id: 1 });

const updateReadContents = async (phoneNumber, content) =>
  Users.updateOne(
    { phone_number: phoneNumber },
    { $addToSet: { read_contents: content } }
  );

const updateLikedContents = async (phoneNumber, content) =>
  Users.updateOne(
    { phone_number: phoneNumber },
    { $addToSet: { liked_contents: content } }
  );

const checkUserExistence = async (phoneNumber) =>
  Users.findOne({ phone_number: phoneNumber }).count();

module.exports = {
  queryReadContents,
  queryLikedContents,
  updateReadContents,
  queryUserID,
  updateLikedContents,
  checkUserExistence,
};
