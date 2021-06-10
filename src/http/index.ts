import axios from 'axios'
import qs from 'qs'

export default axios.create({
  // TODO 指定传输到后台的查询参数的序列化方法，不同的后台表现形式不一致，需要根据情况处理
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
})
