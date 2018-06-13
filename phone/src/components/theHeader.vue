<template>
<header :class="menuExpansion === 1 ? ' header-bg-2 ' + headerBg : headerBg">
    <router-link to="/"><img src="../../static/phoneImage/logo.png" class="logo-img"></router-link>
    <div class="header-right-box" @click="clickMenuExpansion">
        <img 
            :src="'../../static/phoneImage/' + (menuExpansion === 1 ? '2.png' : '1.png')" 
            :class="menuExpansion === 1 ? 'menu-fold' : 'menu-unfold'">
        <div :class="menuExpansion === 0 ? 'menu-list' :(menuExpansion === 1 ? 'menu-list menu-list-show' : 'menu-list menu-list-hidden')" >
            <ul class="nav-menu">
                <li >
                <router-link 
                    v-for="(menuItem,index) in $t('headerMenu')" 
                    :key="index" 
                    :to="menuItem.link"
                    :class="menuItem.disabled ? 'menu-item menu-item-disabled' : 'menu-item'" 
                    active-class="active"
                    :exact="menuItem.link === '/' ? true : false"
                    :target="menuItem.link === '/whitePaper' ? '_blank' : ''"
                    :title="'GAIA ' + menuItem.text"
                    >
                        <span>{{menuItem.text}}</span>
                </router-link>
                </li>
            </ul>
            <ul class="langs">
                <li class="lang-item">{{$t('langSwitch.locale')}}</li>
                <li v-for="(item,index) in $t('langSwitch.langs')" :key="index" class="lang-item" @click="switchLang(item.lang)"><span>{{item.text}}</span></li>
            </ul>
        </div>
    </div>
</header>
</template>

<style scoped>
header{
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
.header-bg-2{
    background: rgba(255,255,255,0.99);
}
.logo-img{
    width: 128px;
    height: 30px;
}
.header-right-box{
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-fold,
.menu-unfold{
    width: 24px;
    height: 24px;
}
@keyframes anim {
    0% {height: 0px;}
    100% {height: calc(100vh - 50px);}
}
@keyframes anim-rervese {
    0% {height: calc(100vh - 50px);}
    100% {height: 0px;}
}
.menu-list{
    position: absolute;
    top: 50px;
    left: 0;
    height: 0;
    width: 100%;
    padding-left: 32px;
    background: rgba(255,255,255,0.99);
    transition: all .5s;
    -webkit-transition: all .5s;
    z-index: 9999;
    overflow: scroll;
}
.menu-list-show{
    animation: anim .3s linear;
    animation-fill-mode:forwards;
}
.menu-list-hidden{
    animation: anim-rervese .3s linear;
    animation-fill-mode:forwards;
}
.nav-menu{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.menu-item,
.lang-item{
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    height: 48px;
    border-bottom: 1px solid #DDDDDD;
    display: flex;
    align-items: center;
}
.menu-item-disabled{
    pointer-events:none;
    color: rgba(51,51,51,0.2);
}
.langs{
    margin-top: 22px;
}
.active{
    color: #1A6BD3;
}


</style>
<script>
import $ from 'jquery'
export default {
  data(){
      return {
          menuExpansion:0,//菜单是否展开 0 初始进入 1点击展开 2点击关闭
          headerBg:"",
          docScrollTop:0
      }
  },
  methods:{
      switchLang(lang){
          this.$i18n.locale = lang;
          document.title = this.$t('explorerTitle');
      },
      //点击菜单展开关闭
      clickMenuExpansion(){
        this.menuExpansion = this.menuExpansion === 1 ? 2 : 1;
        if(this.menuExpansion === 1){
            let doc = $(document);
            this.docScrollTop = doc.scrollTop();
        }
        if(this.menuExpansion === 1){
            $("body").css({
                position:"fixed",
                marginTop:-this.docScrollTop,
            });  
        }else{
            $("body").css({
                position:"relative",
                marginTop:0,
            });  
            window.scrollTo(0,this.docScrollTop)
        }
          
      },
      handleScroll () {
        let wH = window.innerHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop||-parseInt(document.body.style.marginTop)
        if(scrollTop == 0){
            this.headerBg = '';
        }else{
            this.headerBg = 'header-bg-2';
        }
        //alert(scrollTop);
    },
    
  },
  mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
    
  },
  
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  
}
</script>

