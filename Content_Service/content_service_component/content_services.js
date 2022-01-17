const fs = require('fs');
const path = require('path');
const csv = require('@fast-csv/parse');
const contentServiceDAL = require('./content_service_DAL');
const publisher = require('./helpers/publisher');

const scrapeDataFromCSV = async (csvFile) => {
  try {
    fs.createReadStream(path.resolve(__dirname, 'assets', csvFile))
      .pipe(csv.parse({ headers: true }))
      .on('error', async (error) => console.error(error))
      .on('data', async (row) => {
        await publisher.publishCsvContent(row);
      });
  } catch (err) {
    // generate logs
    throw err;
  }
};

const storeCsvData = async (csvFile) => {
  try {
    return await publisher.publishCsvFile(csvFile);
  } catch (err) {
    // generate logs
    throw err;
  }
};

const saveContent = async (content) => {
  try {
    const a = await contentServiceDAL.saveCsvData(content);
    console.log(a);
    return a;
  } catch (err) {
    // generate logs
  }
};

const readContent = async (title) => {
  const content = await contentServiceDAL.queryContent(title);
  if (!content) throw new Error('content not found');
  return content;
};

const updateTitle = async (oldTitle, newTitle) => {
  const updatedTitle = await contentServiceDAL.updateTitle(oldTitle, newTitle);
  if (!updatedTitle.modifiedCount) throw new Error('update was unsuccessful');
  return updatedTitle;
};

const deleteContent = async (title) => {
  const deletedContent = await contentServiceDAL.deleteContent(title);
  if (!deletedContent.deletedCount) throw new Error('content not found');
  return deletedContent;
};

const updateStory = async (title, newStory) => {
  const updatedStory = await contentServiceDAL.updateStory(title, newStory);
  if (!updatedStory.modifiedCount) throw new Error('update was unsuccessful');
  return updatedStory;
};

const retrieveNewContents = async () => contentServiceDAL.queryNewContents();

const updateReadUsers = async (title, userID) => {
  const updatedReadUsers = await contentServiceDAL.updateReadUsers(
    title,
    userID
  );
  if (!updatedReadUsers.modifiedCount)
    throw new Error('update was unsuccessful');
  return updatedReadUsers;
};

const updateLikedUsers = async (title, userID) => {
  const updatedLikedUsers = await contentServiceDAL.updateLikedUsers(
    title,
    userID
  );
  if (!updatedLikedUsers.modifiedCount)
    throw new Error('update was unsuccessful');
  return updatedLikedUsers;
};

const sortByNumberOfLikes = async () =>
  contentServiceDAL.queryAndSortByNumberOfLikes();

const sortByNumberOfReads = async () =>
  contentServiceDAL.queryAndSortByNumberOfReads();

const sortByNumberOfReadsAndLikes = async () =>
  contentServiceDAL.queryAndSortByNumberOfReadsAndLikes();

module.exports = {
  scrapeDataFromCSV,
  storeCsvData,
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
