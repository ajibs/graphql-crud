'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _rootQuery = require('./queries/rootQuery');

var _rootQuery2 = _interopRequireDefault(_rootQuery);

var _rootMutations = require('./mutations/rootMutations');

var _rootMutations2 = _interopRequireDefault(_rootMutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: _rootQuery2.default,
  mutation: _rootMutations2.default
});
//# sourceMappingURL=schema.js.map