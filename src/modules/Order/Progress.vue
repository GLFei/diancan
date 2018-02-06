<template>
    <div>
        <f-header :title="title" >
            <p slot="center">{{tableNum}}</p>
            <p slot="right">
                <span>加单</span>
                <span>结算</span>
            </p>
        </f-header>
        <div class="order-container">
            <p class="ordernum">流水号：<span>{{orderNum}}</span></p>
            <ul>
                <li v-for="(ele,index) in listData">
                    <p>{{ele}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-progress',
        data () {
            return {
                title:"<< 订单进程",
                orderNum:0,
                listData:[],
                tableNum:'021',

            }
        },
        computed:{
            
        },
        methods:{

        },
        mounted(){
            console.log(this.$route.query)
            const {ids} = this.$route.query
            this.listData = ids.split(',')
        }
    }
</script>
<style scoped>
    .order-container{
        color:#333;
        padding:0 10px;
    }
    .ordernum{
        font-size:20px;
        height:26px;
        color:#333;
    }
</style>
