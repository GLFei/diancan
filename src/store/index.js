import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import Prodata from './modules/Prodata'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login, Prodata
  }
})

export default store
