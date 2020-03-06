import { apiOptions } from "./options"

let Api2 = <apiOptions>{};
let Api3 = {};
let initApi = true;
export default function () {
    if(initApi){
        for(let keyName in Api2){
            Api3[keyName] = (...params)=>{
                Api2[keyName].call(this,...params);
            };
        }
        initApi = false;
    }
    return Api3;
}