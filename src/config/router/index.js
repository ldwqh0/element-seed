import Router from 'vue-router'

console.log(CONTEXT_PATH)
export default new Router({
  base: process.env.BASE_URL,
  mode: 'history'
})
