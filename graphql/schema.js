import { GraphQLSchema } from 'graphql';
import query from './queries/rootQuery';
import mutation from './mutations/rootMutations';

export default new GraphQLSchema({
  query,
  mutation,
});
