/* eslint-disable camelcase */
require('../db/mongoose');
const Content = require('../schema/content');

const saveCsvData = async ({ title, story, user_id, date_published }) => {
  const date = new Date(date_published);
  const data = new Content({
    title,
    story,
    user_id,
    date_published: date,
  });
  return await data.save();
};

const queryContent = async (title) =>
  Content.findOne({ title }, { date_published: 0, user_id: 0, __v: 0, _id: 0 });

const updateTitle = async (oldTitle, newTitle) =>
  Content.updateOne({ title: oldTitle }, { title: newTitle });

const updateStory = async (title, newStory) =>
  Content.updateOne({ title }, { story: newStory });

const deleteContent = async (title) => Content.deleteOne({ title });

const queryNewContents = async () =>
  Content.find({}).sort({ date_published: -1 });

const updateReadUsers = async (title, userID) =>
  Content.updateOne({ title }, { $addToSet: { read_users: userID } });

const updateLikedUsers = async (title, userID) =>
  Content.updateOne({ title }, { $addToSet: { liked_users: userID } });

const queryAndSortByNumberOfLikes = async () =>
  Content.aggregate([
    {
      $project: {
        liked_users: 1,
        read_users: 1,
        title: 1,
        story: 1,
        date_published: 1,
        user_id: 1,
        _id: 0,
        liked_count: { $size: '$liked_users' },
      },
    },
    { $sort: { liked_count: -1 } },
  ]);

const queryAndSortByNumberOfReads = async () =>
  Content.aggregate([
    {
      $project: {
        read_users: 1,
        liked_users: 1,
        title: 1,
        story: 1,
        date_published: 1,
        user_id: 1,
        _id: 0,
        read_count: { $size: '$read_users' },
      },
    },
    { $sort: { read_count: -1 } },
  ]);

const queryAndSortByNumberOfReadsAndLikes = async () =>
  Content.aggregate([
    {
      $project: {
        read_users: 1,
        liked_users: 1,
        title: 1,
        story: 1,
        date_published: 1,
        user_id: 1,
        _id: 0,
        read_count: { $size: '$read_users' },
        liked_count: { $size: '$liked_users' },
      },
    },
    { $sort: { read_count: -1, liked_count: -1 } },
  ]);

module.exports = {
  saveCsvData,
  queryContent,
  updateTitle,
  deleteContent,
  updateStory,
  queryNewContents,
  updateReadUsers,
  updateLikedUsers,
  queryAndSortByNumberOfLikes,
  queryAndSortByNumberOfReads,
  queryAndSortByNumberOfReadsAndLikes,
};
