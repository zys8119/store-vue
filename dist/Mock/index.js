"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var configs = require("../configs.js").default;

var Mock = [];

if (configs.Mock) {
  try {
    Mock = require("@/Mock/index.js").default;
  } catch (e) {
    Mock = [];
    console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'Mock/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
    console.warn("'Mock/index.js' \u662F\u7528\u4E8E\u62E6\u622Aajax\u8BF7\u6C42\n\n    \u793A\u4F8B:Mock/index.js\n    \n        export default [\n            e=>e(..Arg),\n            //....\n        ]\n    ");
  }
}

var _default = Mock;
exports.default = _default;