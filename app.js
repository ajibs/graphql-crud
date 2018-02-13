const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

// retrieve information from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load routes
app.use('/', routes);

module.exports = app;
