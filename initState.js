import store from './index'
let initState = {};
try {
    initState = require("@/store/index.js").default;
}catch (e){
    initState = {};
}
export default {
    input:(e, a, moduleName) => {
        if(moduleName){
            store.commit('AIRFORCE_DO', {
                data: {
                    moduleName: moduleName,
                    goods: _.set({}, a, e)
                }
            })
        }else {
            store.commit('AIRFORCE_DO', {
                data: {
                    moduleName: a,
                    goods:e
                }
            })
        }
    },
    ...initState
}
