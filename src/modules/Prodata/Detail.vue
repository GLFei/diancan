<template>
    <div>
        <ul class="detail-items">
            <li v-for="ele in foodDetail" class="detail-item"  @click="changeCheckList({foodId:ele.foodid})">
                    <img :src="ele.foodsrc" class="detail-food-img"/>
                    <span class="detail-price">￥{{ele.foodprice}}</span>
                    <div class="detail-name">
                        <p>{{ele.foodname}}</p>
                        <span>{{ele.foodname}}的描述</span>
                    </div>
                    <p class="detail-check-box">
                        <span v-if="checkList.indexOf(ele.foodid)>-1">v</span>
                        <span v-else>+</span>
                    </P>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-detail',
        computed:{
            ...mapGetters("Prodata",["foodDetail","checkList","foodClass"])
        },
        methods:{
            ...mapActions("Prodata",["changeCheckList","getDetail"]),
        },
        mounted(){
            //刷新页面后重新获取  store里拿不到数据
            if(this.foodDetail.length)console.log(
                this.getDetail(this.$route.query)
            )
        }
    }
</script>
<style >
.detail-items{
    display:flex;
}
.detail-item{
    position:relative;
    width:300px;
    margin:30px;
    background:pink;
    border-radius:10px;
}
.detail-item .el-checkbox__input{
    position:absolute;
    bottom:5px;
    right:5px;
}
.detail-food-img{
    width:300px;
    height:200px;
    display:block;
    border-top-right-radius:10px;
}
.detail-price{
    display:block;
    width:200px;
    height:40px;
    line-height:40px;
    padding:0 5px;
    text-align:right;
    color:#881f1f;
    background:-webkit-linear-gradient(left,rgba(191,161,159,0),rgba(191,161,159,1));
    position:absolute;
    right:0;
    top:160px;
}
.detail-name{
    font-family:"宋体";
    padding:15px;
    height:300px;
    background:rgb(191,161,159);
    color:white;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
}
.detail-name p{
    font-size:20px;
    padding-bottom:20px;
}
.detail-name span{
    font-size:16px;
    line-height:16px;
}
.detail-check-box{
    position:absolute;
    right:20px;
    bottom:15px;
}
.detail-check-box span{
    display:inline-block;
    height:25px;
    width:25px;
    line-height:25px;
    text-align:center;
    color:white;
    background:#aa2828;
    border-radius:50%;    
}
.detail-check-box input{
    position:absolute;
    visibility:hidden;
}
</style>
