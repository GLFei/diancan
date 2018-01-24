import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/User/Login'
import Home from '@/modules/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'f-login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
