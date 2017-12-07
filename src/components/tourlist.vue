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
      <div class="tourlista">
         <p v-for="(item,i) in arr" @click="fn(i)" :class="{defalut:sel==i}">
           {{item}}
         </p>

      </div>
      <div class="tourlistb">
             <div class="one">
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_03.jpg" alt="">
               </Tour>
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_03.jpg" alt="">
               </Tour>
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_06.jpg" alt="">
               </Tour>
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_08.jpg" alt="">
               </Tour>
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_10.jpg" alt="">
               </Tour>
               <Tour>
                 <img slot="img" src="../assets/images/img/list_0411_12.jpg" alt="">
               </Tour>
             </div>
      </div>
    </div>
</template>
<script>
  import Tour from '../components/touralist.vue'
    export default {
      data:function () {
        return{
          arr:['全部','出发地参团','  目的地参团',' 自由行','游轮'],
          sel:-1
        }
      },
      components:{
        Tour
      },
      methods:{
        fn:function (val) {
           this.sel=val;

        }
      }


    }
</script>
<style>
  .tourlista{
    height: 3rem;
    display: flex;
    text-align: center;
    line-height: 3rem;
    justify-content: space-between;
    background-color: #ddd;
    font-size: 16px;

  }
 .defalut{
    background-color: white;
    border-top: 5px solid yellow;
  }
  .tourlistb{
    position: relative;
    margin-top: 1rem;
  }
  .tourlistb > .one{

  }
</style>
