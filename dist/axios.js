"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("./index"));

var _initState = _interopRequireDefault(require("./initState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;

function _default(config) {
  var rootUrl = "";

  try {
    rootUrl = $$rootUrl;
  } catch (e) {}

  if (typeof configs.$$rootUrl == "string") {
    rootUrl = configs.$$rootUrl;
  }

  ;

  if (configs.$$rootUrl && _index.default.state.airforce && _index.default.state.airforce.$$rootUrl) {
    rootUrl = _index.default.state.airforce.$$rootUrl;
  }

  ;
  config.url = rootUrl + config.url;

  if (config.fullUrl) {
    config.url = config.fullUrl;
  }

  return (0, _axios.default)(config);
}