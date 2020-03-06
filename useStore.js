"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuex_1 = require("vuex");
var configs = require("./configs.js").default;
var index_1 = require("./utils/index");
var index_2 = require("./api/index");
var plugin = {
    install: function (Vue) {
        if (configs.$utils) {
            Vue.prototype.$utils = index_1.default;
        }
        Vue.mixin({
            data: function () {
                if (configs.api) {
                    return {
                        api: index_2.default
                    };
                }
                return {};
            },
            methods: vuex_1.mapActions(['action']),
            computed: vuex_1.mapGetters(['airforce'])
        });
    }
};
exports.default = plugin;
exports.install = plugin.install;
