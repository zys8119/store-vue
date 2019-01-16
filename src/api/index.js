const configs = require("../configs.js").default;
let Api = {};
if(configs.api){
    try {
        Api = require("@/api/index.js").default;
    }catch (e){
        Api = {};
        console.error(`【store-vue】警告警告：请确认 @ 路径下的 'api/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
        console.warn(`'api/index.js' 是用于设置项目全局api函数整合\n
    示例:api/index.js
    
        export default {
            apiName:(){
                this.action(configs);
            },
            //....
        }
    `)
    }
}
let Api2 = Object.assign({

},Api);
let Api3 = {};
let initApi = true;
export default function () {
    if(initApi){
        for(let keyName in Api2){
            Api3[keyName] = (...params)=>{
                Api2[keyName].call(this,...params);
            };
        }
        initApi = false;
    }
    return Api3;
}