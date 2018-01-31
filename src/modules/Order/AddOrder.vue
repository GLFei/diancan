<template>
<div>
    <div>
        <f-header :title="title"></f-header>
    </div>
    <div class="order-container">
        <p class="order-ordernum">流水号：<span>201612200208623</span></p>
        <ul>
            <li v-for="(ele,index) in foodList">
                <div class="order-checked"><input type="checkbox" /></div>
                <div class="order-img"><img :src="ele.foodsrc"/></div>
                <div class="order-des">
                    <p class="order-des-name">{{ele.foodname}}</p>
                    <p class="order-des-color"><span class="order-yuan">￥</span><span class="order-des-price">{{ele.foodprice}}</span></p>
                </div>
                <div>
                    <div class="order-change-box">
                        <span class="order-minus order-change order-des-color" @click="orderMinus">-</span>
                        <input type="text" value="01" class="order-change-num" @blur="orderChange"/>
                        <span class="order-plus order-change order-des-color" @click="orderPlus(ele.foodid)">+</span>
                    </div>
                </div>
                <div><p class="order-des-color"><span class="order-yuan">￥</span><span class="order-des-price">{{ele.foodprice*ele.foodnum}}</span></p></div>
                <div class="order-more"><input type="text" placeholder="备注" class="order-more-inp"/></div>
                <div class="order-del"><span>删除</span></div>
            </li>
            <li class="order-total">
                <p class="order-total-num">共<span >{{totalNum}}</span>份</p>
                <p class="order-total-price">合计：￥{{totalPrice}}</p>
                <p><span>确认提交</span></p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-addOrder',
        data () {
            return {
                title:"<< 订单",
                totalNum:'',
                totalPrice:'',
                orderNum:''
            }
        },
        computed:{
            ...mapGetters("order",["foodList"])
        },
        methods:{
            ...mapActions("order",["getFoodList","setFoodNum"]),
            getTotalNum(foodList){
                foodList.forEach((ele)=>{
                    this.totalNum +=ele.foodnum*1
                    this.Price +=ele.foodnum*ele.foodprice*1
                })
            },
            orderPlus(id){
                this.totalNum++
                this.setFoodNum({foodid:id,ordernum:this.orderNum})
                console.log(this.totalNum)
            },
            orderMinus(id){
                this.totalNum--
                this.setFoodNum({foodid:id,ordernum:this.orderNum})
                console.log(this.totalNum)
            },
            orderChange(){}
        },
        mounted(){
            this.orderNum = this.$route.query.orderNum
            this.getFoodList(this.orderNum)//根据订单获取当前食品列表
            this.getTotalNum(this.foodList)//计算食品数量和总金额
        }
    }
</script>
<style scoped>
    .order-container{
        color:#333;
        padding:0 10px;
    }
    .order-ordernum{font-size:20px;height:26px;height:26px;}
    li{
        box-sizing:border-box;
        width:100%;
        border-top:1px solid #cdcdcd;
        display:flex;
        padding:10px;
        align-items:center;
    }
    .order-checked{
        width:40px;
        margin-right:20px;
    }
    .order-img img{
        width:80px;
        height:80px;
        display:block;
    }
    
    .order-yuan{
        font-family:"宋体";
    }
    .order-des{
        margin-left:20px;
        width:200px;
    }
    .order-des-name{
        font-size:22px;
        line-height:28px; 
    }
    .order-des-color {
        color:#742828;
    }
    .order-des-price{
        font-size:20px;
    }
    .order-change-box{
        margin-right:60px;
        width:160px;
        height:40px;
        border:1px solid #000;
        border-radius:5px;
        display:flex;
    }
    .order-change{
        text-align:center;
        display:inline-block;
        width:50px;
        height:40px;
        font-size:40px;
        font-family:"楷体";
    }
    .order-change-num{
        height:40px;
        width:60px;
        border:none;
        font-size:20px;
        color:#666;
        text-align:center;
        border-left:1px solid #999;
        border-right:1px solid #999;
        outline:none;
    }
    .order-minus{
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }
    .order-plus{
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
    .order-more{
        flex:1;
        padding-left:10%;
    }
    .order-more-inp{
        border:1px solid #000;
        border-radius:5px;
        width:80%;
        height:40px;
        font-size:18px;
        padding-left:10px;
        outline:none;
    }
    .order-del{
        margin-right:10px;
        height:40px;
        padding:0 25px;
        background:#aa2828;
        color:white;
        border-radius:5px;
    }
    .order-total{
        display:flex;
        justify-content:flex-end;
        font-size:20px;
    }
    .order-total-num{
        margin-right:40px;
    }
    .order-total-price{
        margin-right:10px;
    }
</style>