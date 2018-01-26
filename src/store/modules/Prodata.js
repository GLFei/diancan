import axios from 'axios'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    //主菜系
    foodType:[],
    hotFood:[],//店长推荐
    foodClass:[],//
    foodDetail:[]
  },
  //获取状态参数
  getters: {
    foodType:state=>state.foodType,
    hotFood: state=>state.hotFood,
    foodClass: state=>state.foodClass,
    foodDetail:state=>state.foodDetail
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
      axios.get("/api/food/eatclass?classtype="+payload).then(res=>{
        const foodClass = res.data.result
        console.log(foodClass)
        //改变菜单的菜系
        const foodType = context.state.foodType
        foodType.map((ele)=>{
          ele.state = false
        })
        foodType[payload-1].state = true
        context.commit("changeFoodType",{foodType,foodClass})
      })
      
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
    }
  }
}
