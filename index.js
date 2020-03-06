"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./declare");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var VuexStore_1 = require("./VuexStore");
var airforce_1 = require("./airforce");
var _ = require("lodash");
var useStore_1 = require("./useStore");
var index_1 = require("./filters/index");
var configs_1 = require("./configs");
var mockjs_1 = require("mockjs");
var index_2 = require("./Mock/index");
// 注册过滤器
if (configs_1.default.filters) {
    Object.keys(index_1.default).forEach(function (key) { vue_1.default.filter(key, index_1.default[key]); });
}
//ajax请求拦截
if (configs_1.default.Mock) {
    index_2.default.forEach(function (M) {
        M(function () {
            var Arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                Arg[_i] = arguments[_i];
            }
            if (Arg.length > 0 && Arg[0] !== false) {
                mockjs_1.default.mock.apply(mockjs_1.default, Arg);
            }
        });
    });
}
//注册状态跟工具
if (configs_1.default.useStore) {
    vue_1.default.use(useStore_1.default);
}
vue_1.default.use(vuex_1.default);
var debug = process.env.NODE_ENV !== 'production';
exports.default = new vuex_1.default.Store(_.merge({ modules: { airforce: airforce_1.default }, strict: debug }, VuexStore_1.default));
