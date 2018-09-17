import Vue from 'vue'
import Vuex from 'vuex'
import airforce from './airforce.js'
import useStore from './useStore'
import filters from './filters/index'
const configs = require("./configs.js").default;
if(configs.filters){
    // 注册过滤器
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    });
}
if(configs.useStore) {
    //注册状态跟工具
    Vue.use(useStore);
}

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    airforce
  },
  strict: debug
})
