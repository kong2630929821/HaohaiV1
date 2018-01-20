<template>
  <footer class="global-footer" :class="{'inbottom':isBottom}" :style="bg">
    <ul class="container footer-container">
      <li>
        <section style="text-align:center">
          <imgs src="logo.png"></imgs>
          <h1 class="other-detail-block" @click="goto('us')" style="cursor:pointer;margin:0 auto;margin-top:7px;text-align:center">联系我们</h1>
        </section>
        <section style="margin-top:35px">
          <a href="http://www.github.com/">
            <imgs size="30px" style="margin-right:17px" src="github"></imgs>
          </a>
          <a href="http://www.twitter.com/">
            <imgs size="30px" style="margin-right:17px" src="twitter"></imgs>
          </a>
          <a href="http://www.google.com/">
            <imgs size="30px" style="margin-right:17px" src="googleplus"></imgs>
          </a>
          <a href="http://www.reddit.com/">
            <imgs size="30px" style="margin-right:17px" src="reddit"></imgs>
          </a>
          <a href="">
            <imgs size="30px" style="margin-right:17px" src="send"></imgs>
          </a>
        </section>
      </li>
    </ul>
  </footer>
</template>

<script>
  import socialityLink from './socialityLink.json';
  import otherLink from './otherLink.json';
  import {
    eventBus
  } from '../../bus/eventBus.js';
  import Assert_Bg from '../../res/bg_2.png';
  export default {
    name: 'global-footer',
    data() {
      return {
        socialityLink,
        otherLink,
        bg: {
          'background-image': `url(${Assert_Bg})`
        },
        isBottom: false
      }
    },
    created() {
      eventBus.$on('updateFooterPosition', this.updateFooterPosition);
    },
    mounted() {
      this.updateFooterPosition();
    },
    methods: {
      goto(i) {
        location.href = `http://${location.host}/#/${i}`
      },
      updateFooterPosition(force) {
        force = force || '';
        if (document.body.offsetHeight < window.innerHeight) {
          this.isBottom = true;
        }
        if (force != '') this.isBottom = false;
      }
    }
  }

</script>

<style scoped>
  .global-footer {
    height: 250px;
    width: 100%;
  }

  .footer-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .inbottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
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
