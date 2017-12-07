<template>
  <div id="dingdan">
    <slot name="left"></slot>
    <h3>
      全部订单
    </h3>
    <slot name="right"></slot>
    <div class="bottom">
      <Btn text="筛选">
        <div class="btna" slot="btn"></div>
      </Btn>
      <Btn text="预定时间">
        <div class="btna btnb" slot="btn"></div>
      </Btn>
      <Btn text="有效订单">
        <div class="btna btnc" slot="btn"></div>
      </Btn>
    </div>
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
  #dingdan .bottom{
    position: fixed;
    width: 100%;
    height: 5rem;
    z-index: 99;
    left: 0;
    bottom: 0;
    background-color: rgb(157, 157, 157);
    display: flex;
    justify-content: space-between;
  }
  #dingdan .btna{
    width: 50px;
    height: 40px;
    background: url("../assets/images/icon/sprites.png") -38px -618px;
    margin-top: 1.5rem;
  }
  #dingdan .btnb{
    background: url("../assets/images/icon/sprites.png") -138px -615px;
  }
  #dingdan .btnc{
    background: url("../assets/images/icon/sprites.png") -525px -615px;
  }
</style>
