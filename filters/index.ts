import configs from "../configs"
let filters = {};
if(configs.filters){
    try {
        filters = require("@/filters/index.js").default;
    }catch (e){
        filters = {};
        console.error(`【store-vue】警告警告：请确认 @ 路径下的 'filters/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
        console.warn(`'filters/index.js' 是用于设置vue全局过滤器\n
    示例:filters/index.js
    
        export default {
            a:(val){
                return val + 1;
            },
            //....
        }
    `)
    }
}

export default {
    ...filters
}