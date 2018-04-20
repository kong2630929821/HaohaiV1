<template>
  <header :class="headerBg">
      <img src="../../static/image/logo.png" class="logo-img">
      <ul class="nav-menu">
          <router-link 
            v-for="(menuItem,index) in $t('headerMenu')" 
            :key="index" 
            :to="menuItem.link"
            :class="menuItem.children ? 'menu-item ignore-menu-item has-children' : 'menu-item ignore-menu-item'" 
            active-class="active"
            :exact="menuItem.link === '/' ? true : false"
            :target="menuItem.link === '/whitePaper' ? '_blank' : ''"
            >
                <li >
                    {{menuItem.text}} <img src="../../static/image/triangular.png" v-if="menuItem.children">
                    <ul v-if="menuItem.children" :class="'sub-menu ignore-sub-menu sub-menu-' + menuItem.children.length">
                        <router-link to="/"  v-for="(subMenuItem,index) in menuItem.children" :key="index" class="sub-menu-item ignore-sub-menu-item">
                            <li >{{subMenuItem.text}}</li>
                        </router-link>
                    </ul>
                </li>
          </router-link>
      </ul>
      <div class="switch-lang-btn ignore-switch-lang-btn">
          {{$t('langSwitch.locale')}}<img src="../../static/image/triangular.png" class="ignore-triangular">
          <ul :class="'ignore-switch-lang switch-lang-' + $t('langSwitch.langs').length">
              <li v-for="(item,index) in $t('langSwitch.langs')" :key="index" class="switch-lang-item ignore-switch-lang-item" @click="switchLang(item.lang)"><span>{{item.text}}</span></li>
          </ul>
      </div>
  </header>
</template>

<style scoped>
header{
    width: 100%;
    font-family: 'PingFangSC-Light';
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px 0 45px;
    position: fixed;
    top: 0;
    z-index: 999;
}
.header-bg-1{
    background: rgba(61,107,193,0.80);
}
.header-bg-2{
    background: rgba(250,250,250,0.95);
}
.logo-img{
    width: 213px;
    height: 50px;
}
.nav-menu{
    margin-left: 39px;
    flex: 1 0 0;
    display: flex;
    align-items: center;
}

.ignore-menu-item,
.ignore-sub-menu-item,
.ignore-switch-lang-btn,
.ignore-switch-lang-item{ 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B0B2C3;
    position: relative;
    cursor: pointer;
}

.ignore-menu-item:after,
.ignore-sub-menu-item:after,
.ignore-switch-lang-item:after{
    content: " ";
    width: 0px;
    height: 1px;
    background: #1A70DD;
    position: absolute;
    top: 39px;
    transition: all .2s linear;
}

:not(.has-children).ignore-menu-item:hover:after,
.ignore-sub-menu-item:hover:after,
.ignore-switch-lang-item:hover:after{
    width: 100px;
}
.sub-menu{
    background: rgba(250,250,250,0.95);
    position: absolute;
    height: 0px;
    overflow: hidden;
    transition: all .2s linear;
}
.ignore-menu-item:hover .sub-menu-1{
    height: 40px;
}
.ignore-menu-item:hover .sub-menu-2{
    height: 80px;
}
.ignore-menu-item:hover .sub-menu-3{
    height: 120px;
}
.ignore-sub-menu{
    left: 0;
    top: 40px;
}
.ignore-menu-item,
.ignore-sub-menu-item,
.ignore-switch-lang-btn{
    font-size: 16px;
    width: 100px;
    height: 40px;
    line-height: 22px;
}

.ignore-switch-lang{
    position: absolute;
    top: 40px;
    left: 0;
    overflow: hidden;
    height: 0;
    transition: all .2s linear;
}
.ignore-switch-lang-item{
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(250,250,250,0.95);
    
}
.ignore-switch-lang-btn:hover .switch-lang-1{
    height: 40px;
}
.ignore-switch-lang-btn:hover .switch-lang-2{
    height: 80px;
}
.ignore-triangular{
    margin-left: 3px;
    margin-top: 2px;
    transition: all .2s linear;
}
.ignore-switch-lang-btn:hover .ignore-triangular{
    transform: rotate(180deg)
}
.active{
    color: #1A6BD3;
}
</style>
<script>
export default {
    props:['headerBg'],
    methods:{
      switchLang(lang){
          this.$i18n.locale = lang;
      }
  }
}
</script>

