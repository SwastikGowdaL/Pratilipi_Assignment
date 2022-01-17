const express = require('express');
const userInteractionRouter = require('./user_interaction_service_component/user_interaction_router');

const app = express();
app.use(express.json());

app.use(userInteractionRouter);

module.exports = app;
