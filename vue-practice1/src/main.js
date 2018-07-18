// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import qs from 'qs'
import router from './router'
import global from './html/global'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.global = global
axios.defaults.baseURL = 'https://app1.shiyujia.com/answer/'
// http request 请求拦截器，有token值则配置上token值
const token = sessionStorage.getItem('token')
axios.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    if (token && config.url !== 'login/login' && config.url === 'login/updateFirstPassword') { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      config.data.token = token
    } else if (config.url !== 'login/login' && config.url !== 'login/updateFirstPassword') {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      window.location.hash = '/'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    if (response.data.code === 3) {
      // 这里写清除token的代码
      sessionStorage.removeItem('token')
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath} // 登录成功后跳入浏览的当前页面
      })
    } else {
      return response.data
    }
  },
  error => {
    if (error.response) {
      switch (error.response.code) {
        case 3:
          // 这里写清除token的代码
          sessionStorage.removeItem('token')
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath} // 登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  global,
  store,
  components: { App },
  template: '<App/>'
})
