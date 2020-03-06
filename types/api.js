"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Api2 = {};
var Api3 = {};
var initApi = true;
function default_1() {
    var _this = this;
    if (initApi) {
        var _loop_1 = function (keyName) {
            Api3[keyName] = function () {
                var _a;
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                (_a = Api2[keyName]).call.apply(_a, __spreadArrays([_this], params));
            };
        };
        for (var keyName in Api2) {
            _loop_1(keyName);
        }
        initApi = false;
    }
    return Api3;
}
exports.default = default_1;
