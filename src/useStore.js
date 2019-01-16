import { mapActions, mapGetters } from 'vuex'
const configs = require("./configs.js").default;
import utils from './utils/utils'
import Api from './api/index'
const methods = {
    action:mapActions(['action']).action
};
if(configs.api){
    methods.api = Api;
};
const plugin = {
    install (Vue) {
        if(configs.$utils){
            Vue.prototype.$utils = utils;
        };
        Vue.mixin({
            methods,
            computed:mapGetters(['airforce'])
        })
    }
}
export default plugin
export const install = plugin.install
