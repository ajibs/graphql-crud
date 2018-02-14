const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema');

const app = express();
app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

module.exports = app;
