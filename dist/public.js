"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("@/utils/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  /**
   * @类主体 class
   * _this 第二上下文
   * */
  function _default(_this) {
    _classCallCheck(this, _default);

    this._this = _this;
    this.action = _this.action;
  }
  /**
  * @初始化获取位置信息对象 getMapCallback
   * callback_OK 成功回调
   * callback_ERR 失败回调
  */


  _createClass(_default, [{
    key: "getMapCallback",
    value: function getMapCallback() {
      var callback_OK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Function();
      var callback_ERR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Function();

      var _this = this;

      var geolocation = new qq.maps.Geolocation(); //*

      if (navigator.userAgent.indexOf("iPhone") > -1) {
        //iPhone手机获取粗糙位置
        geolocation.getIpLocation(function (e) {
          callback_OK.call(_this._this, e, _this);
        }, function (e) {
          callback_ERR.call(_this._this, e, _this);
        });
      } else {
        geolocation.getLocation(function (e) {
          callback_OK.call(_this._this, e, _this);
        }, function (e) {
          callback_ERR.call(_this._this, e, _this);
        }, {
          timeout: 9000
        });
      } //*/


      return this;
    }
    /**
     * @获取位置信息方法 getMap
     * callback_OK 成功回调
     * callback_ERR 失败回调
     */

  }, {
    key: "getMap",
    value: function getMap() {
      var callback_OK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Function();
      var callback_ERR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Function();

      var _this = this;
      /*
      if(window.qq){
        _this.getMapCallback(callback_OK,callback_ERR);
      }else{
        var js = document.createElement("script");
        js.id="getMap";
        //腾讯位置API地址
        js.src="https://apis.map.qq.com/tools/geolocation/min?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp";
        js.type = 'text/javascript';
        js.async = true;
        js.onload = function () {
          _this.getMapCallback(callback_OK,callback_ERR);
        }
        document.body.appendChild(js);
      }
      //*/
      //*


      var js = document.createElement("iframe");
      js.id = "getMap"; //腾讯位置API地址

      js.src = "https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp&MapRandom=" + Math.random();
      js.style.display = 'none';

      js.onload = function () {
        var loc;
        var isMapInit = false;
        window.addEventListener('message', function (event) {
          loc = event.data; // console.log('location', loc);

          if (loc && loc.module == 'geolocation') {
            callback_OK.call(_this._this, loc, _this);
          } else {
            callback_ERR.call(_this._this, loc, _this);
          }
        }, false);
        document.getElementById("getMap").contentWindow.postMessage('getLocation', '*');
        setTimeout(function () {
          if (!loc) {
            document.getElementById("getMap").contentWindow.postMessage('getLocation.robust', '*');
          }
        }, 6000);
      };

      document.body.appendChild(js); //*/

      return this;
    }
    /**
     * @数字空格格式化 formatNumber
     * event event节点回调参数
     * index 空格位数
     */

  }, {
    key: "formatNumber",
    value: function formatNumber() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var v = event.target.value.replace(/\D/, "");
      var code = v.match(new RegExp("\\d{1," + index + "}", "img"));

      if (code) {
        event.target.value = code.join(" ");
      } else {
        event.target.value = v;
      }

      return this;
    }
  }]);

  return _default;
}();

exports.default = _default;