<template>
  <footer class="global-footer" :style="bg">
    <ul class="container footer-container">
      <!-- Other -->
      <li>
        <section class="other-detail-block">
          <p style="margin-bottom:17px;">我们将建立一套去中心的，自由和稳定的全新社交网络 </p>
          <p>All trademarks, logos and brands are property of their respective owners. </p>
          <p>All company, product and service names used in this website are for identification purposes only.</p>
          <p>Responsible Disclosure Policy for Security Researchers</p>
          <p style="margin-top:30px">© 2017 Digital Asset Holdings, LLC</p>
          <section style="margin-top:50px">
            <imgs size="24px" style="margin-right:24px" src="temp.png"></imgs>
            <imgs size="24px" style="margin-right:24px" src="temp.png"></imgs>
            <imgs size="24px" style="margin-right:24px" src="temp.png"></imgs>
            <imgs size="24px" style="margin-right:24px" src="temp.png"></imgs>
            <imgs size="24px" style="margin-right:24px" src="temp.png"></imgs>
          </section>
        </section>
      </li>
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
    justify-content: space-between;
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
    text-align: right;
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
