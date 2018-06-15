import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  //base:"/pc/",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/page/index'],resolve)
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: resolve => require(['@/page/aboutUs'],resolve)
    },
    {
      path: '/GAIAExplorer',
      name: 'GAIAExplorer',
      component: resolve => require(['@/page/GAIAExplorer'],resolve)
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: resolve => require(['@/page/wallet'],resolve)
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/page/news'],resolve)
    },
    {
      path: '/news/:id',
      name: 'newsDetail',
      component: resolve => require(['@/page/newsDetail'],resolve)
    },
    {
      path: '/whitePaper',
      name: 'whitePaper',
      component: resolve => require(['@/page/whitePaper'],resolve)
    },
    {
      path: '/routeMap',
      name: 'routeMap',
      component: resolve => require(['@/page/routeMap'],resolve)
    },
    {
      path: '/candyPromotionStep1',
      name: 'candyPromotionStep1',
      component: resolve => require(['@/page/candyPromotionStep1'],resolve)
    },
    {
      path: '/candyPromotionStep2',
      name: 'candyPromotionStep2',
      component: resolve => require(['@/page/candyPromotionStep2'],resolve)
    },
    {
      path:'/404',
      name:'404',
      component:resolve => require(['@/page/page404'],resolve)
    },
    {
      path:'*',
      name:'all',
      component:resolve => require(['@/page/page404'],resolve)
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
