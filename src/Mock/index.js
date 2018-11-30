const configs = require("../configs.js").default;
let Mock = [];
if(configs.Mock){
    try {
        Mock = require("@/Mock/index.js").default;
    }catch (e){
        Mock = [];
        console.error(`【store-vue】警告警告：请确认 @ 路径下的 'Mock/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
        console.warn(`'Mock/index.js' 是用于拦截ajax请求\n
    示例:Mock/index.js
    
        export default [
            e=>e(..Arg),
            //....
        ]
    `)
    }
}

export default Mock;