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
        <ul>
            <li v-for="(ele,index) in foodType" :key="index">{{ele}}</li>
        </ul>
    </div>
    <div>
        <p><i></i><span>呼叫</span></p>
        <p><i></i><span>订单</span></p>
        <p><i></i><span>更多</span></p>
    </div>
</div>
</template>
<script>
    export default {
        name: 'f-aside',
        data () {
            return{
                foodType:["浙菜","湘菜","闽菜","粤菜","苏菜","川菜","鲁菜","徽菜"]
            }
        },
    }
</script>
<style>
    .f-aside{background:#742828;}
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
        font-size:16px;
    }
    .f-aside-lists li{
        padding:10px 0;
    }
    
</style>