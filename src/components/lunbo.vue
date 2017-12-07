<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot name="lun"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import '../libs/Swiper-3.4.2/dist/js/swiper.min.js'
</script>
<style>
  @import'../libs/Swiper-3.4.2/dist/css/swiper.min.css';
  .swiper-container {
    width: 100%;


  }
  .swiper-container img{
    width: 100%;

  }
</style>
