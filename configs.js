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
export default Object.assign({
    //是否加载过滤器模块，默认true，开启
    //说明：全局注册过滤器
    filters:true,
    //是否映射组件vuex数据及工具，默认true，开启
    //说明：该参数用于给每一个组件添加action方法和airfoece计算属性
    useStore:true,
    //是否设置初始化vuex数据配置，默认true，开启
    //说明：设置初始化的vuex数据
    initState:true,
},configs)