<template>
    <div>
        <ul class="detail-items">
            <li v-for="ele in foodDetail" class="detail-item">
            <template>
                <el-checkbox v-model="checked">
                    <img :src="ele.foodsrc" class="detail-food-img"/>
                    <span class="detail-price">￥{{ele.foodprice}}</span>
                    <div class="detail-name">
                        <p>{{ele.foodname}}</p>
                        <span>{{ele.foodname}}的描述</span>
                    </div>
                </el-checkbox>
            </template>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-detail',
        data () {
            return {
                checked: true
            }
        },
        computed:{
            ...mapGetters("Prodata",["foodDetail"])
        },
        methods:{},
        mounted(){}
    }
</script>
<style >
.detail-item{
    position:relative;
}
.detail-item .el-checkbox__input{
    position:absolute;
    bottom:5px;
    right:5px;
}
.detail-food-img{
    width:200px;
    height:160px;
}
.detail-price{
    display:block;
    width:50px;
    height:40px;
    line-height:40px;
    padding:0 5px;
    text-align:right;
    color:#aa2828;
    background:#dedede;
    position:absolute;
    right:0;
    top:120px;
}
.detail-name{
    padding:15px;
    height:300px;
    background:#deaebe;
    color:white;
}
.detail-name p{
    font-size:16px;
    padding-bottom:20px;
}
.detail-name span{
    font-size:12px;
}
</style>
