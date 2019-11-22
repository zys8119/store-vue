const configs = require("./configs.js").default;
let VuexStore = {};
if(configs.VuexStore){
	try {
		VuexStore = require("@/store/VuexStore.js").default;
	}catch (e){
		VuexStore = {};
		console.error(`【store-vue】警告警告：请确认 @ 路径下的 'store/VuexStore.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
		console.warn(`'store/VuexStore.js' 是用于原生vuex配置\n
    示例:store/VuexStore.js
    
        export default {
            //....
        }
    `)
	}
}

export default Object.assign({

},VuexStore)
