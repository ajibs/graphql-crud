/* const Business = require('../models/Business');

exports.getAllListings = async (req, res) => {
  const listings = await Business.find({})
    .sort({ created: 'desc' })
    .limit(6);
  return listings;
  // res.json({
    // status: 200,
    // listings
  // });
};
*/

// End of REST

// beginning of GraphQL
const Business = require('../models/Business');

exports.getAllListings = async () => {
  const listings = await Business.find({})
    .sort({ created: 'desc' })
    .limit(6);

  return listings;
};

exports.getSingleListing = async (_id) => {
  const listing = await Business.find({ _id });
  if (!listing) {
    return null;
  }
  return listing;
};

exports.addNewListing = async (args) => {
  const listing = await (new Business(args)).save();
  return listing;
};

