'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Business = require('../models/Business');

var _Business2 = _interopRequireDefault(_Business);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create demo data
const seedDB = async () => {
  const baseData = {
    address: 'lagos, nigeria',
    website: 'https://domain.com',
    email: 'hello@domain.com',
    phone: '+23412345678'
  };
  const companies = [{ name: 'konga', description: 'buy anything online' }, { name: 'devcenter', description: 'hire great developers' }, { name: 'paystack', description: 'simple payments' }, { name: 'andela', description: 'training world class developers' }, { name: 'jumia', description: 'best online shopping' }, { name: 'flutterwave', description: 'powerful payments apis' }, { name: 'hotels.ng', description: 'book hotels in nigeria' }, { name: 'booking.com', description: 'largest hotel booking website' }];

  const demo = await companies.map(company => Object.assign({}, baseData, company));

  await _Business2.default.remove({}, () => {
    demo.forEach(element => {
      new _Business2.default(element).save();
    });
  });

  return demo;
};

exports.default = seedDB;
//# sourceMappingURL=utilityController.js.map