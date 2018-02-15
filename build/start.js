'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_mongoose2.default.connect(process.env.DATABASE);
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connection.on('error', err => {
  console.error(`Error!: ${err.message}`);
});

_app2.default.listen(process.env.PORT, () => {
  console.log(`Magic is happening on ${process.env.PORT}`);
});
//# sourceMappingURL=start.js.map