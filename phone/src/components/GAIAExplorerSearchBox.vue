<template>
<!--浏览器 搜索框-->
  <section class="search-for">
      <h5 class="title">{{$t('GAIAExplorerSearchFor.title')}}</h5>
      <p class="text">{{$t('GAIAExplorerSearchFor.text')}}</p>
      <div class="search-box">
          <input class="search-input" @keyup="search">
          <img class="click-img" src="../../static/phoneImage/search.png" @click="searchFor">
      </div>
      <transition name="fade">
        <div class="tips" v-show="showTips">{{$t('GAIAExplorerSearchFor.tips')}}</div>
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
    padding: 0 38px;
}
.title{
    font-size: 24px;
    color: #333333;
    text-align: center;
    line-height: 33px;
    margin-bottom: 16px;
}
.text{
    font-size: 12px;
    color: #333333;
    text-align: center;
    line-height: 17px;
    margin-bottom: 15px;
}
.search-box{
    position: relative;
    width: 100%;
}
.search-input{
    width: 100%;
    height: 42px;
    background: rgba(255,255,255,0.10);
    border: 1px solid #1A70DD;
    border-radius: 100px;
    padding: 0 60px 0 18px;
    outline: none;
}
.tips{
    font-size: 20px;
    color: #BEB7B7;
    line-height: 28px;
    margin-top: 30px;
}
.click-img{
    position: absolute;
    top: 6px;
    right: 18px;
    cursor: pointer;
    width: 28px;
    height: 28px;
}
.fade-enter-active, .fade-leave-active {
  transform: translateY(0);
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
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
      },
      search(ev){
          if(ev.keyCode==13){
              this.showTips = true;
          }
      }
  }
}
</script>

