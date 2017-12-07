<template>
  <div id="geren">
      <div class="left">
          <!--<div class="icon">-->

          <!--</div>-->
        <slot name="icona"></slot>
        <p>{{text}}</p>
      </div>
    <div class="right">
      <img src="../assets/images/icon/arrow_03.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    props:['text']
  }
</script>
<style>
  #geren {
    width: 100%;
    margin-top: 1rem;
  }
  #geren{
    display: flex;
    justify-content: space-between;
  }
  #geren > .left{
    display: flex;
  }
  #geren > .left> p{
    line-height: 80px;
  }
  /*#geren > .left >.icon{*/
    /*width: 80px;*/
    /*height: 80px;*/
    /*background: url("../assets/images/icon/sprites.png") -42px -834px;*/
  /*}*/
</style>
