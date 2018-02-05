<template>
    <el-container>
        <el-header class="el-header">
            <f-homeheader> </f-homeheader>
        </el-header>
        <el-container>
            <el-aside width="200px">
               <f-aside></f-aside>
            </el-aside>
            <el-container>
                <el-main style="color:#333">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        name: 'f-container',
        data () {
            return {
            }
        }
     }
</script>
<style>
    .el-header{
        padding:0;
        height:80px !important;
    }
    .el-main{
        padding:0;
    }
</style>