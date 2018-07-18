import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 申明一个需要全局维护的状态
const state = {
  count: 2
}

// 注册上面引入的模块
const store = new Vuex.Store({
  state // 共同维护的一个状态，state里面可以是很多个全局状态
})

export default store // 导出store并在main.js中引用注册
