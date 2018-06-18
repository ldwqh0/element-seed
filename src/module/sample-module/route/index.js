export default [{
  name: 'form',
  path: '/form',
  component: () => import('../component/FormSample')
}, {
  name: 'table1',
  path: '/table1',
  component: () => import('../component/TableOne')
}, {
  name: 'table2',
  path: '/table2',
  component: () => import('../component/TableTwo')
}, {
  name: 'theme',
  path: '/theme',
  component: () => import('../component/ThemeSwitch')
}]
