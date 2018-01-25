import axios from 'axios'

export default {
  namespaced: true,
  state: {
    foodType:[
                  {name:"浙菜",state:false},
                  {name:"湘菜",state:false},
                  {name:"闽菜",state:false},
                  {name:"粤菜",state:false},
                  {name:"苏菜",state:false},
                  {name:"川菜",state:false},
                  {name:"鲁菜",state:false},
                  {name:"徽菜",state:false},
             ],
    hotFood:[],
    foodClass:[]
  },
  getters: {
    foodType:state=>state.foodType,
    hotFood: state=>state.hotFood,
    foodClass: state=>state.foodClass
  },
  mutations: {
    changeFoodType(state,payload){
      state.foodType = payload
    },
    changeHotFood(state,payload){
      state.hotFood = payload
    }
  },
  actions: {
    changeFoodTypeAction(context,payload){
      const foodType = context.state.foodType
      foodType.map((ele)=>{
        ele.state = false
      })
      foodType[payload].state = true
      context.commit("changeFoodType",foodType)
    },
    changeHotFoodAction(context,payload){
      context.commit("changeHotFood",payload)
    }
  }
}
