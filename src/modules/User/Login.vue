<template>
    <f-content>
        <div class="login-page">
        </div>

        <div v-if="unInitial" class="login-box">
            <div class="login-contain">
                <div  class="inp-box">
                    <p>工号：<input type="text" v-model="workId"/></p>
                    <p>密码：<input type="text" v-model="workPswd"/></p>
                </div>
                <div  class="inp-box submit-btn">
                    <p @click="loginIn">确定</p>
                </div>
            </div>
        </div>
        <div v-else class="login-box">
            <div class="login-contain">
                <p class="title">首次登陆，亲您先修改密码！</p>
                <div class="inp-box">
                    <p>用户名：<input type="text" v-model="uname"/></p>
                    <p>原密码：<input type="text" v-model="pswd"/></p>
                    <p>新密码：<input type="text" v-model="newpswd"/></p>
                    <p>确定密码：<input type="text" v-model="newpswdchk"/></p>
                </div>
                <div  class="inp-box submit-btn">
                    <p @click="changePwd">确定</p>
                </div>
            </div>
        </div>
        
    </f-content>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
import axios from 'axios'
import qs from 'qs'
    export default {
        name: 'f-login',
        data() {
            return {
                uname:'',
                pswd:'',
                newpswd:'',
                newpswdchk:'',
                workId:'',
                workPswd: '',
                unInitial:''
            }
        },
        computed:{
            ...mapGetters("login",[
                "username","password","newpassword"
            ]),
        },
        methods:{
            ...mapActions("login",[
                "login","loginout","changePswd"
            ]),
            loginIn(){
                axios.get("/api/login?username="+this.workId+"&password="+this.workPswd).then(res=>{
                    console.log(res)
                    if(res.data.msgCode==1){
                        window.localStorage.setItem("token",res.data.token)
                        var path = this.$route.query.redirect || '/' //从哪来到那去
                        console.log(path)
                        this.$router.push({path})
                    }else if(res.data.msgCode==0){
                        alert(res.data.result)
                    }else if(res.data.msgCode==2){
                        alert(res.data.result)
                    }
                })
            },
            changePwd(){
                axios.get("/api/changepwd?username="+this.uname+"&password="+this.pswd+"&newpassword="+this.newpswd).then(res=>{
                    console.log(res)
                    if(res.data.msgCode ==1){
                         window.localStorage.setItem("token",res.data.token)
                         window.localStorage.setItem("loginState",true)
                         var path = this.$route.query.redirect || '/' //从哪来到那去
                         console.log(path)
                         this.$router.push({path})
                         
                    }else{
                        alert(res.data.result)
                    }
                })
            },
            loginout(){
                window.localStorage.setItem("token",res.data.token)
                this.$router.push({path:"/login"})
            }
        },
        mounted(){
            this.unInitial = window.localStorage.getItem("loginState")
        } 
    }
</script>
<style scoped>
    .login-page{
        width:100%;
        height:100%;
        background:url(../../assets/loginBg.jpg);
        float: left;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size:contain;
        -webkit-filter: blur(15px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        filter: blur(15px);
        position:relative;
    }
    .login-box{
        position:absolute;
        width:600px;
        height:auto;
        top:50%;
        transform:translateY(-50%);
        left:50%;
        margin-left:-300px;
    }
    .login-contain{
        width: 550px;
        margin:0 auto;
    }
    .title{
        text-align:center;
        color:#70221e;
    }
    p{
        padding:18px 0;
    }
    .inp-box{
        border-radius:11px;
        background:rgba(112,34,30,0.8);
        padding:0 30px;
        color:white;
    }
    .inp-box p{border-bottom:1px solid white;}
    .inp-box p:last-child{border:none;}
    .inp-box input{
        background:none;
        font-size:26px;
        border:none;
        outline:none;
    }
    .submit-btn{
        margin-top:36px;
        text-align:center;
        cursor:pointer;
    }
    .submit-btn{

    }
</style>
