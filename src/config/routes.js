import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from "../view/home"
import Team from "../view/team"
import Tech from "../view/tech"
import Us from "../view/us"
import Whitepaper from "../view/whitepaper"


import BitApp from "../view/bit/bitApp";
import BitPage from "../view/bit/bitPage";
import BitGame from "../view/bit/bitGame";
import BitJoy from "../view/bit/bitJoy";

/** nav路由 */
const navRoutes = [{
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'team',
    path: '/team',
    component: Team
  },
  {
    name: 'tech',
    path: '/tech',
    component: Tech
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
  }
]

const bitRoutes = [{
  name: 'bit-app',
  path: '/bit/app',
  component: BitApp
},{
  name: 'bit-page',
  path: '/bit/page',
  component: BitPage
},{
  name: 'bit-game',
  path: '/bit/game',
  component: BitGame
},{
  name: 'bit-joy',
  path: '/bit/joy',
  component: BitJoy
},{
  name: 'bit-app',
  path: '/bit/app',
  component: BitApp
},]

const routes = [...navRoutes,...bitRoutes]

const router = new VueRouter({
  routes: routes
})

export default router;
