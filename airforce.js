"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("./axios");
var initState_1 = require("./initState");
var vue_1 = require("vue");
var _ = require("lodash");
var configs = require("./configs.js").default;
var AIRFORCE_DO = 'AIRFORCE_DO';
var AIRFORCE_LEAVE = 'AIRFORCE_LEAVE';
// initial state
var state = initState_1.default;
// getters
var getters = {
    airforce: function (state) { return state; }
};
// actions
var actions = {
    action: function (_a, data) {
        var commit = _a.commit;
        configs.axiosBefore(data);
        var restData = data;
        if (data.method && (data.url || data.fullUrl)) {
            if (data.isFormData) {
                var toFormData = data.data;
                var FormDataObj = new FormData();
                for (var k in toFormData) {
                    if (Object.prototype.toString.call(toFormData[k]) == "[object Object]" ||
                        Object.prototype.toString.call(toFormData[k]) == "[object Array]") {
                        FormDataObj.append(k, JSON.stringify(toFormData[k]));
                    }
                    else {
                        FormDataObj.append(k, toFormData[k]);
                    }
                }
                restData.data = FormDataObj;
            }
            return axios_1.default(restData).then(function (res) {
                var result;
                try {
                    result = res.json();
                }
                catch (e) { /**/ }
                if (result) {
                    return result;
                }
                return res;
            }).then(function (result) {
                configs.axiosThenBefore(result, data, commit);
                // VUX.loading.hide();
                if (data.resthen) {
                    data.resthen(result);
                }
                data.goods = _.merge({}, data.goods, result.data);
                commit(AIRFORCE_DO, { data: data });
                if (data.callback) {
                    data.callback(result.data);
                }
                if (result.status >= 200 && result.status < 300 && result.data.status !== 'ERROR') {
                    return new Promise(function (resolve) {
                        resolve(result.data);
                    });
                }
                else {
                    return new Promise(function (resolve, reject) {
                        reject(result);
                    });
                }
            }).then(function (res) {
                if (data.success) {
                    data.success(res);
                }
                configs.axiosThen(res, data, commit);
                return res;
            }).catch(function (e) {
                configs.axiosCatch(e, data, commit);
                if (data.error) {
                    data.error(e);
                    return e;
                }
                return e;
            });
        }
        else {
            commit(AIRFORCE_DO, { data: data });
        }
    },
    unload: function (_a, data) {
        var commit = _a.commit;
        commit(AIRFORCE_LEAVE, { data: data });
    }
};
// mutations
var mutations = (_a = {},
    _a[AIRFORCE_DO] = function (state, _a) {
        var data = _a.data;
        if (_.isObject(data.goods) && !_.isArray(data.goods)) {
            vue_1.default.set(state, data.moduleName, _.merge({}, state[data.moduleName], data.goods));
        }
        else {
            vue_1.default.set(state, data.moduleName, data.goods);
        }
    },
    _a[AIRFORCE_LEAVE] = function (state, _a) {
        var data = _a.data;
        state[data.moduleName] = undefined;
    },
    _a);
exports.default = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
