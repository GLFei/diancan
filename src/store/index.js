import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login, home
  }
})

export default store
