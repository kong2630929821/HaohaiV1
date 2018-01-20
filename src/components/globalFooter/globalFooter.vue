<template>
  <footer class="global-footer" :style="bg">
    <ul class="container footer-container">
      <li>
        <section>
          <imgs src="logo.png" ></imgs>
          <h1 class="footer-title" style="margin-top:17px;" @click="goto('question')">常见问题</h1>
          <h1 class="footer-title" @click="goto('us')">联系我们</h1>
          <h1 class="footer-title" @click="goto('whitepaper')">白皮书</h1>
        </section>
      </li>
    </ul>
  </footer>
</template>

<script>
  import socialityLink from './socialityLink.json';
  import otherLink from './otherLink.json';
  import Assert_Bg from '../../res/bg_2.png';
  export default {
    name: 'global-footer',
    data() {
      return {
        socialityLink,
        otherLink,
        bg: {
          'background-image': `url(${Assert_Bg})`
        }
      }
    },
    methods: {
      goto(i){
        location.href = `http://${location.host}/#/${i}`
      }
    }
  }

</script>

<style scoped>
  .global-footer {
    height: 420px;
    width: 100%;
  }

  .footer-container {
    padding-top: 110px;
    display: flex;
    justify-content: center;
  }

  .footer-container>li {
    list-style-type: none;
  }

  .footer-title {
    font-size: 24px;
    line-height: 33px;
    font-weight: 400;
    color: #fff;
    margin: 0 5px;
    text-align: center;
    cursor: pointer;
  }

  .block-detail {
    height: 125px;
  }

  .link-block {
    width: 200px;
  }

  .link-detail-block {
    display: flex;
    justify-content: space-between;
    width: 180px;
  }

  .about-detail-block {
    width: 415px;
    font-size: 14px;
    color: #fff;
  }

  .other-detail-block {
    max-width: 550px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
  }

  .link-detail-block li {
    list-style-type: none;
  }

  .link-detail-block li * {
    color: #fff;
    font-size: 14px;
  }
  /* 社交网络 */

  .link-sociality li img {
    filter: brightness(100)
  }

  .link-sociality li span {
    margin-left: 4px;
  }

</style>
