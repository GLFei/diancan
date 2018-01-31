import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/User/Login'
import Home from '@/modules/Home'
import Container from '@/components/Container'
import Main from '@/modules/Prodata/Main'
import Class from '@/modules/Prodata/Class'
import Detail from '@/modules/Prodata/Detail'
import AddOrder from '@/modules/Order/AddOrder'
import axios from 'axios'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'f-login',
      component: Login,
      meta:{noAuth:true}
    },
    {
      path: '/',
      //name: 'f-container',
      component: Container,
      children: [
        {
          path: '',
          component:Main, 
          meta:{requiresAuth:true}
        },
        {
          path: 'class*',component:Class
        },
        {
          path: 'detail',component:Detail
        }
      ]
    },
    {
      path:'/order',
      name: 'f-order',
      component:AddOrder,
    }
  ]
})


router.beforeEach((to, from, next) => {
  var token = window.localStorage.getItem("token")
  axios.get("/api/requireAuth?token="+token).then(res=>{
    if (res.data.msgCode==1) {//登陆后验证token 符合后执行路由
      next()
    } else {//不符合 看是否是登录页面 强制登录
      if (to.matched.some(record => record.meta.noAuth)) {
          next()
      } else {
        next({
          path:'/login',
          query:{redirect:to.fullPath}
        }) 
      }
    }
  })
})


export default router