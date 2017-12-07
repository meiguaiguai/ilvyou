<template>
  <div id="c">
    <div class="head">

      <div>

        <div class="left">
          <div class="icon">
          </div>
          <span>北京</span>
        </div>
        <div class="right">
          <img src="../assets/images/icon/galss_03.png" alt="">
          <input type="text" placeholder="目的地/关键词">
        </div>


      </div>
    </div>
    <Lunbo>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/travel-banner01.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/travel-banner02.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/travel-banner03.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/travel-banner04.jpg" alt=""></div>
    </Lunbo>
    <div class="listc">
      <div>
        <img src="../assets/images/icon/ltbtn0323_03.png" alt="">
      </div>

      <div>
        <img src="../assets/images/icon/ltbtn0323_13.png" alt="">
      </div>
      <div>
        <img src="../assets/images/icon/ltbtn0323_06.png" alt="">

      </div>
      <div>
        <img src="../assets/images/icon/ltbtn0323_08.png" alt="">
      </div>
    </div>
    <div class="lj">

      <div class="left">
        <router-link to="/tourlist">
          <img src="../assets/images/img/travel-show_01.jpg" alt="">
        </router-link>
      </div>

      <div class="right">
        <img src="../assets/images/img/travel-show_02.jpg" alt="">
      </div>
    </div>
    <div class="lj">
      <div class="right">
        <img src="../assets/images/img/travel-show_02.jpg" alt="">
      </div>
      <div class="left">
        <img src="../assets/images/img/travel-show_01.jpg" alt="">
      </div>

    </div>

    <div class="cjy">
      <div></div>
      <span>出境游</span>
      <img src="../assets/images/img/travel-look0401_01.png" alt="">
    </div>


    <Jiaoso>
      <img slot="leftimg" src="../assets/images/img/guonei0407_03.jpg" alt="">
      <img slot="rightimg" src="../assets/images/img/guonei0407_05.jpg" alt="">
    </Jiaoso>
    <Jiaoso>
      <img slot="leftimg" src="../assets/images/img/guonei0407_09.jpg" alt="">
      <img slot="rightimg" src="../assets/images/img/guonei0407_10.jpg" alt="">
    </Jiaoso>

    <Jiaoso>
      <img slot="leftimg" src="../assets/images/img/guonei0407_13.jpg" alt="">
      <img slot="rightimg" src="../assets/images/img/guonei0407_14.jpg" alt="">
    </Jiaoso>
    <div class="clear">
      <p>aaa</p>
    </div>

  </div>
</template>
<script>
  import Lunbo from '../components/lunbo.vue'
  import Jiaoso from '../components/jiasao.vue'

  export default {
    components: {
      Lunbo, Jiaoso
    },
    mounted: function () {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: 2000,

// 如果需要分页器
        pagination: '.swiper-pagination',


      });


    },


  }
</script>
<style>
  #c > .head {
    width: 100%;
    height: 5rem;
    background-color: #252dff;
    overflow: hidden;
  }

  #c > .head > div {
    width: 90%;
    height: 3rem;
    border: 1px solid white;
    border-radius: 30px;
    margin: 0.5rem 5%;

  }

  #c .icon {
    width: 32px;
    height: 32px;
    background: url("../assets/images/icon/sprites.png") -615px -261px;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  #c span {
    margin-top: 0.6rem;
    color: white;

  }

  #c .head > div {
    display: flex;
    justify-content: flex-start;
  }

  #c .head .right {
    margin-left: 0.5rem;
    border-left: 1px solid #ddd;
    overflow: hidden;
  }

  #c .head .right img {
    vertical-align: middle;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  #c .head .right input {
    height: 2.8rem;
    border: none;
    outline: none;
    width: 60%;

    background-color: transparent;

  }

  #c .head .right input::-webkit-input-placeholder {
    color: #ddd;
    font-size: 16px;

  }

  #c .head .left {
    width: 6rem;
    display: flex;
    justify-content: space-between;
  }

  #c .listc {
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
  }

  #c .listc > div {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  #c .listc > div:nth-child(1) {
    background-color: rgba(76, 165, 255, 0.55);
  }

  #c .listc > div:nth-child(2) {
    background-color: orange;
  }

  #c .listc > div:nth-child(3) {
    background-color: rgba(221, 81, 32, 0.79);
  }

  #c .listc > div:nth-child(4) {
    background-color: rgba(0, 226, 0, 0.47);
  }

  #c .listc > div > img {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  #c .lj {
    display: flex;
    justify-content: space-between;
    width: 100%;

  }

  #c .lj > .left {
    width: 60%;
  }

  #c .lj > .left img {
    width: 100%;
  }

  #c .lj > .right {
    width: 40%;
  }

  #c .lj > .right > img {
    width: 100%;
    height: 100%;

  }

  #c .cjy {
    margin-top: 2rem;

    display: flex;
    justify-content: flex-start;
  }

  #c .cjy span {
    color: #007aff;
    font-size: 30px;
    margin-top: -0.5rem;
  }

  #c .cjy > div {
    width: 50px;
    height: 50px;
    background: url("../assets/images/icon/sprites.png") -475px -268px;

  }

  #c .cjy img {
    height: 2rem;
  }
</style>
