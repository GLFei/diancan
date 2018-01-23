import axios from 'axios'

export default {
  namespaced: true,
  state: {
    initial:true,
    username:'',
    password:'',
    newPassword:'',
  },
  getters: {
    initail: state=>state.initial,
    username: state=>state.username,
    password: state=>state.password,
    newPassword: state=>state.newPassword
  },
  mutations: {
    login(){},
    loginout(){},
    changePswd(){}
  },
  actions: {
    login(){},
    loginout(){},
    changePswd(){}   
  }
}
