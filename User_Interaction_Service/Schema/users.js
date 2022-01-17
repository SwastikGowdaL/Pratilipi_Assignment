const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  read_contents: [
    {
      type: String,
    },
  ],
  liked_contents: [
    {
      type: String,
    },
  ],
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
