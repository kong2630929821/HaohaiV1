import Vue from 'vue';
import VueRouter from 'vue-router';
import {eventBus} from '../bus/eventBus.js'
Vue.use(VueRouter);

console.log('eventBus',eventBus)

import Home from "../view/home"
import Team from "../view/team"
import Browser from "../view/browser";
import Us from "../view/us"
import Whitepaper from "../view/whitepaper"
import Question from "../view/question";
import About from "../view/about";
import Buy from "../view/buy";
import Purse from "../view/purse";
import RouteMap from "../view/routemap"
import News from "../view/news";
import NewsDetail from "../view/news/detail.vue"

/** nav路由 */
const navRoutes = [{
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'browser',
    path: '/browser/:type?/:search_words?',
    component: Browser
  },
  {
    name:'purse',
    path:'/purse',
    component:Purse
  },
  {
    name: 'buy',
    path: '/buy',
    component: Buy
  },
  {
    name: 'question',
    path: '/question',
    component: Question
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'team',
    path: '/team',
    component: Team
  },
  {
    name: 'us',
    path: '/us',
    component: Us
  },
  {
    name: 'whitepaper',
    path: '/whitepaper',
    component: Whitepaper
  },{
    name:'routemap',
    path:'/routemap',
    component:RouteMap
  },{
    name:'news',
    path:'/news/:page',
    component:News
  },{
    name:'newsdetail',
    path:'/newsdetail/:id',
    component:NewsDetail
  }
]



const routes = [...navRoutes]

const router = new VueRouter({
  routes: routes
})

router.afterEach((to, from) => {
  eventBus.$nextTick(()=>{
    if(to.name=='home'){
      eventBus.$emit('updateFooterPosition',true)
    }
    eventBus.$emit('updateFooterPosition',{});
  })
  
})

export default router;
