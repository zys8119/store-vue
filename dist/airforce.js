'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _Promise = require('babel-plugin-transform-polyfills/polyfills/Promise');

var _Promise2 = _interopRequireDefault(_Promise);

var _axios = require('./axios');

var _axios2 = _interopRequireDefault(_axios);

var _initState = require('./initState');

var _initState2 = _interopRequireDefault(_initState);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var configs = require("./configs.js").default;

var AIRFORCE_DO = 'AIRFORCE_DO';
var AIRFORCE_LEAVE = 'AIRFORCE_LEAVE';

// initial state
var state = _initState2.default;

// getters
var getters = {
  airforce: function airforce(state) {
    return state;
  }

  // actions
};var actions = {
  action: function action(_ref, data) {
    var commit = _ref.commit;

    // if (data.loading) {
    //   VUX.loading.show({
    //     text: ''
    //   })
    // }
    var goods = data.goods;
    var restData = data;
    // const {goods, ...restData} = data
    if (data.method && (data.url || data.fullUrl)) {
      if (data.isFormData) {
        var toFormData = data.data;
        var FormDataObj = new FormData();
        for (var k in toFormData) {
          FormDataObj.append(k, toFormData[k]);
        }
        restData.data = FormDataObj;
      };
      configs.axiosBefore(data);
      return (0, _axios2.default)(restData).then(function (res) {
        var result = void 0;
        try {
          result = res.json();
        } catch (e) {}
        if (result) {
          return result;
        }
        return res;
      }).then(function (result) {
        // VUX.loading.hide();
        if (data.resthen) {
          data.resthen(result);
        }
        data.goods = _lodash2.default.merge({}, data.goods, result.data);
        commit(AIRFORCE_DO, { data: data });
        if (data.callback) {
          data.callback(result.data);
        }
        if (result.status >= 200 && result.status < 300 && result.data.status !== 'ERROR') {
          return (0, _Promise2.default)(function (resolve, reject) {
            resolve(result.data);
          });
        } else {
          return (0, _Promise2.default)(function (resolve, reject) {
            reject(result);
          });
        }
      }).then(function (res) {
        if (data.success) {
          data.success(res);
        };
        configs.axiosThen(res, data, commit);
        // //登录超时请重新登录
        // if(res.code === 10010){
        //     commit(AIRFORCE_LEAVE, { data:{moduleName:'login_post'}});
        //     delete localStorage.login_post;
        //     VUX.toast.text(res.message);
        //     VUX._this.$router.push("/Loogin");
        // };
        return res;
      }).catch(function (e) {
        configs.axiosCatch(e, data, commit);
        // VUX.loading.hide();
        if (data.error) {
          data.error(e);
          return e;
        }
        if (!data.noError && e.data && e.data.message) {
          // VUX.toast.text(e.data.message)
        }
        return e;
      });
    } else {
      commit(AIRFORCE_DO, { data: data });
    }
  },
  unload: function unload(_ref2, data) {
    var commit = _ref2.commit;

    commit(AIRFORCE_LEAVE, { data: data });
  }
};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, AIRFORCE_DO, function (state, _ref3) {
  var data = _ref3.data;

  if (_lodash2.default.isObject(data.goods) && !_lodash2.default.isArray(data.goods)) {
    _vue2.default.set(state, data.moduleName, _lodash2.default.merge({}, state[data.moduleName], data.goods));
  } else {
    _vue2.default.set(state, data.moduleName, data.goods);
  }
  // console.group()
  // console.log('action', data)
  // console.log('airforce', state)
  // console.groupEnd()
}), _defineProperty(_mutations, AIRFORCE_LEAVE, function (state, _ref4) {
  var data = _ref4.data;

  state[data.moduleName] = undefined;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};