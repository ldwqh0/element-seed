import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from './config'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import sampleModule from './modules/sample-module'

console.log('Created By ldwqh0@outlook.com')

/**
 *  一定要使用 render函数创建app,这样就不需要依赖完整的esm，也就是不需要打包vue的编译模块了，
 *  vue的模板编译模块体积打约是25KB左右
 */
const app = createApp(App)
app.use(ElementPlus)
app.use(sampleModule, { store, router })
// store和router要在导入模块之后
app.use(store)
app.use(router)
app.mount('#app')
