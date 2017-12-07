<template>
  <div class="re">
    <City text="上海迪士尼" texta="云南">
      <img slot="citya" src="../assets/images/img/waiguo0407_03.jpg" alt="">
      <img slot="cityb" src="../assets/images/img/waiguo0407_05.jpg" alt="">
    </City>
    <City text="厦门" texta="香港">
      <img slot="citya" src="../assets/images/img/waiguo0407_09.jpg" alt="">
      <img slot="cityb" src="../assets/images/img/waiguo0407_10.jpg" alt="">
    </City>
    <City text="法国" texta="泰国">
      <img slot="citya" src="../assets/images/img/waiguo0407_13.jpg" alt="">
      <img slot="cityb" src="../assets/images/img/waiguo0407_14.jpg" alt="">
    </City>
    <City>
      <img slot="citya" src="../assets/images/img/waiguo0407_17.jpg" alt="">
      <img slot="cityb" src="../assets/images/img/waiguo0407_18.jpg" alt="">
    </City>


  </div>
</template>
<script>
  import City from '../components/city.vue'
  export default {
    components:{
      City
    }
  }
</script>
<style>
  .re{
    position: absolute;
    top: 8rem;
    right: 0;
    width: 88%;

  }
  /*.hotclear{*/
  /*width: 18%;*/
  /*height: 35rem;*/
  /*margin-left: 50%;*/
  /*}*/

</style>
