'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.install = undefined;

var _vuex = require('vuex');

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _index = require('./api/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;

var methods = {
    action: (0, _vuex.mapActions)(['action']).action
};
if (configs.api) {
    methods.api = _index2.default;
};
var plugin = {
    install: function install(Vue) {
        if (configs.$utils) {
            Vue.prototype.$utils = _utils2.default;
        };
        Vue.mixin({
            methods: methods,
            computed: (0, _vuex.mapGetters)(['airforce'])
        });
    }
};
exports.default = plugin;
var install = exports.install = plugin.install;