import {configsOptions} from "./types";

let configs = {};
try {
    configs = require("@/store/configs.js").default;
}catch (e){
    configs = {};
    console.error(`【store-vue】警告警告：请确认 @ 路径下的 'store/configs.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
    console.warn(`'store/configs.js' 是用于设置store-vue的配置项\n
    示例:store/configs.js
    
        export default {
            filters:false
            //....
        }
    `)
}
export default <configsOptions>{
    //debug开发环境，默认production，开发模式，如需设置，请设置环境变量 process.env.NODE_ENV
    debug:"production",
    //是否加载过滤器模块，默认true，开启
    //说明：全局注册过滤器
    filters:true,
    //是否映射组件vuex数据及工具，默认true，开启
    //说明：该参数用于给每一个组件添加action方法和airfoece计算属性
    useStore:true,
    //是否加载MockJs，默认true，开启
    //说明：ajax请求拦截
    Mock:true,
    //是否自定义接口地址
    //说明：方便切换接口地址，默认false不开启
    $$rootUrl:false,
    //是否设置初始化vuex数据配置，默认true，开启
    //说明：设置初始化的vuex数据
    initState:true,
    //是否设置启用api功能，默认true，启用
    api:true,
    //是否设置启用原生VuexStore功能，默认true，启用
    VuexStore:true,
    //是否设置启用全局工具功能，默认true，启用
    //说明：全局工具库
    $utils:true,
    //发请求前
    //data请求参数
    axiosBefore:()=>{},
    //发请求成功
    //res回调数据
    //data请求参数
    //commit方法
    axiosThenBefore:()=>{},
    //发请求成功
    //res回调数据
    //data请求参数
    //commit方法
    axiosThen:()=>{},
    //发请求失败
    //err回调数据
    //data请求参数
    //commit方法
    axiosCatch:()=>{},
    ...configs,
}