<template>
    <div class="main-page">
        <div>
            <el-carousel trigger="click" height="430px">
                <el-carousel-item v-for="item in hotFood" :key="item.foodid" >
                    <div class="hot" @click="selectHot(item)">
                       <img :src="item.foodsrc"/>
                       <div v-for="items in foodType" v-if="items.classtype==item.classtype">
                            <p>{{items.classname}}</p>
                            <span>{{items.describe}}</span>
                       </div> 
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="suggest">
            <p>店长推荐</p>
            <ul class="suggest-items">
                <li v-for="(item,index) in hotFood" v-if="index<4" :key="item.foodid" class="suggest-item" @click="selectHot(item)">
                    <img :src="item.foodsrc"/>
                    <div>
                        <p class="suggest-name">{{item.foodname}}</p>
                        <p class="suggest-price"><span>￥{{item.foodprice}}</span>
                        <p class="suggest-level">星级:{{item.foodstart}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import axios from 'axios'
    export default {
        name: 'f-main',
        data () {
            return {
            }
        },  
        computed:{
           ...mapGetters("Prodata",["hotFood","foodType"])
        },
        methods:{
            ...mapActions("Prodata",["getHotFood","changeFoodTypeAction","getDetail"]),
            selectHot(arg){
                console.log(arg)
                this.changeFoodTypeAction(arg.classtype)
                this.getDetail({classtype:arg.classtype,eattype:arg.eattype})
                this.$router.push({path:'/detail'})
            }
        },
        mounted(){
            this.getHotFood()
        }
    }
</script>
<style scoped>
  .hot{
    width:100%;
    height:430px;
    position:relative;
  }
  .hot img{
      width:100%;
      height:100%;
  }
  .hot div{
      position:absolute;
      right:30px;
      bottom:80px;
      text-align:right;
  }
  .hot div span{
      font-size:16px;
  }
  .suggest{
      border-top:5px solid #742828;
      padding:15px;
  }
  .suggest-items{
      margin-top:30px;
      display:flex;
      justify-content:space-between;
  }
  .suggest-item{
      display:flex;      
  }
  .suggest-item img{
      width:100px;
      height:68px;
      margin-right:15px;
  }
  .suggest-name{font-size:18px;}
  .suggest-price{font-size:18px;color:#aa2828;}
  .suggest-level{font-size:16px;color:#aa2828;}
</style>