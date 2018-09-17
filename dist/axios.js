'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  var rootUrl = $$rootUrl;
  config.url = rootUrl + config.url;
  if (config.fullUrl) {
    config.url = config.fullUrl;
  }
  return (0, _axios2.default)(config);
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }