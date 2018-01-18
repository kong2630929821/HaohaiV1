<template>
  <div id="app">
    <global-header></global-header>
    <router-view></router-view>
    <!-- <global-footer></global-footer> -->
  </div>
</template>

<script>

import globalHeader from './components/globalHeader';
import globalFooter from './components/globalFooter';


export default {
  name: 'app',
  components:{
    globalHeader,
    globalFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
a {
  text-decoration-line: none;
  color:black;
}
</style>
