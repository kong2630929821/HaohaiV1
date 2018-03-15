<template>
  <nav class="global-nav">
    <section class="global-nav-container container layout y-center">
      <figure @click="gotoHome" class="logo">
        <imgs src="logo.png"></imgs>
      </figure>
      <ul class="menu" :class="{'menu-closed':!menuOpened}">
        <li @click="menuOpened=false" v-for="(item,index) of menuItems" :key="index">
          <router-link v-if="!item.forbidden" :to="{name:item.route,params:item.params}">{{item.text}}</router-link>
          <a style="color:#9e9e9e;cursor:not-allowed;" v-else>{{item.text}}</a>
        </li>
        <li class="li" :class="{'li-language-menu':langMenuIsShow}" @click="showMenu">
          <span class="lang-words">中</span>
          <span class="lang-words-short">语言</span>
          <transition name="fade" :duration="500">
            <ul v-if="langMenuIsShow" :class="{'language-menu':langMenuIsShow,'language-menu-hidden':!langMenuIsShow}">
              <li @click="changeLanguage('zh')">中</li>
              <li @click="changeLanguage('en')">EN</li>
            </ul>
          </transition>
        </li>
        <!-- <li>注册</li>
        <li><section class="btn-nav">登录</section></li> -->
      </ul>
      <aside @click="menuOpened = !menuOpened" class="menu-icon">
        <imgs v-show="menuOpened" style="height:2.5em" src="nav-close"></imgs>
        <imgs v-show="!menuOpened" style="height:2.5em" src="nav-menu"></imgs>
      </aside>
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
        langMenuIsShow: false,
        menuOpened: false
      }
    },
    methods: {
      gotoHome() {
        this.$router.push({
          name: 'home'
        })
      },
      showMenu() {
        this.langMenuIsShow = !this.langMenuIsShow;
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


  /* 屏幕比较大时 */

  @media screen and (min-width: 1101px) {
    .logo {
      height: 80%;
      width: 180px;
      color: #fff;
      font-size: 42px;
      line-height: 144px;
      text-align: center;
      cursor: pointer;
    }

    .global-nav-container {
      height: 100%;
      justify-content: space-between;
    }

    .menu,
    .menu>li {
      height: 100%;
      line-height: 100%;
    }

    .menu-icon {
      display: none;
    }

    .lang-words-short {
      display: none;
    }

    .menu>li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 12px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      position: relative;
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
  }

  /* 屏幕hin小的时候 */

  @media screen and (max-width: 1100px) {
    .global-nav {
      height: 180px;
      z-index: 15;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .global-nav-container {
      height: 100%;
      justify-content: space-between;
      background-color: #003874;
    }

    .logo {
      padding-left: 1em;
      height: 80%;
      width: 180px;
      color: #fff;
      font-size: 42px;
      line-height: 144px;
      text-align: center;
      cursor: pointer;
    }

    .lang-words {
      display: none;
    }

    .menu {
      position: absolute;
      top: 180px;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: #003874;
      width: 100%;
    }

    .menu-closed {
      display: none;
    }

    .menu>li {
      height: 3.5em;
      line-height: 3.5em;
      display: inline-flex;
      padding-left: 1.5em;
      margin: 0 12px;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
      position: relative;
      flex-direction: column;
    }

    .menu>li a {
      color: #fff;
    }


    .language-menu {
      height: 5em;
      width: 100%;
      padding-left: 2em;
      color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .language-menu li {
      width: 100%;
      text-align: center;
      flex: 1 0 auto;
      display: flex;
      align-items: center;
    }


    .language-menu-hidden {
      display: none;
    }

    .menu-icon {
      padding-right: 3em;
    }

    .li-language-menu {
      height: 10.5em !important;
      flex-direction: column;
    }

    .fade-enter-active {
      animation: slideOpen 0.3s;
    }

    .fade-leave-active {
      animation: slideClose 0.3s;
    }

    .fade-leave-to {
      opacity: 0;
    }

    .fade-enter,
    .fade-leave-to/* .fade-leave-active below version 2.1.8 */
    {}

    @keyframes slideOpen {
      0% {
        transform: scale(1, 0);
        transform-origin: top center;
      }
      100% {
        transform-origin: top center;
        transform: scale(1, 1)
      }
    }

    @keyframes slideClose {
      0% {
        transform: scale(1, 1);
        transform-origin: top center;
      }
      80% {
        opacity: 1;
      }
      100% {
        transform-origin: top center;
        transform: scale(1, 0);
        opacity: 0;
      }
    }
  }

</style>
