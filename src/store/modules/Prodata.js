import axios from 'axios'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    //主菜系
    foodType:[],
    hotFood:[],//店长推荐
    foodClass:[],//
    foodDetail:[],
    checkList:[],
    orderNum:'000000'
  },
  //获取状态参数
  getters: {
    foodType:state=>state.foodType,
    hotFood: state=>state.hotFood,
    foodClass: state=>state.foodClass,
    foodDetail:state=>state.foodDetail,
    checkList:state=>state.checkList,
    orderNum:state=>state.orderNum
  },
  //修改状态数据
  mutations: {
    //主菜系
    mainClass(state,payload){
      state.foodType = payload
    },
    //修改菜系
    changeFoodType(state,payload){
      state.foodType = payload.foodType,
      state.foodClass = payload.foodClass
    },
    //推荐菜品
    hotFood(state,payload){
      state.hotFood = payload
    },
    //菜系下的分类
    foodClass(state,payload){
      state.foodClass = payload
    },
    //分类下菜品
    setFoodDetail(state,payload){
      state.foodDetail = payload
    },
    //添加菜品到预订单
    setCheckList(state,payload){
      state.checkList = payload
    },
    setOrderNum(state,payload){
      console.log("setOrderNum",payload)
      state.orderNum = payload
    }
  },
  //接受操作，执行与后台的交互
  actions: {
    //获取所有菜系
    getMainClass(context,payload){
      axios.get("/api/food/mainclass").then(res=>{
        console.log(res)
        context.commit("mainClass",res.data.results)
      })
    },
    //改变当前选中的菜系
    changeFoodTypeAction(context,payload){
      if(payload ==0){
          const foodType = changeMenu(payload)
          context.commit("changeFoodType",{foodType})
      }else{//改变菜单的菜系
        axios.get("/api/food/eatclass?classtype="+payload).then(res=>{
          const foodClass = res.data.result
          console.log(foodClass)
          const foodType = changeMenu(payload)
          context.commit("changeFoodType",{foodType,foodClass})
        })
      }
      function changeMenu(payload){
          const foodType = context.state.foodType
          foodType.map((ele)=>{ele.state = false})
          foodType[payload-1]&&(foodType[payload-1].state = true)
          return foodType
      }
    },
    //获取店长推荐菜品
    getHotFood(context,payload){
      axios.get("/specil/hotfood").then(res=>{
        console.log(res)
        context.commit("hotFood",res.data.result)
      })
    },
    getDetail(context,payload){
      var query = qs.stringify(payload)
      axios.get("/api/food/singelfood?"+query).then(res=>{
        console.log(res)
        context.commit("setFoodDetail",res.data)
      })
    },
    changeCheckList(context,payload){
      //setCheckList
      const {foodId} = payload
      const {checkList,orderNum} = context.state
      var ind = checkList.indexOf(foodId)
      if(ind<0){
          checkList.push(foodId)
      }else{
          checkList.splice(ind,1)
      }
      var foodsingle = {foodId,foodnum:1,ordertable:1,ordernum:orderNum}
      var query = qs.stringify(foodsingle)
      axios.get("/api/order/template?"+query).then(res=>{
        context.commit("setOrderNum",res.data.result)
      })
      context.commit("setCheckList",checkList)
    }
  }
}
