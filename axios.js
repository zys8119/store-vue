"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var index_1 = require("./index");
var configs = require("./configs.js").default;
function default_1(config) {
    var rootUrl = "";
    try {
        rootUrl = $$rootUrl;
    }
    catch (e) { /**/ }
    if (typeof configs.$$rootUrl == "string") {
        rootUrl = configs.$$rootUrl;
    }
    if (configs.$$rootUrl && index_1.default.state.airforce && index_1.default.state.airforce.$$rootUrl) {
        rootUrl = index_1.default.state.airforce.$$rootUrl;
    }
    config.url = rootUrl + config.url;
    if (config.fullUrl) {
        config.url = config.fullUrl;
    }
    return axios_1.default(config);
}
exports.default = default_1;
