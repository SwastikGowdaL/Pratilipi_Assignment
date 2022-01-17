/* eslint-disable camelcase */
require('../db/mongoose');
const Users = require('../Schema/users');

const saveUser = async ({ first_name, last_name, email_id, phone_number }) => {
  const user = new Users({
    first_name,
    last_name,
    email_id,
    phone_number,
  });
  await user.save();
};

const queryUserByEmail = async (email) =>
  Users.findOne({ email_id: email }, { __v: 0, _id: 0 });

const queryUserByPhone = async (phoneNumber) =>
  Users.findOne({ phone_number: phoneNumber }, { __v: 0, _id: 0 });

const updatePhone = async (oldPhoneNumber, newPhoneNumber) =>
  Users.updateOne(
    { phone_number: oldPhoneNumber },
    { phone_number: newPhoneNumber }
  );

const updateEmail = async (oldEmail, newEmail) =>
  Users.updateOne({ email_id: oldEmail }, { email_id: newEmail });

const updateFirstName = async (newFirstName, phoneNumber) =>
  Users.updateOne({ phone_number: phoneNumber }, { first_name: newFirstName });

const updateLastName = async (newLastName, phoneNumber) =>
  Users.updateOne({ phone_number: phoneNumber }, { last_name: newLastName });

const deleteUser = async (phoneNumber) =>
  Users.deleteOne({ phone_number: phoneNumber });

const checkUserExistence = async (phoneNumber) =>
  Users.findOne({ phone_number: phoneNumber }).count();

module.exports = {
  saveUser,
  queryUserByEmail,
  queryUserByPhone,
  updatePhone,
  updateEmail,
  updateFirstName,
  updateLastName,
  deleteUser,
  checkUserExistence,
};
