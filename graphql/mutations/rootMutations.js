import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import {
  addNewListing,
  updateListing,
  deleteListing,
} from '../../controllers/listingController';
import { ListingType } from '../types/rootTypes';


const ListingMutationRootType = new GraphQLObjectType({
  name: 'ListingMutation',
  description: 'Change or create listing',
  fields: () => ({
    addListing: {
      type: ListingType,
      description: 'add a new listing',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return addNewListing(args);
      },
    },
    updateListing: {
      type: ListingType,
      description: 'update an existing listing',
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return updateListing(args);
      },
    },
    deleteListing: {
      type: ListingType,
      description: 'delete a listing',
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return deleteListing(args);
      },
    },
  }),
});

export default ListingMutationRootType;
