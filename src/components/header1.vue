<template>
  <div id="dingdan">
    <slot name="left"></slot>
    <!--<h3>-->
    <!--</h3>-->
    <slot name="h3">

    </slot>
    <slot name="right"></slot>

  </div>
</template>
<script>
  import Btn from '../components/btn.vue'
  export default {
    components:{
      Btn
    }
  }
</script>
<style>
  #dingdan{
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to top, rgba(70, 142, 255, 0.84),#2C8DFB);
    color: white;
    height: 2.5rem;
    line-height: 2.5rem;
  }


</style>
