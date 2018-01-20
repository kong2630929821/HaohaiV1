<template>
  <section>
    <section class="first-screen">
      <section class="head" :style="bg">
        <header>
          <h1 style="margin-bottom:30px">购买FBC</h1>
          <section class="icon-area ">
            <imgs src="Bitmap.png" style="margin-right:10px"></imgs>

          </section>
        </header>
      </section>
    </section>

    <main class="main container word-container" style="width:800px">
      <section class="footer-h1">
        <imgs src="Bitmap2.png"></imgs>
        <span>(即将公布)</span>
      </section>
      <section class="footer-h1">
        <imgs src="Bitmap3.png"></imgs>
        <span>(即将公布)</span>
      </section>
      <section class="footer-h1">
        <imgs src="Bitmap4.png"></imgs>
        <span>(即将公布)</span>
      </section>
      <section class="footer-h1">
        <imgs src="bitt.png"></imgs>
        <span>(即将公布)</span>
      </section>
      <section class="footer-h1">
        <imgs src="crypt.png"></imgs>
        <span>(即将公布)</span>
      </section>
      <section class="footer-h1">
        <imgs src="hitbtc.png"></imgs>
        <span>(即将公布)</span>
      </section>


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
    mounted() {
      window.scrollTo(0, 0)
    },
    methods: {}
  }

</script>

<style scoped>
  .first-screen {
    height: 550px;
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
    padding:150px 0;
  }

  .icon-area {
    width: 780px;
    margin: 43px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .icon-area img {
    margin-bottom: 35px;
  }

  .word-container {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .footer-h1 {
    color: #333333;
    font-size: 24px;
    line-height: 28px;
    height:fit-content;
    margin-bottom:80px;
  }

  .footer-h1 img {
    width:170px;
  }

  .footer-h1 span {
    font-size: 24px;
    line-height: 28px;
    color: #999999;
    margin-left: 10px;
  }

</style>
