// 引入填充库,解决IE不能显示的问题
// import '@babel/polyfill'
/* (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 * 引入vue,在webpack.base.conf中通过别名设置使用standalone版本或者runtime-only版本
 * 详细信息请参考 https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex'
import { httpInstance, router } from './config'
import { AjaxPlugin } from './plugins'
// 载入模拟数据，在对接后端服务器接口时，取消掉
import '../data'

import { SampleModule } from './module'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(AjaxPlugin, httpInstance)
Vue.use(SampleModule, { store, router })

console.log('Created By ldwqh0@outlook.com')

/**
 *  一定要使用 render函数创建app,这样就不需要依赖完整的esm，也就是不需要打包vue的编译模块了，
 *  vue的模板编译模块体积打约是25KB左右
 */
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
