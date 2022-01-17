/* eslint-disable camelcase */
const userServicesDAL = require('./user_service_DAL');

const saveUser = async (userDetails) => userServicesDAL.saveUser(userDetails);

const retrieveUserByEmail = async (email) => {
  const userDetails = await userServicesDAL.queryUserByEmail(email);
  if (!userDetails) throw new Error('user not found');
  return userDetails;
};

const retrieveUserByPhone = async (phoneNumber) => {
  const userDetails = await userServicesDAL.queryUserByPhone(phoneNumber);
  if (!userDetails) throw new Error('user not found');
  return userDetails;
};

const updatePhone = async (oldPhoneNumber, newPhoneNumber) => {
  const updatedPhone = await userServicesDAL.updatePhone(
    oldPhoneNumber,
    newPhoneNumber
  );
  if (!updatedPhone.modifiedCount) throw new Error('update was unsuccessful');
  return updatedPhone;
};

const updateEmail = async (oldEmail, newEmail) => {
  const updatedEmail = await userServicesDAL.updateEmail(oldEmail, newEmail);
  if (!updatedEmail.modifiedCount) throw new Error('update was unsuccessful');
  return updatedEmail;
};

const updateFirstName = async (newFirstName, phoneNumber) => {
  const updatedFirstName = await userServicesDAL.updateFirstName(
    newFirstName,
    phoneNumber
  );
  if (!updatedFirstName.modifiedCount)
    throw new Error('update was unsuccessful');
  return updatedFirstName;
};

const updateLastName = async (newLastName, phoneNumber) => {
  const updatedLastName = await userServicesDAL.updateLastName(
    newLastName,
    phoneNumber
  );
  if (!updatedLastName.modifiedCount)
    throw new Error('update was unsuccessful');
  return updatedLastName;
};

const deleteUser = async (phoneNumber) => {
  const deletedUser = await userServicesDAL.deleteUser(phoneNumber);
  if (!deletedUser.deletedCount) throw new Error('user not found');
  return deletedUser;
};

const checkUserExistence = async (phoneNumber) => {
  const userExistence = await userServicesDAL.checkUserExistence(phoneNumber);
  if (userExistence > 0) return true;
  return false;
};

module.exports = {
  saveUser,
  retrieveUserByEmail,
  retrieveUserByPhone,
  updatePhone,
  updateEmail,
  updateFirstName,
  updateLastName,
  deleteUser,
  checkUserExistence,
};
