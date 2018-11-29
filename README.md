# store-vue [![npm](https://img.shields.io/badge/npm-Install-zys8119.svg?colorB=cb3837&style=flat-square)](https://www.npmjs.com/package/store-vue)  [![github](https://img.shields.io/badge/github-<Code>-zys8119.svg?colorB=000000&style=flat-square)](https://github.com/zys8119/store-vue)
这个是一个vue状态管理器、vue过滤、vue工具、MockJs的集合

## 安装

```angular2html
npm i store-vue
```
## 配置

```angular2html
//引入store-vue
import store from "store-vue"
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
```

## 教程

>例子
```vue
<template>
    <div>{{dome | dome}}</div>
</template>
<script>
    export default {
        name: "Dome",
        data(){
            return {
                dome:"dome"
            }
        },
        mounted(){
            //action
            this.action({
                moduleName:"moduleName",
                //...
            })
            //airforce
            this.airforce
            //utils
            this.utils
        }
    }
</script>

<style scoped>

</style>
```

###### 具体方法及配置请查看[源代码](https://github.com/zys8119/store-vue/blob/master/index.js)