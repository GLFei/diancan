import axios from 'axios'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    foodList:[],
  },
  //获取状态参数
  getters: {
    foodList:state=>state.foodList,
    total:state=>{
      let num = 0;
      let price = 0;
      let selected = true;
      let ids = [];
      state.foodList.forEach((ele,index)=>{
        if(!ele.selected){
          selected = false
        }else{
          num +=+ele.foodnum
          price += ele.foodprice*ele.foodnum
          ids.push(ele.foodid)
        }
      })
      return {
        selected,num,price,ids
      }
    }
  },
  //修改状态数据
  mutations: {
    //显示预订单的数据
    setFoodList(state,{foodList}){
      //后端没有选中的状态 自己添加
      foodList.forEach((ele)=>{
        ele.selected = false
      })
      state.foodList = foodList
    },
    //修改订单中商品的数量
    foodNum(state,payload){
      state.foodList[payload.index].foodnum=payload.foodnum
    },
    itemSelect(state,{index,ele}){
      //单击后改变商品的选中状态
      state.foodList[index].selected = !state.foodList[index].selected
    },
    allSelect(state,{selected}){
      state.foodList.forEach((ele)=>{
        ele.selected = !selected
      })
    }
  },
  //接受操作，执行与后台的交互
  actions: {
    //根据订单号查询商品
    getFoodList(context,payload){
      const {ordernum} = payload
      axios.get("/api/order/show?ordernum="+ordernum).then(res=>{
        if(res.data.msgCode===1){
          context.commit("setFoodList",{foodList:res.data.result})
        }else{
          context.commit("setFoodList",{foodList:[]})
        }
      })
    },
    //修改数据库商品的数量
    setFoodNum(context,payload){
      var qsStr = qs.stringify(payload)
      axios.get("/api/order/change?"+qsStr).then(res=>{
        if(res.data.msgCode ===1){
          context.commit("foodNum",payload)
        }
      })
    },
    //删除商品
    delFood(context,payload){
      console.log(payload)
      const {ordernum,foodid,index,cb} = payload
      var qsStr = qs.stringify({ordernum,foodid})
      axios.get("/api/order/del?"+qsStr).then(res=>{
        if(res.data.msgCode ===1){
          context.state.foodList.splice(index,1) //移除数组中的商品
          cb&&cb() 
        }
      })
    },
    itemSelect(context,{ele,index}){
      context.commit("itemSelect",{ele,index})
    },
    allSelect(context,{selected}){
      context.commit("allSelect",{selected})
    }
  }
}
