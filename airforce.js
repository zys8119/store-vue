import Vue from 'vue'
import _ from 'lodash'
import store from '../commonState'
export default {
  state:{
    input:(event, fieldName, moduleName) => {
      if(moduleName){
        store.commit('action', {
          moduleName: moduleName,
          goods: _.set({}, fieldName, event)
        })
      }else {
        store.commit('action', {
          moduleName: fieldName,
          goods:event
        })
      }
    },
    CreateTheme:{
    }
  },
  mutations: {
    action(state,data) {
      if (_.isObject(data.goods) && !_.isArray(data.goods)) {
        Vue.set(state, data.moduleName, _.merge({}, state[data.moduleName], data.goods))
      } else {
        Vue.set(state, data.moduleName, data.goods)
      }
    },
  },
  getters:{
    airforce: state=>state
  },
  actions:{
    action ({ commit }, data) {
      commit("action", data)
    }
  }
}
