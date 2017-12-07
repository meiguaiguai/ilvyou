<template>
  <div class="btn">
     <!--<div>-->
     <!--</div>-->
    <slot name="btn">

    </slot>
      <p>{{text}}</p>
  </div>
</template>
<script>
  export default {
    props:['text']
  }
</script>
<style>
  .btn{
    overflow: hidden;
    display: flex;
    height: 5rem;
  }
  .btn >div{
    width: 50px;
    height: 40px;
    background: url("../assets/images/icon/sprites.png") -38px -618px;
    margin-top: 1.5rem;
  }
  .btn>p{
    line-height: 5rem;
  }
</style>
