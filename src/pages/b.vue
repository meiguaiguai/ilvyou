<template>
  <div id="b">
    <div class="mudi">
      <span> < </span>
      <h2>
        选择目的地
      </h2>
    </div>
     <div class="inp">
         <div>
           <img src="../assets/images/icon/galss_03.png" alt="">
         </div>
       <input type="text" placeholder="春季旅游节">
     </div>
    <div class="blist">
      <router-link :to="it.url" @click.native="fn(it.url)" v-for="it in arr">
        <Item   :text="it.text">
           <div class="hot" slot="img1" v-show="!(select==it.url)">
           </div>
           <div class="hota" slot="img1" v-show="select==it.url">
           </div>
        </Item>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Item from '../components/item.vue'
  export default {
    components:{
      Item
    },
    data:function () {
       return{
          select:'/',
         arr:[{url:'/b/hot',text:'热门'},{url:'/b/gl',text:'国内'},{url:'/b/gw',text:'国外'}]
       }
    },
    methods:{
      fn:function (val) {
         this.select=val;
      }
    },
    created:function () {
        this.$router.push('/b/hot');
        this.select=window.location.hash.substr(1);
    }

  }
</script>
<style>
  #b{
    width: 100%;
  }
    #b > .mudi{
      width: 100%;
      height: 8rem;
      background-color: #232aff;
      color: white;
    }
    #b > div>span{
      width: 8%;
      font-size: 30px;
      margin-left: 1%;
    }
    #b > div > h2{
      width: 90%;
      display: inline-block;
      text-align: center;
      line-height: 5rem;
      font-weight: normal;
    }
    #b > .inp{
      width: 90%;
      margin-top: -3rem;
      border: 1px solid white;
      border-radius: 20px;
      margin-left:5%;
      height: 2.5rem;

    }
    #b > .inp > div{
      width: 10%;
      display: inline-block;
      float: left;
      margin-top: -0.2rem;
    }
    #b > .inp > div > img{
        padding: 0.5rem;
    }
    #b > .inp >input{
      width: 70%;
      height: 2.5rem;
      margin-left: 10%;

      border: none;
      outline: none;
      background-color: transparent;
    }
    #b > .inp >input::-webkit-input-placeholder{
      color: white;
      font-size: 16px;
    }
  .hot{
     width: 50px;
     height: 50px;
     background: url("../assets/images/icon/sprites.png") -455px -103px;
    margin-left: 1rem;

  }

    .hota{
      width: 50px;
      height: 50px;
      background: url("../assets/images/icon/sprites.png") -455px -181px;
      margin-left: 1rem;

    }
.blist{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2rem;
}

</style>
