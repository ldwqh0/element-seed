import VueRouter from 'vue-router'
import { Store } from 'vuex'

export interface ModuleOptions<T = any> {
  router?: VueRouter,
  store?: Store<T>
}
