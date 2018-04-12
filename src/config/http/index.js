import Vue from 'vue'
import { AjaxPlugin } from '../../plugins'
import store from '@/vuex'

Vue.use(AjaxPlugin)

Vue.http.interceptors.request.use(config => {
  store.commit('loading')
  return config
}, error => {
  return Promise.reject(error)
})

Vue.http.interceptors.response.use(response => {
  store.commit('loadingComplete')
  return response
}, error => {
  store.commit('loadingComplete')
  return Promise.reject(error)
})
