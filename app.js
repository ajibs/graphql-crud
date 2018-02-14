/*
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
*/

// <!-- End of REST -->

// beginning of graphql
const express = require('express');
const graphqlHTTP = require('express-graphql');


/* Here a simple schema is constructed using the GraphQL schema language (buildSchema).
   More information can be found in the GraphQL spec release */

const schema = require('./src/schema');

const app = express();
app.use('/', graphqlHTTP({
  schema,
  graphiql: true // Set to false if you don't want graphiql enabled
}));

module.exports = app;
