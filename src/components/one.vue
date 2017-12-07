<template>
  <div class="one">
    <Ding>
       <div slot="left" @click="back"> < </div>
       <div slot="right"> 手机查单 </div>
    </Ding>
    <div class="price">
      <div>
        <div>
          <img src="../assets/images/icon/order0424.png" alt="">
          <span>三亚五日四晚半自助游</span>
        </div>
        <span>￥6512</span>
      </div>
      <div>
        <div>
          <img src="../assets/images/icon/order0424.png" alt="" style="visibility:hidden">
          <span>12-23至12-27</span>
        </div>
        <span>未提交</span>
      </div>
      <div>
        <span>取消</span>
        <span>查看行程</span>
        <span>继续预定</span>
      </div>

    </div>
  </div>
</template>
<script>
import Ding from '../components/dingdan.vue'
  export default {
   components:{
     Ding
   },
    methods:{
      back:function () {
        this.$router.push('/d');
      }
    }
  }
</script>
<style>
.one > .price{
  width: 95%;
  margin-left: 2.5%;
  height: 8rem;
  margin-top: 1rem;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 5px;
}
.one > .price>div:nth-child(1)>div >img{
  vertical-align: middle;
}
.one > .price>div:nth-child(1){
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.one > .price>div:nth-child(1)>span{
  color: orange;
}
.one > .price>div:nth-child(2)>div >img{
  vertical-align: middle;
}
.one > .price>div:nth-child(2){
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.one > .price>div:nth-child(3){
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.one > .price>div:nth-child(3)>span{
  border: 1px solid #707070;
  font-size: 16px;
  background-color: white;
  margin-left: 1rem;
  width: 5rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 5px;
  color: #468eff;

}
</style>
