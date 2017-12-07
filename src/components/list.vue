<template>
    <div class="list">
        <div>
          <slot name="a"></slot>
          <slot name="b"></slot>
          <slot name="c"></slot>
        </div>
      <ul type="none">
        <li v-for=" a in arr">
          <img class="img" :src="a.url" alt="">
          <p class="p">{{a.txt}}</p>
        </li>

      </ul>




    </div>
</template>
<script>
export default {

  data:function () {
    return{
      arr:[{txt:'低价机票',url:require('../assets/images/icon/ltbtn0323_08.png')},{txt:'汽车票',url:require('../assets/images/icon/ltbtn0323_08.png')},{txt:'火车票',url:require('../assets/images/icon/ltbtn0323_08.png')},{txt:'专车',url:require('../assets/images/icon/ltbtn0323_08.png')}]
    }
  }
}
</script>
<style>
  .list{
    width: 100%;

  }
  .list > div{
    width: 30%;
    float: left;
    height: 6rem;
  }
  .list > div > img{
    width: 100%;
    height: 100%;
    margin-top: 0rem;
  }
  .list > ul{
    width: 70%;
    margin-left: 30%;
    height: 6rem;
    margin-bottom:1rem ;

  }
  .list > ul > li{
     float: left;
     width:45%;
     margin-left: 5%;
     height: 2.8rem;
    color: white;
    font-size: 16px;
  }
 .list .img{
   float: left;
 }
 .list .p{
   width: 50%;
   margin-left: 2rem;
   line-height: 2.8rem;
   font-size: 12px;
 }
  .list>ul>li:nth-child(1){
   background-color: orange;
   margin-bottom: 0.5rem;
 }
  .list> ul>li:nth-child(2){
    background-color: orange;
    margin-bottom: 0.5rem;
  }
  .list>ul>li:nth-child(3){
    background-color: pink;

  }
  .list> ul>li:nth-child(4){
    background-color: plum;

  }
</style>
