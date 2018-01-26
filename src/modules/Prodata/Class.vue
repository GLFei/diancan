<template>
    <div class="foodclass-box">
        <ul class="foodclass-items">
            <li v-for="ele in foodClass">
                <router-link :to="'/detail?foodclass='+ele.eattype">
                <div class="foodclass-item" @click="getDetail({classtype:ele.classtype,eattype:ele.eattype})">
                    <img :src="ele.eatsrc" />
                    <div>
                        <p class="food-title">{{ele.eatname}}</p>
                        <p class="food-dis">{{ele.eatname}}的描述</p>
                    </div>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'f-class',
       data () {
           return {
                msg:'challlasdfk;ljasdf'
            }
        },
        computed:{
            ...mapGetters("Prodata",["foodClass"])
        },
        methods:{
            ...mapActions("Prodata",["getDetail"])
        }
    }
</script>
<style scoped>
    .foodclass-box{
        height:100%;
    }
    .foodclass-items{
        height:80%;
        padding:20px;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .foodclass-item{
        width:49%;
        height:160px;
        display:flex;
    }
    .foodclass-item div{
        border:1px dashed gray;
        border-left:none;
        width:100px;
        padding:8px 15px;
    }
    .foodclass-item img{
        width:200px !important;
        height:160px;
    }
    .food-dis{
        padding-top:20px;
        font-size:12px;
    }
</style>