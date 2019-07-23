"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _mockjs = _interopRequireDefault(require("mockjs"));

var _airforce = _interopRequireDefault(require("./airforce.js"));

var _useStore = _interopRequireDefault(require("./useStore"));

var _index = _interopRequireDefault(require("./filters/index"));

var _index2 = _interopRequireDefault(require("./Mock/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;

if (configs.filters) {
  // 注册过滤器
  Object.keys(_index.default).forEach(function (key) {
    _vue.default.filter(key, _index.default[key]);
  });
}

if (configs.Mock) {
  //ajax请求拦截
  _index2.default.forEach(function (M) {
    M(function () {
      if (arguments.length > 0 && (arguments.length <= 0 ? undefined : arguments[0]) !== false) {
        _mockjs.default.mock.apply(_mockjs.default, arguments);
      }
    });
  });
}

if (configs.useStore) {
  //注册状态跟工具
  _vue.default.use(_useStore.default);
}

_vue.default.use(_vuex.default);

var debug = process.env.NODE_ENV !== 'production';

var _default = new _vuex.default.Store({
  modules: {
    airforce: _airforce.default
  },
  strict: debug
});

exports.default = _default;