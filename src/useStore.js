import { mapActions, mapGetters } from 'vuex'
const configs = require("./configs.js").default;
import utils from './utils/utils'
import $api from './api/index'
const plugin = {
    install (Vue) {
        if(configs.$utils){
            Vue.prototype.$utils = utils;
        };
        Vue.mixin({
            data(){
                if(configs.$api){
                    return {
                        $api
                    };
                };
                return {};
            },
            methods:mapActions(['action']),
            computed:mapGetters(['airforce'])
        })
    }
}
export default plugin
export const install = plugin.install
