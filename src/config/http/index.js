// import Vue from 'vue'
// import { AjaxPlugin } from '../../plugins'
import store from '@/vuex'
import axios from 'axios'

const instance = axios.create()

// Vue.use(AjaxPlugin)

instance.interceptors.request.use(config => {
  store.commit('loading')
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  store.commit('loadingComplete')
  return response
}, error => {
  store.commit('loadingComplete')
  return Promise.reject(error)
})
export default instance
