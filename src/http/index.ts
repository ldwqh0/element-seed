import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  // TODO 指定传输到后台的查询参数的序列化方法，不同的后台表现形式不一致，需要根据情况处理
  /*
   * 这里指定为spring mvc解析数组的方式，他使用repeat模式
   * 更多的模式请参考 https://github.com/ljharb/qs
   * 比如我们使用
   * axios.get("/url",{
   *   params:{
   *     keyword:['key1','key2']
   *   }
   * }
   * 最终会被序列化为 /url?keyword=key1&keyword=key2
   */
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
})

// TODO 在这里配置全局interceptors
export default http
