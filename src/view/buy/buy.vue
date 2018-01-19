<template>
  <section>
    <section class="first-screen">
      <section class="head" :style="bg">
        <header>
          <h1 style="margin-bottom:30px">购买FBC</h1>
          <p style="width:580px;margin:0 auto">您可以通过数字货币兑换买入，卖出或交易Ada 以下是目前列出Ada的交易所清单，在未来几个月内会持续更新
          </p>
          <section class="icon-area ">
            <imgs src="Bitmap.png" style="margin-right:10px"></imgs>
            <imgs src="Bitmap2.png" style="margin-right:10px"></imgs>
            <imgs src="Bitmap3.png" style="margin-right:10px"></imgs>
            <imgs src="Bitmap4.png"></imgs>
          </section>
        </header>
      </section>
    </section>

    <main class="main container word-container" style="width:800px">
      <p class="footer-h1">HitBTC
        <span>(即将公布)</span>
      </p>
      <p class="footer-h1">Bitt
        <span>(即将公布)</span>
      </p>
      <p class="footer-h1">Cryptopia
        <span>(即将公布)</span>
      </p>
    </main>
  </section>
</template>

<script>
  import Assert_bg from '../../res/bg_3.png';


  export default {
    name: 'buy',
    data() {
      return {
        bg: {
          'background-image': `url(${Assert_bg})`,
          'background-size': `100% 100%`
        },
        result: {}
      }
    },
    mounted(){
        window.scrollTo(0,0)
    },
    methods: {}
  }

</script>

<style scoped>
  .first-screen {
    height: 700px;
    overflow: hidden;
    background-color: #003874;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .head {
    margin-top: 198px;
    height: 350px;
    width: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header>* {
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  header>h1 {
    font-size: 36px;
    line-height: 42px;
  }

  header>p {
    font-size: 16px;
    line-height: 22px;
  }

  .main {
    background-color: #fff;
    min-height: 300px;
  }

  .icon-area {
    width: 780px;
    margin: 43px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .word-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .footer-h1 {
    color: #333333;
    font-size: 24px;
    line-height: 28px;
  }

  .footer-h1 span {
    font-size: 24px;
    line-height: 28px;
    color: #999999;
    margin-left: 10px;
  }

</style>
