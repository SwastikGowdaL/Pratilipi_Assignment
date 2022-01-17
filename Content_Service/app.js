const express = require('express');
const contentServiceRouter = require('./content_service_component/content_service_router');
const publisher = require('./content_service_component/helpers/publisher');

const app = express();
app.use(express.json());

app.use(contentServiceRouter);

module.exports = app;
