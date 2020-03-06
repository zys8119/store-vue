import Vue from "vue";
import Vuex from "vuex";
import VuexStore from './VuexStore'
import airforce from './airforce'
const _ = require("lodash");
import useStore from './useStore'
import filters from './filters/index'
import configs from './configs'
import Mock from 'mockjs'
import MockConfig from './Mock/index'

// 注册过滤器
if(configs.filters){Object.keys(filters).forEach(key => {Vue.filter(key, filters[key])});}

//ajax请求拦截
if(configs.Mock) {
    MockConfig.forEach(M=>{
        M((...Arg)=>{
            if(Arg.length > 0 && Arg[0] !== false){
                Mock.mock(...Arg);
            }
        });
    });
}

//注册状态跟工具
if(configs.useStore) {Vue.use(useStore);}

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store(_.merge({modules: {airforce},strict: debug},VuexStore))