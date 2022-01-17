const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  story: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  date_published: {
    type: Date,
    required: true,
  },
  read_users: [
    {
      type: String,
    },
  ],
  liked_users: [
    {
      type: String,
    },
  ],
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
