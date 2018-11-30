import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import airforce from './airforce.js'
import useStore from './useStore'
import filters from './filters/index'
import MockConfig from './Mock/index'
const configs = require("./configs.js").default;
if(configs.filters){
    // 注册过滤器
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    });
}
if(configs.Mock) {
    //ajax请求拦截
    MockConfig.forEach(M=>{
        M((...Arg)=>{
            if(Arg.length > 0 && Arg[0] !== false){
                Mock.mock(...Arg);
            }
        });
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
