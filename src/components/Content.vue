<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'f-content',
    props: {
      type: String,
      default: '内容'
    }
  }
</script>
<style>
  .content{width:100%;height:100%;}
</style>