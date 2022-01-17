const express = require('express');
const userServicesRouter = require('./user_service_component/user_service_router');

const app = express();
app.use(express.json());

app.use(userServicesRouter);

module.exports = app;
