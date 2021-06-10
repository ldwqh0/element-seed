import storeModule from './vuex'
import routes from './routes'

export default {
  install (Vue, { store, router }) {
    routes.forEach(route => router.addRoute(route))
    store.registerModule('sample', storeModule)
  }
}
