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
  GraphQLSchema
} = require('graphql');

const ListingType = new GraphQLObjectType({
  name: 'Listing',
  description: 'This represents a listing',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    twitterHandle: { type: GraphQLString }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represents a Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(post) {
        return _.find(Authors, a => a.id == post.author_id);
      }
    }
  })
});

// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all Authors',
      resolve() {
        return Authors;
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all Posts',
      resolve() {
        return Posts;
      }
    },
    listings: {
      type: new GraphQLList(ListingType),
      description: 'All business listings',
      resolve() {
        return listingController.getAllListings();
      }
    }
  })
});

// This is the schema declaration
const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});

module.exports = BlogAppSchema;
