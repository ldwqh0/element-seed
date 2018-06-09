// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' // 引入填充库,解决IE不能显示的问题
import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import './config/http'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex'

Vue.config.productionTip = false
Vue.use(ElementUi)

console.log('Created By ldwqh0@outlook.com')
/**
 *  一定要使用 render函数创建app,这样就不需要依赖完整的esm，也就是不需要打包vue的编译模块了，
 *  vue的模板编译模块体积打约是25KB左右
 */
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render (createElement) {
    return createElement(App)
  }
}).$mount('#app')
