<template>
    <el-container>
        <el-header>
            {{title}}
        </el-header>
        <el-aside>
            {{aside}}
        </el-aside>
        <el-main>
            {{msg}}
        </el-main>
    </el-container>
</template>
<script>
    export default {
        name: 'f-container',
        data () {
            return {
                title: '头',
                aside: '边',
                msg: '主'
            }
        }
     }
</script>
<style></style>