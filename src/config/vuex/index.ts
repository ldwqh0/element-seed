import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import http from '@/http'

Vue.use(Vuex) // use必须在创建store实例之前调用
export default new Store({
  state: {
    title: '应用',
    user: {},
    error: {
      count: 0,
      message: ''
    },
    loadingCount: 0,
    theme: 'left',
    menus: []
  },
  mutations: {
    updateTitle (state, { title }): void {
      if (title) {
        state.title = title
      }
    },
    switchTheme (state, theme): void {
      state.theme = theme
    },
    updateUser (state, { user }): void {
      state.user = user
    },
    addError (state, payload): void {
      const count = 1 + state.error.count
      const message = payload
      state.error = {
        count,
        message
      }
    },
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    },
    updateMenu (state, menus) {
      state.menus = menus
    }
  },
  actions: {
    loadMenu ({ commit }) {
      return http.get('/menus').then(({ data }) => {
        commit('updateMenu', data)
        return data
      })
    }
  }
})
