import axios from './axios'
import initState from './initState'
import Vue from 'vue'
import _ from 'lodash'

const AIRFORCE_DO = 'AIRFORCE_DO'
const AIRFORCE_LEAVE = 'AIRFORCE_LEAVE'

// initial state
const state = initState

// getters
const getters = {
  airforce: state => state
}

// actions
const actions = {
  action ({ commit }, data) {
    if (data.loading) {
      VUX.loading.show({
        text: ''
      })
    }
    const {goods, ...restData} = data
    if (data.method && (data.url || data.fullUrl)) {
      if(data.isFormData){
        const toFormData = data.data;
        var FormDataObj = new FormData();
        for(let k in toFormData){
          FormDataObj.append(k,toFormData[k]);
        }
        restData.data = FormDataObj;
      };
      return axios(restData).then(res => {
        let result
        try {
          result = res.json()
        } catch (e) {}
        if (result) {
          return result
        }
        return res
      }).then(result => {
        VUX.loading.hide();
        data.goods = _.merge({}, data.goods, result.data)
        commit(AIRFORCE_DO, { data })
        if (data.callback) {
          data.callback(result.data)
        }
        if (result.status >= 200 && result.status < 300 && result.data.status !== 'ERROR') {
          return new Promise((resolve, reject) =>{
            resolve(result.data)
          })
        } else {
          return new Promise((resolve, reject) => {
            reject(result)
          })
        }
      }).then(res => {
        if (data.success) {
          data.success(res)
        };
        //登录超时请重新登录
        if(res.code === 10010){
            commit(AIRFORCE_LEAVE, { data:{moduleName:'login_post'}});
            delete localStorage.login_post;
            VUX.toast.text(res.message);
            VUX._this.$router.push("/Loogin");
        };
        return res
      }).catch(e => {
        VUX.loading.hide();
        if (data.error) {
          data.error(e)
          return e
        }
        if (!data.noError && e.data && e.data.message) {
          VUX.toast.text(e.data.message)
        }
        return e
      })
    } else {
      commit(AIRFORCE_DO, { data })
    }
  },
  unload ({ commit }, data) {
    commit(AIRFORCE_LEAVE, { data })
  }
}

// mutations
const mutations = {
  [AIRFORCE_DO] (state, { data }) {
    if (_.isObject(data.goods) && !_.isArray(data.goods)) {
      Vue.set(state, data.moduleName, _.merge({}, state[data.moduleName], data.goods))
    } else {
      Vue.set(state, data.moduleName, data.goods)
    }
    // console.group()
    // console.log('action', data)
    // console.log('airforce', state)
    // console.groupEnd()
  },
  [AIRFORCE_LEAVE] (state, { data }) {
    state[data.moduleName] = undefined
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
