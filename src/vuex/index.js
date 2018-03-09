import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    title: '应用',
    user: {},
    error: {
      count: 0,
      message: ''
    },
    loadingCount: 0
  },
  mutations: {
    updateTitle (state, payload) {
      if (payload.title) {
        state.title = payload.title
      }
    },
    updateUser (state, payload) {
      state.user = payload.user
    },
    addError (state, payload) {
      let count = 1 + state.error.count
      let message = payload
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
    }
  }
})
