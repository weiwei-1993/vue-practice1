import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
// import HelloWorld from './../components/HelloWorld'
import home from './../html/home'
import Main from './../html/main'
import bankBillList from './../html/bankBillList'
import find from './../html/find'
import myaccountHome from './../html/myaccountHome'
import login from './../html/login'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/Main/home',
      component: Main
    },
    {
      path: '/Main',
      name: 'Main',
      redirect: '/Main/home',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'bankBillList',
          name: 'bankBillList',
          component: bankBillList
        },
        {
          path: 'find',
          name: 'find',
          component: find
        },
        {
          path: 'myaccountHome',
          name: 'myaccountHome',
          component: myaccountHome
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
