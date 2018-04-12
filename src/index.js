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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
