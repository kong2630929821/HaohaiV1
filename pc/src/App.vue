<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    document.title = this.$t('explorerTitle');
  }
}
</script>

<style>
@import url(./style/style);

</style>
