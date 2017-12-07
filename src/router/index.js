import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  A from '../pages/a.vue'
import  B from '../pages/b.vue'
import  C from '../pages/c.vue'
import  D from '../pages/d.vue'
import Hot from '../components/hot.vue'
import Gl from '../components/guonei.vue'
import Gw from '../components/guowai.vue'
import One from '../components/one.vue'
import Liulan from  '../components/liulan.vue'
import Lylist from '../components/tourlist.vue'
import Login from '../components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: A
    },{
      path: '/a',
      name: 'A',
      component: A,
      children:[{path:'/',component:Liulan}]

    },{
      path: '/b',

      component: B,
      children:[
        {path: '/', component: Hot},
        {path: 'hot', component: Hot},
        {path: 'gl', component: Gl},
        {path: 'gw', component: Gw},
      ]
    },{
      path: '/c',
      name: 'C',
      component: C
    },{
      path: '/d',
      name: 'D',
      component: D
    },{
      path: '/one',
      name: 'One',
      component: One
    },{
      path: '/liulan',
      name: 'Liulan',
      component: Liulan
    },{
      path: '/tourlist',
      name: 'Lylist',
      component: Lylist
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
