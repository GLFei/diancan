<template>
  <div class = 'header'>
    <ul class = 'header-items'>
      <li class = 'header-item-btn'>{{title}}</li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'f-header',
  props: {
    title: {
      type: String,
      default: '头部'
    }
  }
}
</script>
<style>
  .header{
    background:#742828;
    width:100%;
    height:70px;
    line-height:70px;
  }
  .header-items{
    display:flex;
  }
  .header-item-btn{
    width:130px;
    text-align:center;
  }
  .header-title{
      flex:1;
  }


</style>
