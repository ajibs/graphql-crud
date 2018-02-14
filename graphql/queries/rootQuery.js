import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import {
  getAllListings,
  getSingleListing,
} from '../../controllers/listingController';

import {
  AuthorType,
  PostType,
  ListingType,
} from '../types/rootTypes';
import Authors from '../data/authors';
import Posts from '../data/posts';


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
        return getAllListings();
      },
    },
    singleListing: {
      type: GraphQLList(ListingType),
      description: 'Get a single listing',
      args: {
        _id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return getSingleListing(args._id); // esLint-disable-line
      },
    },
  }),
});

export default ListingQueryRootType;
