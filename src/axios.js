import axios from 'axios'
import store from './index'
import initState from './initState'
const configs = require("./configs.js").default;

export default function (config) {
  let rootUrl = $$rootUrl
  if(configs.$$rootUrl && store.state.airforce && store.state.airforce.$$rootUrl){
      rootUrl = store.state.airforce.$$rootUrl;
  }
  config.url = rootUrl + config.url
  if (config.fullUrl) {
    config.url = config.fullUrl
  }
  return axios(config)
}
