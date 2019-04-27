import { StoreOptions, ModuleTree } from "vuex"
import { state, getters, actions, mutations } from "./options"
export interface storeVue<S> extends StoreOptions<S>{
    modules?: ModuleTree<S>;
    strict?: boolean;
}
export interface airforce {
    state:state;
    getters:getters,
    actions:actions,
    mutations:mutations
}