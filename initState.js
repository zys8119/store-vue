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
var index_1 = require("./index");
var configs = require("./configs.js").default;
var _ = require("lodash");
var initState = {};
if (configs.initState) {
    try {
        initState = require("@/store/index.js").default;
    }
    catch (e) {
        initState = {};
        console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'store/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
        console.warn("'store/index.js' \u662F\u7528\u4E8E\u8BBE\u7F6Evuex\u521D\u59CB\u6570\u636E\u7528\u7684\n\n    \u793A\u4F8B:store/index.js\n    \n        export default {\n            a:1,\n            //....\n        }\n    ");
    }
}
exports.default = __assign({ 
    /**
     * @input 用于兼容input组件数据双向绑定问题，
     * @param event 写入的值
     * @param fieldName 字段名
     * @param moduleName 模块名，可选
     * 说明：如果moduleName不存在，则fieldName就是模块名
     * */
    input: function (event, fieldName, moduleName) {
        if (moduleName) {
            index_1.default.commit('AIRFORCE_DO', {
                data: {
                    moduleName: moduleName,
                    goods: _.set({}, fieldName, event)
                }
            });
        }
        else {
            index_1.default.commit('AIRFORCE_DO', {
                data: {
                    moduleName: fieldName,
                    goods: event
                }
            });
        }
    }, 
    /**
     * @input 用于兼容input组件数据双向绑定问题，
     * @param event 写入的值
     * @param fieldName 字段名
     * @param moduleName 模块名，可选
     * 说明：如果moduleName不存在，则fieldName就是模块名
     * */
    $$setRootUrl: function (to) {
        index_1.default.commit('AIRFORCE_DO', {
            data: {
                moduleName: "$$rootUrl",
                goods: to.meta.$$rootUrl,
            }
        });
    } }, initState);
