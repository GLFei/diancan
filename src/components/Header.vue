<template>
  <div class = 'header'>
    <ul class = 'header-items'>
      <li class = 'header-item-btn'>&larr;<span></span></li>
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
    background:#ef191c;
    width:100%;
    height:70px;
  }
  .header-items{
    display:flex;
  }
  .header-item-btn{
    width:80px;
  }
  .header-title{
      flex:1;
  }


</style>
