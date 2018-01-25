<template>
<div class="f-aside">
    <div class="f-aside-top">
        <div>
            <p>桌号：<span></span></p>
            <p>人数：<span></span></p>
        </div>
        <p>服务工号：<span></span></p>
    </div>
    <div class="f-aside-middle text-center">
        <p>八大菜系</p>
    </div>
    <div class="f-aside-lists text-center">
        <ul  v-for="(ele,index) in foodType">
        <router-link :to="'/class?classType='+index">
            <li :key="index" @click="changeFoodTypeAction(index)">      
                <p v-if="ele.state"><img src="@/assets/images/home1.png"><span></span></p>
                <span class="f-side-class-title">{{ele.name}}</span>
            </li>
        </router-link>
        </ul>
    </div>
    <div class="f-aside-bottom">
        <p><i class="iconfont icon-voice"></i><span>呼叫</span></p>
        <p><i class="iconfont icon-note"></i><span>订单</span></p>
        <p><i class="iconfont icon-moreclass"></i><span>更多</span></p>
    </div>
</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-aside',
        data () {
            return{
            }
        },
        computed:{
            ...mapGetters("home",["foodType"])
           
        },
        methods:{
            ...mapActions("home",["changeFoodTypeAction"])
        },
        mounted(){
             console.log(this.foodType)
        }
    }
</script>
<style>
    .f-aside{background:#742828;min-height:600px;}
    .f-aside-top{
        font-size:12px;
    }
    .f-aside-middle{
        border-top:1px solid white;
        border-bottom:1px solid white;
        font-size:22px;
        padding:8px 0;
    }
    .f-aside-lists{
        font-size:20px;
    }
    .f-aside-lists li{
        position:relative;
        padding:10px 0;
    }
    .f-aside-lists li p{
        width:100%;
        position:absolute;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .f-aside-lists li p span{
        width:40px;
        height:2px;
        background:rgba(255,255,255,0.5);
    }
    .f-side-class-title{color:white;}
    .f-aside-bottom{
        margin-top:20px;
        display:flex;
        font-size:18px;
        justify-content:space-around;
        padding:0 2px;
    }
    .f-aside-bottom p{
        display:flex;
        flex-direction:column;
        text-align:center;
    }
    .f-aside-bottom .iconfont{
        font-size:26px;
    }
</style>