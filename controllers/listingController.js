import Business from '../models/Business';

const getAllListings = async () => {
  const listings = await Business.find({})
    .sort({ created: 'desc' })
    .limit(6);

  return listings;
};

const getSingleListing = async (_id) => {
  const listing = await Business.find({ _id });
  if (!listing) {
    return null;
  }
  return listing;
};

const addNewListing = async (args) => {
  const listing = await (new Business(args)).save();
  return listing;
};

export { getAllListings, getSingleListing, addNewListing };
