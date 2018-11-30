'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _mockjs = require('mockjs');

var _mockjs2 = _interopRequireDefault(_mockjs);

var _airforce = require('./airforce.js');

var _airforce2 = _interopRequireDefault(_airforce);

var _useStore = require('./useStore');

var _useStore2 = _interopRequireDefault(_useStore);

var _index = require('./filters/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./Mock/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var configs = require("./configs.js").default;
if (configs.filters) {
    // 注册过滤器
    Object.keys(_index2.default).forEach(function (key) {
        _vue2.default.filter(key, _index2.default[key]);
    });
}
if (configs.Mock) {
    //ajax请求拦截
    _index4.default.forEach(function (M) {
        M(function () {
            for (var _len = arguments.length, Arg = Array(_len), _key = 0; _key < _len; _key++) {
                Arg[_key] = arguments[_key];
            }

            if (Arg.length > 0) {
                if (Arg[0] === false) {
                    var mockData = Arg.slice(1);
                    _mockjs2.default.mock.apply(_mockjs2.default, _toConsumableArray(mockData));
                } else {
                    _mockjs2.default.mock.apply(_mockjs2.default, Arg);
                }
            }
        });
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