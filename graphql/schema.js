const { GraphQLSchema } = require('graphql');
const ListingQueryRootType = require('./queries/rootQuery');
const ListingMutationRootType = require('./mutations/rootMutations');
import rootTypes from './types/rootTypes';


const ListingAppSchema = new GraphQLSchema({
  query: ListingQueryRootType,
  mutation: ListingMutationRootType,
});

module.exports = ListingAppSchema;
