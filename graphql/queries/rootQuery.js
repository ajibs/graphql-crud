const listingController = require('../../controllers/listingController');
const Authors = require('../data/authors');
const Posts = require('../data/posts');
const {
  AuthorType,
  PostType,
  ListingType,
} = require('../types/rootTypes');
const {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} = require('graphql');

const ListingQueryRootType = new GraphQLObjectType({
  name: 'ListingQuery',
  description: 'Listing Application Schema Query Root',
  fields: () => ({
    authors: {
      type: GraphQLList(AuthorType),
      description: 'List of all Authors',
      resolve() {
        return Authors;
      },
    },
    posts: {
      type: GraphQLList(PostType),
      description: 'List of all Posts',
      resolve() {
        return Posts;
      },
    },
    recentListings: {
      type: GraphQLList(ListingType),
      description: 'Get recent business listings',
      resolve() {
        return listingController.getAllListings();
      },
    },
    singleListing: {
      type: GraphQLList(ListingType),
      description: 'Get a single listing',
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return listingController.getSingleListing(args.id);
      },
    },
  }),
});

module.exports = ListingQueryRootType;
