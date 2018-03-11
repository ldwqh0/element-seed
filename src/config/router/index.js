import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Module1',
      component: () => import('@/components/module1')
    }, {
      path: '/m2',
      name: 'Module2',
      component: () => import('@/components/module2')
    }
  ]
})
