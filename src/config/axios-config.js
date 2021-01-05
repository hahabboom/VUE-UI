/**
 * @author Tang
 * @date 2020/7/20
 * @Description config of axios
 */
import Vue from 'vue'
import axios from 'axios' // https://www.kancloud.cn/yunye/axios/234845
// import router from '@/router'
// import { clearLoginInfo } from '@/utils'

// 使用自定义配置新建一个 axios 实例：axios.create([config])
const $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_SERVER : process.env.VUE_APP_PROXY_TARGET,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 拦截器
 * 在请求或响应被 then / catch 处理前进行拦截
 * */
// 请求拦截器
$axios.interceptors.request.use(config => {
  // 在发送请求前做些什么
  config.headers.token = Vue.cookie.get('token') // 请求头携带 token
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
$axios.interceptors.response.use(response => {
  // 对响应数据做些什么
  // if (response.data && response.data.code === 401) { // 401 token 失效
  //   clearLoginInfo()
  //   router.push({ name: 'login' }).then(() => console.log('token 失效，跳转至登录页……'))
  // }
  return response
}, error => {
  return Promise.reject(error)
})

export default $axios
