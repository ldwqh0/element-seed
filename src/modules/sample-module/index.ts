// import storeModule from './vuex'
import routes from './routes'
import { App, Plugin } from 'vue'
import { ModuleOptions } from '@/types/ModuleOptions'

export default {
  install (app: App, { store, router }: ModuleOptions): void {
    routes.forEach(route => router?.addRoute(route))
  }
} as Plugin
