import { GraphQLSchema } from 'graphql';
import ListingQueryRootType from './queries/rootQuery';
import ListingMutationRootType from './mutations/rootMutations';

const ListingAppSchema = new GraphQLSchema({
  query: ListingQueryRootType,
  mutation: ListingMutationRootType,
});

export default ListingAppSchema;
