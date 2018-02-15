'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _listingController = require('../../controllers/listingController');

var _rootTypes = require('../types/rootTypes');

var _utilityController = require('../../controllers/utilityController');

var _utilityController2 = _interopRequireDefault(_utilityController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListingMutationRootType = new _graphql.GraphQLObjectType({
  name: 'ListingMutation',
  description: 'Change or create listing',
  fields: () => ({
    addListing: {
      type: _rootTypes.ListingType,
      description: 'add a new listing',
      args: {
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        address: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        website: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        email: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        phone: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
      },
      resolve(parentValue, args) {
        return (0, _listingController.addNewListing)(args);
      }
    },
    updateListing: {
      type: _rootTypes.ListingType,
      description: 'update an existing listing',
      args: {
        _id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
      },
      resolve(parentValue, args) {
        return (0, _listingController.updateListing)(args);
      }
    },
    deleteListing: {
      type: _rootTypes.ListingType,
      description: 'delete a listing',
      args: {
        _id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
      },
      resolve(parentValue, args) {
        return (0, _listingController.deleteListing)(args);
      }
    },
    seedDatabase: {
      type: (0, _graphql.GraphQLList)(_rootTypes.ListingType),
      description: 'seed the database with initial values',
      resolve() {
        return (0, _utilityController2.default)();
      }
    }
  })
});

exports.default = ListingMutationRootType;
//# sourceMappingURL=rootMutations.js.map