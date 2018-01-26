import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/User/Login'
import Home from '@/modules/Home'
import Container from '@/components/Container'
import Main from '@/modules/Prodata/Main'
import Class from '@/modules/Prodata/Class'
import Detail from '@/modules/Prodata/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'f-login',
      component: Login
    },
    {
      path: '/',
      //name: 'f-container',
      component: Container,
      children: [
        {
          path: '',component:Main
        },
        {
          path: 'class*',component:Class
        },
        {
          path: 'detail',component:Detail
        }
      ]
    }
  ]
})
