import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: env.CONTEXT_PATH,
  routes: []
})
// TODO 在这里添加全局路由拦截
export default router
