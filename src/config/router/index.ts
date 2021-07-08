import { createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

const index = createRouter({
  history: createWebHistory(env.CONTEXT_PATH),
  routes: []
})
// TODO 在这里添加全局路由拦截
export default index
