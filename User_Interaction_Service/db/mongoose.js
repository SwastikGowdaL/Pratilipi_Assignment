const mongoose = require('mongoose');

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
