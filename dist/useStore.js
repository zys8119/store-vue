"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = void 0;

var _vuex = require("vuex");

var _utils = _interopRequireDefault(require("./utils/utils"));

var _index = _interopRequireDefault(require("./api/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("./configs.js").default;

var plugin = {
  install: function install(Vue) {
    if (configs.$utils) {
      Vue.prototype.$utils = _utils.default;
    }

    ;
    Vue.mixin({
      data: function data() {
        if (configs.api) {
          return {
            api: _index.default
          };
        }

        ;
        return {};
      },
      methods: (0, _vuex.mapActions)(['action']),
      computed: (0, _vuex.mapGetters)(['airforce'])
    });
  }
};
var _default = plugin;
exports.default = _default;
var install = plugin.install;
exports.install = install;