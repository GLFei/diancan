import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/User/Login'
import Home from '@/modules/Home'
import Container from '@/components/Container'

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
      name: 'f-container',
      component: Container,
      children: [
        {
          path: 'home',component:Home
        },
        {
          path: 'class*',component:{
            render (h) {return h("div",null,'class_list')}
          }
        },
        {
          path: 'detail',component:{
            template : "<div>detail</div>"
          }
        }
      ]
    }
  ]
})
