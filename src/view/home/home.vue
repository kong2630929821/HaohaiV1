<template>
  <section class="home-container">
    <main class="home-main main-container" style="padding-bottom:0px">
      <!-- 头块 -->
      <section class="head" :style="bg">
        <section style="display:flex;justify-content:center">
          <section class="head-main">
            <h3>
              <imgs src="logo_2.png" style="height:13vh;"></imgs>
            </h3>
            <h1 style="font-size:4.5vh">区块链让世界更公平</h1>
          </section>
          <section class="top-card-container container layout x-between">

            <!-- block-1 -->
            <section class="top-card top-card-padding">
              <imgs class="top-card-bg" src="hex_1.png" />
              <section class="top-card-top">
                <h1 class="top-card-h1">竞争权益证明</h1>
              </section>
              <section class="top-card-center">
                <h1 class="top-card-title">独创秒级权益证明
                </h1>
                <p class="top-card-p2">高容错，高效率，低消耗</p>
              </section>

            </section>

            <!-- block-2 -->
            <section class="top-card">
              <imgs class="top-card-bg" src="hex_2.png" />
              <section class="top-card-top">
                <h1 class="top-card-h1">安全函数</h1>
              </section>
              <section class="top-card-bottom" style="bottom:56px">
                <h1 class="top-card-title">安全链接现实世界
                </h1>
                <h1 class="top-card-p">通过安全函数链接现实世界，跨越现实世界和区块链间的鸿沟
                </h1>
              </section>
            </section>

            <!-- block-3 -->
            <section class="top-card">
              <imgs class="top-card-bg" src="hex_3.png" />
              <section class="top-card-top">
                <h1 class="top-card-h1">超级侧链</h1>
              </section>
              <section class="top-card-bottom">
                <h1 class="top-card-h1">无限侧链创建</h1>
                <p class="top-card-p">全新树形侧链结构</p>
                <p class="top-card-p">跨链事务处理，跨链联合权益证明</p>
              </section>

            </section>
          </section>
        </section>
      </section>


      <!-- 核心技术 -->
      <tech></tech>

      <!-- 应用服务 -->
      <service></service>

      <!-- 钱包块 -->
      <purse></purse>

      <!-- 路线图 -->
      <route></route>

      <!-- team块 -->
      <!-- <team></team> -->
    </main>

  </section>
</template>

<script>
  import LandscapeCard from './children/LandscapeCard.vue';
  import Tech from './children/tech.vue';
  import Service from './children/service.vue';
  import Purse from './children/purse.vue';
  import Route from './children/route.vue';
  import Team from './children/team.vue';

  import Assert_TopBg from '../../res/bg_2.png';
  export default {
    name: 'home',
    components: {
      LandscapeCard,
      Tech,
      Service,
      Purse,
      Route,
      Team
    },
    data() {
      return {
        bg: {
          'background-image': `url(${Assert_TopBg})`,
          'background-size': 'auto 100%'
        }
      }
    },
    created() {},
    methods: {

    }
  }

</script>

<style scoped>
  .home-container {
    overflow: hidden;
  }
  /* head */

  .head {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    position: relative;
  }



  @media screen and (min-height:581px) {
    .head-main {
      margin-top: 38vh;
    }
  }

  @media screen and (max-height: 580px) {
    .head-main {
      margin-top: 25vh;
    }
  }

  .head-main h3 {
    font-size: 36px;
    color: #fff;
    text-align: center;
  }

  .head-main h1 {
    font-size: 60px;
    color: #fff;
    text-align: center
  }

  .top-card-container {
    position: absolute;
    bottom: -80px;
    z-index: 3;
  }

  .top-card {
    width: 380px;
    height: 250px;
  }

  .top-card-bg {
    width: 380px;
    height: 250px;
    position: absolute;
    z-index: -1;
  }

  .top-card-top {
    padding-top: 16px;
    padding-left: 20px;
  }

  .top-card-center {
    padding-left: 20px;
    margin-top: 54px;
  }

  .top-card-bottom {
    padding-bottom: 16px;
    padding-left: 20px;
    position: absolute;
    bottom: 36px;
    height: 66px;
  }

  .top-card-bottom h1:not(:last-child) {
    margin-bottom: 8px;
  }

  .top-card-title {
    font-size: 36px;
    line-height: 50px;
    color: #fff;
  }

  .top-card-h1 {
    font-size: 24px;
    line-height: 28px;
    color: #fff;
  }

  .top-card-p {
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    width: 350px;
  }

  .top-card-p2 {
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    margin-top: 4px;
  }

  .top-card-bg::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    background-color: rgba(255, 0, 0, 0.459);
  }

  @media screen and (max-width: 1200px) {
    .container {
      width: 100%;
      box-sizing: border-box;
      padding: 0 12px;
      margin: 0 auto
    }
  }

  .top-card:not(:last-child) {
    margin-right: 45px;
  }
  /* some */

  .some {
    height: 500px;
    width: 100%;
    background-color: #fff;
    margin-top: calc(50vw*0.20);
    transform: translateY(calc(-50vw*0.3));
    position: relative;
    z-index: 2;
  }


  .some-content {
    z-index: 3;
    position: relative;
  }
  /* team */

  .team {
    background-color: #f6f6f6;
    position: relative;
    z-index: 3;
    height: 800px;
    width: 100%;
  }


  .card-container {
    margin-top: 80px;
  }
  /* 联系我们 */

  .contactus {
    background-color: #00a7fe;
    width: 100%;
    height: 500px;
  }

  .contactus-main {
    height: 300px;
    width: 1024px;
    text-align: center;
    margin: auto auto;
  }

  .contactus-words {
    margin-top: 50px;
  }

  .contactus-words h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 200;
    margin-bottom: 10px;
  }

  .contactus-words h3 {
    color: rgba(255, 255, 255, 0.541);
    font-size: 24px;
  }

  .contactus-cursor {
    margin-top: 25px;
  }

  .contactus-cursor li.cursor {
    display: inline-block;
  }

  .cursor {
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    cursor: pointer;
  }

  .cursor:not(:last-child) {
    margin-right: 5px;
  }

  .cursor-active {
    background-color: #fff;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */

  {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
