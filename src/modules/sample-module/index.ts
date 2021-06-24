import storeModule from './vuex'
import routes from './routes'
import _Vue, { PluginObject } from 'vue'
import { ModuleOptions } from '@/types/ModuleOptions'

export default {
  install (Vue: typeof _Vue, { store, router }: ModuleOptions): void {
    routes.forEach(route => router?.addRoute(route))
    store?.registerModule('sample', storeModule)
  }
} as PluginObject<ModuleOptions>
