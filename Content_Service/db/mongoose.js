const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect('mongodb://admin:password@localhost:27000', {
  useNewUrlParser: true,
});

mongoose.connection
  .once('open', () => {
    console.log('DB connected');
  })
  .on('error', (error) => {
    console.log('err', error);
  });
