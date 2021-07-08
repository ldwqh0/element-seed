import { RouteRecordRaw } from 'vue-router'

export default [{
  path: '/',
  redirect: {
    name: 'form'
  }
}, {
  path: '/module1',
  component: () => import('../theme/views/LeftTemplate.vue'),
  children: [{
    name: 'form',
    path: 'form',
    component: () => import('./views/FormSample.vue')
  }]
}] as RouteRecordRaw[]
