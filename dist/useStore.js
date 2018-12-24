'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.install = undefined;

var _vuex = require('vuex');

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = {
    install: function install(Vue) {
        Vue.prototype.$utils = _utils2.default;
        Vue.mixin({
            methods: (0, _vuex.mapActions)(['action']),
            computed: (0, _vuex.mapGetters)(['airforce'])
        });
    }
};
exports.default = plugin;
var install = exports.install = plugin.install;