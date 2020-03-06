"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuex_1 = require("vuex");
var configs_1 = require("./configs");
var utils_1 = require("./utils");
var api_1 = require("./api");
var install = /** @class */ (function () {
    function install(Vue) {
        if (configs_1.default.$utils) {
            Vue.prototype.$utils = utils_1.default;
        }
        ;
        Vue.mixin({
            data: function () {
                if (configs_1.default.api) {
                    return {
                        api: api_1.default
                    };
                }
                ;
                return {};
            },
            methods: vuex_1.mapActions(['action']),
            computed: vuex_1.mapGetters(['airforce'])
        });
    }
    return install;
}());
