<template>
  <div id="a">
     <div class="header">
       <div>
         <div class="search">
           <img src="../assets/images/icon/galss_03.png" alt="">
         </div>
       <input type="text" placeholder="搜索旅行地/酒店/景点">
       </div>
     </div>
    <Lunbo>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/banner1.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/banner2.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/banner3.jpg" alt=""></div>
      <div class="swiper-slide" slot="lun"><img src="../assets/images/img/banner4.jpg" alt=""></div>
    </Lunbo>
    <router-link to="/liulan">
    <List>
      <img slot="a" src="../assets/images/icon/btnlist0323_03.jpg" alt="">
    </List>
    </router-link>
    <List>
      <img slot="b" src="../assets/images/icon/btnlist0323_06.jpg" alt="">
    </List>
    <List>
      <img slot="c" src="../assets/images/icon/btnlist0323_12.jpg" alt="">
    </List>
    <div class="md"><img src="../assets/images/img/ad_0328_02.jpg" alt=""></div>
    <div class="tm">
       <div class="tmimg">

       </div>
      <span>
         特卖汇
      </span>
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
import List from '../components/list.vue'
import Jiaoso from '../components/jiasao.vue'
export default {
   components:{
     Lunbo,List,Jiaoso
   },
  mounted:function () {
    new Swiper ('.swiper-container', {
      loop: true,
      autoplay:2000,

      // 如果需要分页器
      pagination: '.swiper-pagination',


    })
  }
}
</script>
<style>
#a{
  margin-bottom: 3.5rem;
}

.header{
  width: 100%;
  height: 3rem;
  background-color: rgba(21, 21, 21, 0.8);
  overflow: hidden;
  position: fixed;
  z-index: 2;

}
.header>div{
  width: 90%;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 0.5rem 5%;
  overflow: hidden;
}
.header .search{
  margin-top: 0.3rem;
  margin-left: 0.3rem;

}
.header img{
  width: 1.5rem;
  height: 1.5rem;
}
.header input{
  height: 2rem;
  float: left;
  margin-left: 2.5rem;
  margin-top: -2rem;
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
}
  .md{
    width: 100%;
  }
.md > img{
  width: 100%;
}
.tmimg{
    width: 50px;
    height: 50px;
    background: url("../assets/images/icon/sprites.png") -377px -103px;
    display: inline-block;
    vertical-align: middle;

  }
.clear{
  width: 100%;
}
.clear p{
  line-height: 2rem;
  color: transparent;
}
</style>
