const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv)$/)) {
      return cb(new Error('Please provide a valid csv file'));
    }
    cb(undefined, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../assets'));
    },
    filename: (req, file, cb) => {
      const randomString = nanoid.nanoid(10);
      const filename = `${randomString}.csv`;
      cb(null, filename);
    },
  }),
});

module.exports = upload;
