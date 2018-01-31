import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import Prodata from './modules/Prodata'
import order from './modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login, Prodata,order
  }
})

export default store
