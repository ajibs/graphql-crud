const Business = require('../models/Business');

exports.getAllListings = async (req, res) => {
  const listings = await Business.find({})
    .sort({ created: 'desc' })
    .limit(6);

  res.json({
    status: 200,
    listings
  });
};
