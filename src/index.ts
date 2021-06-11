import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { router, store } from './config'
// 载入模拟数据，在对接后端服务器接口时，取消掉
import SampleModule from './modules/sample-module'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(SampleModule, {
  store,
  router
})

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
