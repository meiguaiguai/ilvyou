<template>
  <div>
    <Ll>
      <div slot="left"> < </div>
      <h3 slot="h3">
        浏览历史
      </h3>
      <div slot="right">清空 </div>
    </Ll>
    <p>
      今天
    </p>
    <div class="fllist">

      <div class="left">
        <Lllist></Lllist>
        <div class="sx"></div>
        <Lllist></Lllist>
        <div class="sx"></div>
        <Lllist></Lllist>

      </div>
      <div class="right">
        <div v-for="item in arra">
          <p>
            <i>{{item.text}}</i>

            <br>
            <span>{{item.price}}</span>元起
          </p>
          <img :src="item.url" alt="">
        </div>


      </div>
    </div>
    <p>
      昨天
    </p>
    <div class="fllist">
      <div class="left">
        <Lllist></Lllist>
      </div>
      <div class="right">
        <div v-for="item in arrb">
          <p>
            <i>{{item.text}}</i>

            <br>
            <span>{{item.price}}</span>元起
          </p>
          <img :src="item.url" alt="">
        </div>


      </div>
    </div>
    <p>
      前天
    </p>
    <div class="fllist">

      <div class="left">
        <Lllist></Lllist>
        <div class="sx"></div>
        <Lllist></Lllist>


      </div>
      <div class="right">
        <div v-for="item in arrc">
          <p>
            <i>{{item.text}}</i>
            <br>
            <span>{{item.price}}</span>元起
          </p>
          <img :src="item.url" alt="">
        </div>


      </div>
    </div>
  </div>
</template>
<script>
  import Ll from '../components/header1.vue'
  import Lllist from  '../components/lllist.vue'
  export default {
    components:{
      Ll,Lllist
    },
    data:function () {
      return{
        arra:[{text:'云南昆明+大理+丽江+西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_03.jpg')},{text:'海南三亚六日五晚跟团游西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_06.jpg')},{text:'云南昆明+大理+丽江+西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_08.jpg')}],
        arrb:[{text:'云南昆明+大理+丽江+西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_03.jpg')}],
        arrc:[{text:'云南昆明+大理+丽江+西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_03.jpg')},{text:'海南三亚六日五晚跟团游西双版纳8日七晚跟团游.享四飞经典套餐',price:'￥2699',url:require('../assets/images/img/history-lis0421_06.jpg')}]
      }
    },
    methods:{
      backa:function () {
        this.$router.push('/a')
      }
    }
  }
</script>
<style>
  .fllist {
    display: flex;
  }
  .fllist > .left > .sx{
    height: 5rem;
    width: 3px;
    background-color: #bebebe;
    margin-left: 1.3rem;
  }
  .fllist > .right{
    width: 90%;
    margin-left: 0.5rem;

  }

  .fllist > .right > div{
    display: flex;
    background-color: #efefef;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0.5rem;


  }
  .fllist > .right > div:nth-child(1){
    margin-top: 0;
  }
  .fllist > .right > div > img{
    border-radius: 10px;
    /*width: 100%;*/

  }
  .fllist > .right > div > p > i{
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }
  .fllist > .right > div > p > span{
    color: orange;
  }
</style>
