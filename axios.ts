import axios from 'axios'
import store from './index'
const configs = require("./configs.js").default;
declare const $$rootUrl:string;
export default function (config) {
    let rootUrl = "";
    try {
        rootUrl = $$rootUrl;
    }catch (e){/**/}
    if(typeof configs.$$rootUrl == "string"){
        rootUrl = configs.$$rootUrl;
    }
    if(configs.$$rootUrl && (<any>store).state.airforce && (<any>store).state.airforce.$$rootUrl){
        rootUrl = (<any>store).state.airforce.$$rootUrl;
    }
    config.url = rootUrl + config.url;
    if (config.fullUrl) {
        config.url = config.fullUrl;
    }
    return axios(config)
}