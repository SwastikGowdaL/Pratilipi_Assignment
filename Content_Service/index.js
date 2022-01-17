const path = require('path');
const app = require('./app');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

app.listen(3000, () => {
  console.log(`Server is up on PORT 3000`);
});
