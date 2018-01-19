import Vue from 'vue'
import App from './App.vue'


// 引入路由
import router from './config/routes';

// 引入全局组件
import registerGlobalCom from './config/globalCom';

// 引入全局样式
import './css/reset.css';
import './css/layout.css';
import './css/global.css';
import './css/btn.css';
import './css/table.css';
registerGlobalCom();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
