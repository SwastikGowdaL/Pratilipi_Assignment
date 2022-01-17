const userServices = require('./user_services');

const saveUser = async (req, res) => {
  try {
    const { first_name, last_name, email_id, phone_number } = req.body;
    await userServices.saveUser({
      first_name,
      last_name,
      email_id,
      phone_number,
    });
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const userDetails = await userServices.retrieveUserByEmail(email);
    res.status(200).send(userDetails);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const retrieveUserByPhone = async (req, res) => {
  try {
    const phoneNumber = req.query.phone_number;
    const userDetails = await userServices.retrieveUserByPhone(phoneNumber);
    res.status(200).send(userDetails);
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updatePhone = async (req, res) => {
  try {
    const oldPhoneNumber = req.body.old_phone_number;
    const newPhoneNumber = req.body.new_phone_number;
    await userServices.updatePhone(oldPhoneNumber, newPhoneNumber);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateEmail = async (req, res) => {
  try {
    const oldEmail = req.body.old_email_id;
    const newEmail = req.body.new_email_id;
    await userServices.updateEmail(oldEmail, newEmail);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateFirstName = async (req, res) => {
  try {
    const newFirstName = req.body.new_first_name;
    const phoneNumber = req.body.phone_number;
    await userServices.updateFirstName(newFirstName, phoneNumber);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const updateLastName = async (req, res) => {
  try {
    const newLastName = req.body.new_last_name;
    const phoneNumber = req.body.phone_number;
    await userServices.updateLastName(newLastName, phoneNumber);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const phoneNumber = req.body.phone_number;
    await userServices.deleteUser(phoneNumber);
    res.status(200).send({ status: 'success' });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const checkUserExistence = async (req, res) => {
  try {
    const phoneNumber = req.query.phone_number;
    const userExistence = await userServices.checkUserExistence(phoneNumber);
    res.status(200).send({ userExistence });
  } catch (err) {
    // generate logs
    res.status(400).send({ status: 'failed', message: err.message });
  }
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
