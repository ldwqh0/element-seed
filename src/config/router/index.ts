import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = new VueRouter({
  // TODO 默认使用history模型,但history模式仅售新的浏览器支持，如果项目要支持老的项目，必须使用hash模式
  mode: 'history',
  base: env.CONTEXT_PATH,
  routes: []
})
// TODO 在这里添加全局路由拦截
export default index
