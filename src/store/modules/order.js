import axios from 'axios'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    foodList:[],
  },
  //获取状态参数
  getters: {
    foodList:state=>state.foodList
  },
  //修改状态数据
  mutations: {
    setFoodList(state,payload){
      state.foodList = payload
    },
    foodNum(state,payload){
      state.foodList = payload
    }
  },
  //接受操作，执行与后台的交互
  actions: {
    //根据订单号查询食品
    getFoodList(context,payload){
      axios.get("/api/order/show?ordernum="+payload).then(res=>{
        console.log(res.data.result)
        context.commit("setFoodList",res.data.result)
      })
    },
    setFoodNum(context,payload){
      console.log(payload)
    }
  }
}
