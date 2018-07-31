let filters = {};
try {
    filters = require("@/filters/index.js").default;
}catch (e){
    filters = {};
}
export default {
    ...filters
}