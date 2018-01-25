<template>
    <div class="main-page">
        <div>
            <el-carousel trigger="click" height="430px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="hot">
                       <img />
                       <div>
                            <p>粤菜</p>
                            <span>时令性强，夏秋尚清淡，冬春求浓郁</span>
                       </div> 
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="suggest">
            <p>店长推荐</p>
            <ul class="suggest-items">
                <li v-for="item in 3" :key="item" class="suggest-item">
                    <img />
                    <div>
                        <p class="suggest-name">鲜肉牛展</p>
                        <p class="suggest-price"><span>￥88</span>
                        <p class="suggest-level">星级:</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-main',
        data () {
            return {

            }
        },
        computed:{

        },
        methods:{

        },
        mounted(){

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