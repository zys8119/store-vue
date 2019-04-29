"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var _this = this;

    if (initApi) {
        var _loop = function _loop(keyName) {
            Api3[keyName] = function () {
                var _Api2$keyName;

                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                    params[_key] = arguments[_key];
                }

                (_Api2$keyName = Api2[keyName]).call.apply(_Api2$keyName, [_this].concat(params));
            };
        };

        for (var keyName in Api2) {
            _loop(keyName);
        }
        initApi = false;
    }
    return Api3;
};

var _assign = require("babel-plugin-transform-polyfills/polyfills/Object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = require("../configs.js").default;
var Api = {};
if (configs.api) {
    try {
        Api = require("@/api/index.js").default;
    } catch (e) {
        Api = {};
        console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'api/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
        console.warn("'api/index.js' \u662F\u7528\u4E8E\u8BBE\u7F6E\u9879\u76EE\u5168\u5C40api\u51FD\u6570\u6574\u5408\n\n    \u793A\u4F8B:api/index.js\n    \n        export default {\n            apiName:(){\n                this.action(configs);\n            },\n            //....\n        }\n    ");
    }
}
var Api2 = _extends({}, Api);
var Api3 = {};
var initApi = true;