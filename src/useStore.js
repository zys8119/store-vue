import { mapActions, mapGetters } from 'vuex'
import utils from './utils/utils'
const plugin = {
    install (Vue) {
        try {
            utils.action = mapActions(['action']).action
            utils.airforce = mapGetters(['airforce']).airforce
        }catch (e){}
        Vue.prototype.$utils = utils;
        Vue.mixin({
            methods:mapActions(['action']),
            computed:mapGetters(['airforce'])
        })
    }
}
export default plugin
export const install = plugin.install
