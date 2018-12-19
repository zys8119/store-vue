'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  var rootUrl = $$rootUrl;
  if (configs.$$rootUrl && _index2.default.state.airforce && _index2.default.state.airforce.$$rootUrl) {
    rootUrl = _index2.default.state.airforce.$$rootUrl;
  }
  config.url = rootUrl + config.url;
  if (config.fullUrl) {
    config.url = config.fullUrl;
  }
  return (0, _axios2.default)(config);
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _initState = require('./initState');

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;