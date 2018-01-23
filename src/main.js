// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/icon.css'
// 导入elements-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入公共组件
import fHeader from '@/components/Header'
import fContent from '@/components/Content'
import fHomeHeader from '@/components/HomeHeader'
import fContainer from '@/components/Container'

// 使用ElementUI
Vue.use(ElementUI)

// 注册公共组件
Vue.component("f-header", fHeader)
Vue.component("f-content", fContent)
Vue.component(fContainer.name,fContainer)
Vue.component(fHomeHeader.name,fHomeHeader)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
