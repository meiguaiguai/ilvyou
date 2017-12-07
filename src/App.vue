<template>
  <div id="app">
    <footer>
     <router-link v-for="it in arr" :index="it.index" :to="it.ura" @click.native="fn(it.ura)">
        <Item :text="it.text" :flag="select==it.ura">
          <img slot="img1" :src="it.url" alt="" v-show="!(select==it.ura)">
          <img slot="img2" :src="it.urla" alt="" v-show="select==it.ura">
        </Item>
     </router-link>
    </footer>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import Item from './components/item.vue'
export default {
  name: 'app',
  data:function () {
    return{
      arr:[{text:'首页',url:require('./assets/images/icon/footer_0322_05.png'),urla:require('./assets/images/icon/footer_0322_01.png'),ura:'/a'},
            {text:'目的地',url:require('./assets/images/icon/footer_0322_06.png'),urla:require('./assets/images/icon/footer_0322_02.png'),ura:'/b'},
        {text:'浏览历史',url:require('./assets/images/icon/footer_0322_07.png'),urla:require('./assets/images/icon/footer_0322_03.png'),ura:'/c'},
        {text:'个人',url:require('./assets/images/icon/footer_0322_08.png'),urla:require('./assets/images/icon/footer_0322_04.png'),ura:'/d'}
      ],
      select:'/'

    }

  },
  mounted:function () {
    if(window.location.hash.substr(1)=='/'){
      this.select=='/a'

    }else{
      this.select=window.location.hash.substr(1,2)
    }

  },
  updated:function () {
    if(window.location.hash.substr(1)=='/'){
      this.select=='/a'

    }else{
      this.select=window.location.hash.substr(1,2)
    }

  },
  methods:{
    fn:function (val) {
      this.select=val;
    }
  },
  components:{
    Item
  },

}
</script>

<style>
#app > footer{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(212, 212, 212, 0.47);
  z-index:2;

}
  a{
    text-decoration: none;

  }
</style>
