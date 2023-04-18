import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://xxx',
  headers: {
    // 
  },
  // 超时
  timeout: 30000
})

// request拦截器
service.interceptors.request.use((config) => {
    return config
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((res) => {
    return  Promise.resolve(res.data)
},
  error => {
})

export default service