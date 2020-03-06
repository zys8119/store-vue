"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var configs_1 = require("../configs");
var filters = {};
if (configs_1.default.filters) {
    try {
        filters = require("@/filters/index.js").default;
    }
    catch (e) {
        filters = {};
        console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'filters/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
        console.warn("'filters/index.js' \u662F\u7528\u4E8E\u8BBE\u7F6Evue\u5168\u5C40\u8FC7\u6EE4\u5668\n\n    \u793A\u4F8B:filters/index.js\n    \n        export default {\n            a:(val){\n                return val + 1;\n            },\n            //....\n        }\n    ");
    }
}
exports.default = __assign({}, filters);
