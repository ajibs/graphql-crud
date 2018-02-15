'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListingType = exports.PostType = exports.AuthorType = undefined;

var _graphql = require('graphql');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _authors = require('../data/authors');

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AuthorType = new _graphql.GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    twitterHandle: { type: _graphql.GraphQLString }
  })
});

const PostType = new _graphql.GraphQLObjectType({
  name: 'Post',
  description: 'This represents a Post',
  fields: () => ({
    id: { type: _graphql.GraphQLString },
    title: { type: _graphql.GraphQLString },
    body: { type: _graphql.GraphQLString },
    author: {
      type: AuthorType,
      resolve(post) {
        return _lodash2.default.find(_authors2.default, a => a.id === post.author_id);
      }
    }
  })
});

const ListingType = new _graphql.GraphQLObjectType({
  name: 'Listing',
  description: 'This represents a listing',
  fields: () => ({
    _id: { type: _graphql.GraphQLString },
    name: { type: _graphql.GraphQLString },
    address: { type: _graphql.GraphQLString },
    description: { type: _graphql.GraphQLString },
    website: { type: _graphql.GraphQLString },
    email: { type: _graphql.GraphQLString },
    phone: { type: _graphql.GraphQLString }
  })
});

exports.AuthorType = AuthorType;
exports.PostType = PostType;
exports.ListingType = ListingType;
//# sourceMappingURL=rootTypes.js.map