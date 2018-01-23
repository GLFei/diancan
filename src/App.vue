<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{margin:0;padding:0;}
html,body{
  width:100%;
  height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color:white;
  font-size:26px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  width:100%;
}
li{list-style:none;}
a{text-decoration:none;}
/*color #70221e  rgb(112,34,30)*/
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
</style>
