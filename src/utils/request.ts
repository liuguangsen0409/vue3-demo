import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

request.interceptors.response.use((response: AxiosResponse) => {
  const { data: httpData } = response
  const { code, data, message: msg } = httpData

  const codeStr = `${code}`

  if (codeStr === '200') {
    // 如果请求成功直接返回 data 不包括 code message
    return data
  } else {
    return Promise.reject(httpData)
  }
})

export default request