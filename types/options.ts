import { Route } from 'vue-router'
import { Commit } from 'vuex'
import { stateType } from './types'
import { AxiosRequestConfig } from 'axios'
import Vue from 'Vue'

//todo state
export interface state {
    /**
     * @用于兼容input组件数据双向绑定问题，
     * @param event 写入的值
     * @param fieldName 字段名
     * @param moduleName 模块名，可选
     * * 说明：如果moduleName不存在，则fieldName就是模块名
     */
    input(event:any, fieldName:string, moduleName?:string):void;

    /**
     * @设置全局api方法
     * @param to
     */
    $$setRootUrl(to:Route):void;

    [key:string]:any;
}

export interface airforceState {
    state:stateType
}

//todo getters
export interface getters {
    airforce(state:airforceState):airforceState
}

//todo actions
export interface actionData extends AxiosRequestConfig{
    moduleName?:string;
    goods?:any;
    isFormData?:boolean;
    axiosBefore?(data:actionData):void;
    resthen?(result:Response):void;
    callback?(resultData:Response):void;
    success?(resultData:Response):void;
    axiosThenBefore?(resultData:Response,data:actionData,commit:actionsOptions):void;
    axiosThen?(resultData:Response,data:actionData,commit:actionsOptions):void;
    axiosCatch?(resultData:Response,data:actionData,commit:actionsOptions):void;
    error?(resultData:Response):void;
}

export interface actionsOptions {
    commit:Commit
}

export interface actions {
    //添加
    action(action:actionsOptions,data?:actionData):any;

    //卸载
    unload(action:actionsOptions,data?:actionData):any;
}

//todo mutations
export interface mutationsData {
    data:actionData;
}
export interface mutations {
    //添加处理
    AIRFORCE_DO(state:state,data:mutationsData):void;

    //卸载处理
    AIRFORCE_LEAVE(state:state,data:mutationsData):void;
}

//todo configsOptions
export interface configsOptions {
    debug?:string;
    filters?:boolean;
    useStore?:boolean;
    Mock?:boolean;
    $$rootUrl?:boolean;
    initState?:boolean;
    api?:boolean;
    VuexStore?:boolean;
    $utils?:boolean;
    axiosBefore(data:actionData):void;
    axiosThenBefore(res:Request,data:actionData,commit:Commit):void;
    axiosThen(res:Request,data:actionData,commit:Commit):void;
    axiosCatch(err:Request,data:actionData,commit:Commit):void;
}

//todo utilsOptions
export interface utilsOptions {
    isEmail(email):boolean;
    isEmails(email):boolean;
    isPhone(phone):boolean;
    isNumber(value):boolean;
    isNumbers(value):boolean;
    is_S(str):boolean;
    isPhoneFixation(PhoneFixation):boolean;
    IdCodeValid(code):object;
    isIdCard(code):object;
    parseQuery(query:string):object;
    isIllegality(PhoneFixation):boolean;
    templateParsing(d, key, val, options):string;
    exactNum(value):string|number|undefined;
    dereplicationToArray(data:[]):[];
    isTel(value):boolean;
    iss(ary):boolean;
    filterDs(data:[]):[];
    imagesRotate(f:File,fn:(...arg:any)=>void,bool?:boolean):void;
    NoRound(a:string|number,length:number):number|string;
    isIosAndroid():boolean;
    Logout(_this:{[key:string]:any, action?(actionData:actionData):void}):void;
    SearchParentKey(parent:object & Vue, keyName:string):object;
    escape2Html(str:string):string;
}

//todo apiOptions
export interface apiOptions {
    [key:string]:(...args: Array<any>)=>void;
}

//todo filtersOptions
export interface filtersOptions {
    [key:string]:(...args: Array<any>)=>any;
}
//todo MockConfig
export interface MockConfig {
    [key:string]:(mockjs: void)=>any;
}
