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

Vue.http.interceptors.response.use(response => {
  let err = '与服务器交互时出现错误'

  if (response.data.success) {
    if (response.data.draw) {
      return response.data
    } else {
      return response.data.data
    }
  } else {
    err += '错误信息' + response.error
  }
  store.commit('addError', err)
  return Promise.reject(response)
}, error => {
  let err = '与服务器交互时出现错误，错误码：' + error.response.status
  store.commit('addError', err)
  return Promise.reject(error)
})
