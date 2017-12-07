<template>
   <div class="lylb">
     <div>
       <!--<img src="../assets/images/img/list_0411_03.jpg" alt="">-->
       <slot name="img"></slot>
     </div>
     <div>
          <p>
            【宿古北之光】古北之光2日1晚跟团
          </p>
       <p>
         <i>无购物</i><i>无自费</i><i>爸妈放心游</i>
       </p>
       <p>
         <i>北京出发</i>5星古北之光温泉酒店住宿
       </p>
       <p>班期：每周四、五、六、日</p>
       <p><i>￥2699</i>256人出游 <i>69人点评</i>  <i>5分</i></p>
     </div>
   </div>
</template>
<script>

</script>
<style>
  .lylb{
     display: flex;
     justify-content: space-between;
    font-size: 16px;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    margin-top: 1rem;
  }
  .lylb>div:nth-child(1){
     width: 30%;
  }
  .lylb>div:nth-child(1) >img{
    width: 100%;
    margin-left: 0.3rem;
  }
  .lylb>div:nth-child(2){
    width: 70%;
    margin-left: 0.5rem;
  }
  .lylb>div:nth-child(2) i{
    font-style: normal;
  }
  .lylb>div:nth-child(2)>p:nth-child(1),.lylb>div:nth-child(2)>p:nth-child(3){
   text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

  }
  .lylb>div:nth-child(2)>p:nth-child(2)>i{
    border: 1px solid #7c7c7c;
    margin-left: 0.5rem;

  }
  .lylb>div:nth-child(2)>p:nth-child(2)>i:nth-child(3){
    border: none;
    background-color: #2C8DFB;
    color: white;
  }
  .lylb>div:nth-child(2)>p:nth-child(3)>i{
    color: #34fb72;

  }
  .lylb>div:nth-child(2)>p:nth-child(5)>i:nth-child(1){
    color: orange;
    font-size: 20px;
    margin-right: 0.2rem;
  }
  .lylb>div:nth-child(2)>p:nth-child(5)>i:nth-child(3){
    background-color: #ddd;
    border: 1px solid #a8a8a8;
  }
</style>
