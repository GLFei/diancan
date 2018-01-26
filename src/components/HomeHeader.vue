<template>
  <div class = 'home-header'>
    <ul class = 'home-header-items'>
      <li class = 'home-header-item-btn'>
        <router-link to="/">
          <p>老封酒家</p>
          <p class="logo-en">Old Feng Restaurant</p>
        </router-link>
      </li>
      <li class="home-header-title">
        <span>20桌</span>
      </li>
      <li class="home-header-search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="查找菜品"/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'f-homeheader',
  props: {
    title: {
      type: String,
      default: '头部'
    }
  }
}
</script>
<style>
  .home-header{
    height:80px;
    background:#742828;
    width:100%;
  }
  .home-header-items{
    display:flex;
    text-align:center;
    align-items:center;
    height:50px;
    padding:15px 15px 15px 0;
  }
  .home-header-item-btn{
    width:200px;
  }
  .home-header-item-btn a{
    color:white;
  }
  .logo-en{
    font-size:12px;
  }
  .home-header-title{
      flex:1;
  }
  .home-header-search{
    width:300px;
    height:35px;
    background:white;
    border-radius:17px;
  }
  .home-header-search input{
    border:none;
    outline:none;
    font-size:16px;
    margin-left:-50px;
  }

</style>
