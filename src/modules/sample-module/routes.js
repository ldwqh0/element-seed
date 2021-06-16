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
  }, {
    name: 'list',
    path: 'list',
    component: () => import('./views/TableOne.vue')
  }, {
    name: 'list2',
    path: 'list2',
    component: () => import('./views/TableTwo.vue')
  }]
}]
