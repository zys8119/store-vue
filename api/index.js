"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var configs_1 = require("../configs");
var Api = {};
if (configs_1.default.api) {
    try {
        Api = require("@/api/index.js").default;
    }
    catch (e) {
        Api = {};
        console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'api/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
        console.warn("'api/index.js' \u662F\u7528\u4E8E\u8BBE\u7F6E\u9879\u76EE\u5168\u5C40api\u51FD\u6570\u6574\u5408\n\n    \u793A\u4F8B:api/index.js\n    \n        export default {\n            apiName:(){\n                this.action(configs);\n            },\n            //....\n        }\n    ");
    }
}
var Api2 = Object.assign({}, Api);
var Api3 = {};
var initApi = true;
function default_1() {
    var _this = this;
    if (initApi) {
        var _loop_1 = function (keyName) {
            Api3[keyName] = function () {
                var _a;
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return (_a = Api2[keyName]).call.apply(_a, __spreadArrays([_this], params));
            };
        };
        for (var keyName in Api2) {
            _loop_1(keyName);
        }
        initApi = false;
    }
    return Api3;
}
exports.default = default_1;
