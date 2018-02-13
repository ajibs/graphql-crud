const express = require('express');
const listingController = require('../controllers/listingController');
// const utilityController = require('../controllers/utilityController');

const router = express.Router();

router.get('/', (req, res) => res.send('hello world'));

router.get('/listings', listingController.getAllListings);

// TODO: comment out route
// router.get('/seed', utilityController.seedDB);

// client sends graphql query with link data and
// server responsds with json data of link created

module.exports = router;
