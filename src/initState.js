import store from './index'
const configs = require("./configs.js").default;
let initState = {};
if(configs.initState){
    try {
        initState = require("@/store/index.js").default;
    }catch (e){
        initState = {};
        console.error(`【store-vue】警告警告：请确认 @ 路径下的 'store/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
        console.warn(`'store/index.js' 是用于设置vuex初始数据用的\n
    示例:store/index.js
    
        export default {
            a:1,
            //....
        }
    `)
    }
}
export default Object.assign({
    /**
     * @input 用于兼容input组件数据双向绑定问题，
     * @param event 写入的值
     * @param fieldName 字段名
     * @param moduleName 模块名，可选
     * 说明：如果moduleName不存在，则fieldName就是模块名
     * */
    input:(event, fieldName, moduleName) => {
        if(moduleName){
            store.commit('AIRFORCE_DO', {
                data: {
                    moduleName: moduleName,
                    goods: _.set({}, fieldName, event)
                }
            })
        }else {
            store.commit('AIRFORCE_DO', {
                data: {
                    moduleName: fieldName,
                    goods:event
                }
            })
        }
    },
	/**
     * @input 用于兼容input组件数据双向绑定问题，
     * @param event 写入的值
     * @param fieldName 字段名
     * @param moduleName 模块名，可选
     * 说明：如果moduleName不存在，则fieldName就是模块名
     * */
	$$setRootUrl:(to)=>{
		store.commit('AIRFORCE_DO', {
			data: {
				moduleName: "$$rootUrl",
				goods: to.meta.$$rootUrl,
			}
		});
	}
},initState);
