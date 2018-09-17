'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _airforce = require('./airforce.js');

var _airforce2 = _interopRequireDefault(_airforce);

var _useStore = require('./useStore');

var _useStore2 = _interopRequireDefault(_useStore);

var _index = require('./filters/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;
if (configs.filters) {
    // 注册过滤器
    Object.keys(_index2.default).forEach(function (key) {
        _vue2.default.filter(key, _index2.default[key]);
    });
}
if (configs.useStore) {
    //注册状态跟工具
    _vue2.default.use(_useStore2.default);
}

_vue2.default.use(_vuex2.default);

var debug = process.env.NODE_ENV !== 'production';

exports.default = new _vuex2.default.Store({
    modules: {
        airforce: _airforce2.default
    },
    strict: debug
});