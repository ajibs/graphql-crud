'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _listingController = require('../../controllers/listingController');

var _rootTypes = require('../types/rootTypes');

var _authors = require('../data/authors');

var _authors2 = _interopRequireDefault(_authors);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListingQueryRootType = new _graphql.GraphQLObjectType({
  name: 'ListingQuery',
  description: 'Listing Application Schema Query Root',
  fields: () => ({
    authors: {
      type: (0, _graphql.GraphQLList)(_rootTypes.AuthorType),
      description: 'List of all Authors',
      resolve() {
        return _authors2.default;
      }
    },
    posts: {
      type: (0, _graphql.GraphQLList)(_rootTypes.PostType),
      description: 'List of all Posts',
      resolve() {
        return _posts2.default;
      }
    },
    recentListings: {
      type: (0, _graphql.GraphQLList)(_rootTypes.ListingType),
      description: 'Get recent business listings',
      resolve() {
        return (0, _listingController.getAllListings)();
      }
    },
    singleListing: {
      type: (0, _graphql.GraphQLList)(_rootTypes.ListingType),
      description: 'Get a single listing',
      args: {
        _id: { type: _graphql.GraphQLString }
      },
      resolve(parentValue, args) {
        return (0, _listingController.getSingleListing)(args._id); // esLint-disable-line
      }
    }
  })
});

exports.default = ListingQueryRootType;
//# sourceMappingURL=rootQuery.js.map