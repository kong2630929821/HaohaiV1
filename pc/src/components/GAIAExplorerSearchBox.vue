<template>
<!--浏览器 搜索框-->
  <section class="search-for">
      <h1 class="ignore-title">{{$t('GAIAExplorerSearchFor.title')}}</h1>
      <p class="ignore-text">{{$t('GAIAExplorerSearchFor.text')}}</p>
      <div class="search-box">
          <input class="ignore-search-input">
          <img class="ignore-click-img" src="../../static/pcImage/search.png" @click="searchFor">
      </div>
      <transition name="fade">
        <div class="ignore-tips" v-show="showTips">{{$t('GAIAExplorerSearchFor.tips')}}</div>
      </transition>
  </section>
</template>
<style scoped>
.search-for{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
.ignore-title{
    font-size: 36px;
    color: #333333;
    text-align: center;
    line-height: 50px;
    margin-bottom: 16px;
}
.ignore-text{
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: 22px;
    margin-bottom: 20px;
}
.search-box{
    position: relative;
}
.ignore-search-input{
    width: 650px;
    height: 42px;
    background: rgba(255,255,255,0.10);
    border: 1px solid #1A70DD;
    border-radius: 100px;
    padding: 0 60px 0 18px;
    outline: none;
}
.ignore-tips{
    font-size: 24px;
    color: #BEB7B7;
    line-height: 33px;
    margin-top: 60px;
}
.ignore-click-img{
    position: absolute;
    top: 6px;
    right: 18px;
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transform: translateY(0);
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
@media only screen and (max-width: 1199px) {
    .ignore-search-input{
        width: 600px;
    }
}
@media only screen and (max-width: 991px) {
    .ignore-search-input{
        width: 550px;
    }
    
}
</style>
<script>
export default {
  data(){
      return {
          showTips:false
      }
  },
  methods:{
      searchFor(){
          this.showTips = true;
      }
  }
}
</script>

