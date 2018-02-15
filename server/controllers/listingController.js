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
    return 'listing does not exist';
  }
  return listing;
};

const addNewListing = async (args) => {
  const listing = await (new Business(args)).save();
  return listing;
};

const updateListing = async (args) => {
  const listing = await Business.findOneAndUpdate(
    { _id: args._id }, // eslint-disable-line no-underscore-dangle
    args,
    {
      new: true,
      runValidators: true,
    },
  );

  return listing;
};

const deleteListing = async (args) => {
  await Business.deleteOne({ _id: args._id }); // eslint-disable-line no-underscore-dangle
};

export {
  getAllListings,
  getSingleListing,
  addNewListing,
  updateListing,
  deleteListing,
};
