import axios from 'axios'

export default {
  install (Vue, instance = axios.create()) {
    Vue.prototype.$http = instance
    Vue.http = instance
  }
}
