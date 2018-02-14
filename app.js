import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const app = express();

app.use('/', (req, res) => res.send('hello world'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default app;
