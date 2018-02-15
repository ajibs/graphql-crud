'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const businessSchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name'
  },
  address: {
    type: String,
    required: 'You must supply an address!'
  },
  description: {
    type: String,
    required: 'You must supply a description!'
  },
  website: {
    type: String,
    required: 'You must supply a website!'
  },
  email: {
    type: String,
    trim: true,
    required: 'You must supply an email!'
  },
  phone: {
    type: String,
    required: 'You must supply a phone number!'
  },
  categories: [String],
  created: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  }
});

// define our indexes
businessSchema.index({
  name: 'text',
  description: 'text'
});

exports.default = _mongoose2.default.model('Business', businessSchema);
//# sourceMappingURL=Business.js.map