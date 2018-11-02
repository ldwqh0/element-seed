import storeModule from './vuex'
import routes from './route'

export default {
  install (Vue, { store, router }) {
    router.addRoutes(routes)
    store.registerModule('sample', storeModule)
  }
}
