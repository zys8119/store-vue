"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require("babel-plugin-transform-polyfills/polyfills/Object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = {};
try {
    configs = require("@/store/configs.js").default;
} catch (e) {
    configs = {};
    console.error("\u3010store-vue\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'store/configs.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
    console.warn("'store/configs.js' \u662F\u7528\u4E8E\u8BBE\u7F6Estore-vue\u7684\u914D\u7F6E\u9879\n\n    \u793A\u4F8B:store/configs.js\n    \n        export default {\n            filters:false\n            //....\n        }\n    ");
}
exports.default = (0, _assign2.default)({
    //debug开发环境，默认production，开发模式，如需设置，请设置环境变量 process.env.NODE_ENV
    debug: "production",
    //是否加载过滤器模块，默认true，开启
    //说明：全局注册过滤器
    filters: true,
    //是否映射组件vuex数据及工具，默认true，开启
    //说明：该参数用于给每一个组件添加action方法和airfoece计算属性
    useStore: true,
    //是否加载MockJs，默认true，开启
    //说明：ajax请求拦截
    Mock: true,
    //是否自定义接口地址
    //说明：方便切换接口地址，默认false不开启
    $$rootUrl: false,
    //是否设置初始化vuex数据配置，默认true，开启
    //说明：设置初始化的vuex数据
    initState: true,
    //是否设置启用api功能，默认true，启用
    api: true,
    //是否设置启用全局工具功能，默认true，启用
    //说明：全局工具库
    $utils: true,
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