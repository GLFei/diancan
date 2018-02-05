<template>
<div>
    <div>
        <f-header :title="title"></f-header>
    </div>
    <div class="order-container">
        <p class="order-ordernum">流水号：<span>{{orderNum}}</span></p>
        <ul>
            <li v-for="(ele,index) in foodList" :key="ele.foodid">
                <div class="order-checked">
                    <i :class="{checkbox:true, selected:ele.selected}" @click="itemSelect({ele:ele.foodid,index})"></i>
                </div>
                <div class="order-img"><img :src="ele.foodsrc"/></div>
                <div class="order-des">
                    <p class="order-des-name">{{ele.foodname}}</p>
                    <p class="order-des-color"><span class="order-yuan">￥</span><span class="order-des-price">{{ele.foodprice}}</span></p>
                </div>
                <div>
                    <div class="order-change-box">
                        <span :class="{'order-minus':true,'order-change':true, 'order-des-color':true,'order-disabled':ele.foodnum==1}" @click="orderChange(index,ele.foodid,-1)">-</span>
                        <input type="text" v-model.number="ele.foodnum" class="order-change-num" @blur="orderChange(index,ele.foodid,0)"/>
                        <span :class="{'order-plus':true,'order-change':true, 'order-des-color':true, 'order-disabled':ele.foodnum==ele.realStock}" @click="orderChange(index,ele.foodid,+1)">+</span>
                    </div>
                </div>
                <div class="order-single-price"><p class="order-des-color"><span class="order-yuan">￥</span><span class="order-des-price">{{ele.foodprice*ele.foodnum}}</span></p></div>
                <div class="order-more"><input type="text" placeholder="备注" class="order-more-inp"/></div>
                <div class="order-del">
                    <el-button type="text" @click="orderDelClick(index,ele.foodid)">删除</el-button>
                </div>
            </li>
            <li class="order-total">
                <p class="order-total-check" @click="allSelect({selected:total.selected})"><i :class="{checkbox:true,selected:total.selected}"></i>全选</p>
                <div class="order-total-box">
                    <p class="order-total-num">共<span >{{total.num}}</span>份</p>
                    <p class="order-total-price">合计：￥{{total.price}}</p>
                    <p><span>确认提交</span></p>
                </div>
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
                totalNum:0,
                totalPrice:0,
                orderNum:0
            }
        },
        computed:{
            ...mapGetters("order",["foodList","total"])
        },
        methods:{
            ...mapActions("order",["getFoodList","setFoodNum","delFood","itemSelect","allSelect"]),
            //修改商品数量
            orderChange(index,id,changeNum){
                clearTimeout(this.timer)
                var foodItem = this.foodList[index]
                if(changeNum === 1){
                    foodItem.foodnum++
                }else if(changeNum === -1){
                    foodItem.foodnum--
                }
                if(foodItem.foodnum<=1){
                    foodItem.foodnum = 1
                }
                if(foodItem.foodnum>=foodItem.realStock){
                    foodItem.foodnum=foodItem.realStock
                }
                this.timer = setTimeout(()=>{
                    console.log(this.timer)
                    this.setFoodNum({foodid:id,ordernum:this.orderNum,foodnum:foodItem.foodnum,index})
                },500)
            },

            //删除商品
            orderDelClick(index,foodid){
                this.$confirm('删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delFood({ordernum:this.orderNum,foodid,index,cb:()=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }})
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            }   
        },
        mounted(){
            this.orderNum = this.$route.query.orderNum
            this.getFoodList({ordernum:this.orderNum})//根据订单获取当前食品列表
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
    .checkbox{
        width:20px;
        height:20px;
        border:1px solid gray;
        display:inline-block;
        margin-right:20px;
    }
    .selected{
        background:gray;
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
    .order-disabled{color:#ddd;}
    .order-single-price{
        margin-left:60px;
    }
    .order-single-price p{
        width:80px;
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
        background:#aa2828;
        color:white;
        border-radius:5px;
    }
    .order-del button{
        display:block;
        padding:0 25px;
        height:100%;
        color:white;
        font-size:20px;
    }
    .order-total{
        display:flex;
        justify-content:space-between;
        font-size:20px;
    }
    .order-total-box{
        flex:1;
        display:flex;
        justify-content:flex-end;
    }
    .order-total-num{
        margin-right:40px;
    }
    .order-total-price{
        margin-right:10px;
    }
</style>