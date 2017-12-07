<template>
  <div id="d">
       <div class="head">
         <!--<router-link to="/a">-->
          <span @click="fnn"> < </span>
         <!--</router-link>-->
         <h2>个人</h2>
       </div>
    <router-link to="/login">
       <div class="tx">

       </div>
    </router-link>
    <div class="title">
    <h2>您好，旅客</h2>
    <p>世界很大抬脚出去荡~</p>
    </div>
    <div class="yh">
      <div class="left">
         <p>￥<span>50</span></p>
          <p>红包优惠券</p>
      </div>
      <div class="right">
        <p><span>1000</span>分</p>
        <p>积分</p>
      </div>
    </div>
    <div class="listd">
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
    <div class="listd listdd">
      <span @click="ding">全部订单</span>
      <span>待付款</span>
      <span>未出行</span>
      <span>待点评</span>
    </div>


      <Ge text="我的相册">
      <div class="icona" slot="icona">

      </div>
    </Ge>


    <Ge text="我的行程">
      <div class="iconb" slot="icona">

      </div>
    </Ge>
    <Ge text="我的游记">
      <div class="iconc" slot="icona">

      </div>
    </Ge>
    <Ge text="我的财富" class="last">
      <div class="icond" slot="icona">
      </div>
    </Ge>

  </div>
</template>
<script>
import Ge from '../components/geren.vue'
export default {
  components:{
    Ge
  },
  methods:{
    fnn:function () {
      this.$router.push('/a');
    },
    ding:function () {
      this.$router.push('/one');

    }
  }

}
</script>
<style>
#d >.head{
     width: 100%;
     height: 8rem;
     background: linear-gradient(to top, rgba(70, 142, 255, 0.84),#2C8DFB);
     color: white;

}
#d >.head > span{
  font-size: 30px;
}
#d >.head> h2{
  display: inline-block;
  line-height: 5rem;
  width: 80%;
  text-align: center;
}
 #d .tx{
    width: 150px;
    height: 150px;
   border: 5px solid #b4b4b4;
    margin: -2rem auto;
   border-radius: 50%;
    background-color: rgb(157, 157, 157);
    background-image: url("../assets/images/icon/sprites.png");
   background-position: -485px -785px;

  }
  #d > .title{
    width: 100%;
       margin-top: 2rem;
      line-height: 3rem;
  }
#d > .title > h2,#d > .title > p{
  text-align: center;
  font-weight: normal;

}
  .yh{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
.yh > .left,.yh > .right{
   width: 50%;
}
.yh > .left{
  border-right: 1px dashed #000000;
}
.yh > .left >p,.yh > .right>p{
  text-align: center;
}
.yh > .left >p > span,.yh > .right>p>span{
  font-size: 30px;
}
  #d .listd{
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
#d .listdd{
  margin-top: 0.5rem;
}
#d .listd >div{
  width: 70px;
  height: 100px;
}

#d .listd >div:nth-child(1){
  background: url("../assets/images/icon/sprites.png") -42px -702px;
}
#d .listd >div:nth-child(2){
  background: url("../assets/images/icon/sprites.png") -154px -706px;
}
#d .listd >div:nth-child(3){
  background: url("../assets/images/icon/sprites.png") -266px -706px;
}
#d .listd >div:nth-child(4){
  background: url("../assets/images/icon/sprites.png") -383px -706px;
}
.icona,.iconb,.iconc,.icond{
  width: 80px;
  height: 80px;
  background: url("../assets/images/icon/sprites.png") -42px -834px;
}
.iconb{
  background-position: -156px -834px;
}
.iconc{
  background-position: -268px -834px;
}
.icond{
  background-position: -386px -834px;
}
  #d .last{
    margin-bottom: 3rem;
  }
  #d .head a{
    font-size: 30px;
  }
</style>
