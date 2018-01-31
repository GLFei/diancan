import axios from 'axios'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    initial:false,
    username:'',
    password:'',
    newPassword:'',
  },
  getters: {
    initial: state=>state.initial,
    username: state=>state.username,
    password: state=>state.password,
    newPassword: state=>state.newPassword
  },
  mutations: {
    login(){
      //api/login
      //username,password,
      
    },
    loginout(){},
    changePswd(){
      //api/changepwd
      //username,password,newpassword
    }
  },
  actions: {
    login(context,payload){
      const {username,password} = payload;
      console.log(payload)

      axios.get("/api/login?username="+username+"&password="+password).then(res=>{
        const {msgCode,token} = res.data;
        switch(msgCode){
          case 0: break;
          case 1: 
            window.localStorage.setItem("token",token)
            location.href="/"
          break;
          case 2: break;
          default: break;
        }
      })
    },
    loginout(){},
    changePswd(){}   
  }
}
