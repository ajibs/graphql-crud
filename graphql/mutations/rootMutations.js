const listingController = require('../../controllers/listingController');
const { ListingType } = require('../types/rootTypes');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql');

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
        return listingController.addNewListing(args);
      },
    },
  }),
});

module.exports = ListingMutationRootType;
