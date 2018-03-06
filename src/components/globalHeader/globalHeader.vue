<template>
  <nav class="global-nav">
    <section class="global-nav-container container layout y-center">
      <figure @click="gotoHome" class="logo">
        <imgs src="logo.png"></imgs>
      </figure>
      <ul class="menu">
        <li  v-for="(item,index) of menuItems" :key="index">
          <router-link v-if="!item.forbidden" :to="{name:item.route,params:item.params}">{{item.text}}</router-link>
          <a style="color:#9e9e9e;cursor:not-allowed;" v-else>{{item.text}}</a>
        </li>
        <li class="li" @click="showMenu">
          中
          <ul :class="{'language-menu':menuIsShow,'language-menu-hidden':!menuIsShow}">
            <li  @click="changeLanguage('zh')">中</li>
            <li @click="changeLanguage('en')">EN</li>
          </ul>
        </li>
        <!-- <li>注册</li>
        <li><section class="btn-nav">登录</section></li> -->
      </ul>
    </section>

  </nav>
</template>

<script>
  import menuItems from './menuItems.json'

  export default {
    name: 'global-header',
    data() {
      return {
        menuItems,
        menuIsShow: false
      }
    },
    methods: {
      gotoHome() {
        this.$router.push({
          name: 'home'
        })
      },
      showMenu() {
        this.menuIsShow = !this.menuIsShow;
      },
      changeLanguage(lang) {
        let url = location.href;
        url = url.replace(/\/zh\//, `/${lang}/`)
        location.href = url;
      }
    }
  }

</script>

<style scoped>
  .global-nav {
    height: 180px;
    position: absolute;
    z-index: 15;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .global-nav-container {
    height: 100%;
    justify-content: space-between;
  }

  .logo {
    height: 80%;
    width: 180px;
    color: #fff;
    font-size: 42px;
    line-height: 144px;
    text-align: center;
    cursor: pointer;
  }
  /* 菜单 */

  .menu {
    display:flex;
  }

  .menu,
  .menu>li {
    height: 100%;
    line-height: 100%;
  }

  .menu>li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 19px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    flex:1 1 auto;
  }

  .menu>li a {
    color: #fff;
  }



  .language-menu {
    height: 5em;
    width: 50px;
    background-color: #2b79cc;
    position: absolute;
    top: 120px;
    right: 0px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .language-menu li {
    width: 100%;
    text-align: center;
    flex: 1 0 auto;
    text-align: center;
  }

  .language-menu li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .language-menu-hidden {
    display: none;
  }

</style>
