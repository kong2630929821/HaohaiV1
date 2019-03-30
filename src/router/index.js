import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainPage'
import Down from '@/components/Download'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/down',
      name:'down',
      component:Down
    }
  ]
})
