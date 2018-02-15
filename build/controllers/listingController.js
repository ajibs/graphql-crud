'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListing = exports.updateListing = exports.addNewListing = exports.getSingleListing = exports.getAllListings = undefined;

var _Business = require('../models/Business');

var _Business2 = _interopRequireDefault(_Business);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllListings = async () => {
  const listings = await _Business2.default.find({}).sort({ created: 'desc' }).limit(6);

  return listings;
};

const getSingleListing = async _id => {
  const listing = await _Business2.default.find({ _id });
  if (!listing) {
    return 'listing does not exist';
  }
  return listing;
};

const addNewListing = async args => {
  const listing = await new _Business2.default(args).save();
  return listing;
};

const updateListing = async args => {
  const listing = await _Business2.default.findOneAndUpdate({ _id: args._id }, // eslint-disable-line no-underscore-dangle
  args, {
    new: true,
    runValidators: true
  });

  return listing;
};

const deleteListing = async args => {
  await _Business2.default.deleteOne({ _id: args._id }); // eslint-disable-line no-underscore-dangle
};

exports.getAllListings = getAllListings;
exports.getSingleListing = getSingleListing;
exports.addNewListing = addNewListing;
exports.updateListing = updateListing;
exports.deleteListing = deleteListing;
//# sourceMappingURL=listingController.js.map