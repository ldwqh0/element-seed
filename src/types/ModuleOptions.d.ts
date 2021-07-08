import { Router } from 'vue-router'
import { Store } from 'vuex'

export interface ModuleOptions<T = any> {
  router?: Router,
  store?: Store<T>
}
