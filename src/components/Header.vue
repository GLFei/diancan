<template>
  <div class = 'header'>
    <ul class = 'header-items'>
      <li class = 'header-item-btn header-left'>
          <a href="javascript:window.history.go(-1);">{{title}}</a>
      </li>
      <li class = 'header-center'>
        <slot name="center"></slot>
      </li>
      <li class = "header-item-btn header-right">
          <slot name="right"></slot>
      </li>
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
    text-align:center;
  }
  .header-item-btn a{
    color:white;
  }
  .header-left{
    padding-left:20px;
  }
  .header-center{
      text-align:center;
      flex:1;
  }
  .header-right{
    padding-right:20px;
  }

</style>
