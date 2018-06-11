// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
let isMobile = navigator.userAgent.indexOf("Mobile") >= 0;
let href = location.href;
if (isMobile) {
  if(href.indexOf("pc") > -1){
    location.href = href.replace("pc","phone");
  }
} else {
  if(href.indexOf("phone") > -1){
    location.href = href.replace("phone","pc");
  }
}
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
