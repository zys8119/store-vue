import { mapActions, mapGetters } from 'vuex'
import configs from "./configs"
import utils from './utils'
import api from './api'
class install {
    constructor(Vue){
        if(configs.$utils){
            Vue.prototype.$utils = utils;
        };
        Vue.mixin({
            data(){
                if(configs.api){
                    return {
                        api
                    };
                };
                return {};
            },
            methods:mapActions(['action']),
            computed:mapGetters(['airforce'])
        })
    }
}
export interface useStore {
    plugin:{
        install(Vue):install
    }
}