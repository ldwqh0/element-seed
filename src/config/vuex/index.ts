import { createStore } from 'vuex'

export default createStore<{ title: string }>({
  state () {
    return {
      title: ''
    }
  },
  mutations: {
    title (state, title: string) {
      state.title = title
    }
  }
})
