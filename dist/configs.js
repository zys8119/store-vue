"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var configs = {};
try {
    configs = require("@/store/configs.js").default;
} catch (e) {
    configs = {};
    console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'store/configs.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
    console.warn("'store/configs.js' \u662F\u7528\u4E8E\u8BBE\u7F6Estore-vue\u7684\u914D\u7F6E\u9879\n\n    \u793A\u4F8B:store/configs.js\n    \n        export default {\n            filters:false\n            //....\n        }\n    ");
}
exports.default = _extends({
    //是否加载过滤器模块，默认true，开启
    //说明：全局注册过滤器
    filters: true,
    //是否映射组件vuex数据及工具，默认true，开启
    //说明：该参数用于给每一个组件添加action方法和airfoece计算属性
    useStore: true,
    //是否设置初始化vuex数据配置，默认true，开启
    //说明：设置初始化的vuex数据
    initState: true,
    //发请求前
    //data请求参数
    axiosBefore: function axiosBefore(data) {},
    //发请求成功
    //res回调数据
    //data请求参数
    //commit方法
    axiosThen: function axiosThen(res, data, commit) {},
    //发请求失败
    //err回调数据
    //data请求参数
    //commit方法
    axiosCatch: function axiosCatch(err, data, commit) {}
}, configs);