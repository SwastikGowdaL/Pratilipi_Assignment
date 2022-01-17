const path = require('path');
const fs = require('fs');

const deleteAsset = async (filename) => {
  fs.unlinkSync(`${__dirname}\\${filename}`);
};

module.exports = deleteAsset;
