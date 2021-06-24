import { Module } from 'vuex'

export default {
  namespaced: true,
  state: {
    name: 'nameState'
  },
  actions: {
    action1 () {
      return 'good'
    }
  }
} as Module<unknown, unknown>
