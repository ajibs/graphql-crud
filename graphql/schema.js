const listingController = require('../controllers/listingController');

const _ = require('lodash');

// Authors and Posts get data from JSON Arrays in the respective files.
const Authors = require('./data/authors');
const Posts = require('./data/posts');


/* Here a simple schema is constructed without using the GraphQL query language.
  e.g. using 'new GraphQLObjectType' to create an object type
*/

const {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    twitterHandle: { type: GraphQLString },
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represents a Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(post) {
        return _.find(Authors, a => a.id == post.author_id);
      },
    },
  }),
});

const ListingType = new GraphQLObjectType({
  name: 'Listing',
  description: 'This represents a listing',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    description: { type: GraphQLString },
    website: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// This is the Root Query
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

// This is the schema declaration
const ListingAppSchema = new GraphQLSchema({
  query: ListingQueryRootType,
  mutation: ListingMutationRootType,
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: ListingMutationRootType
});


module.exports = ListingAppSchema;
