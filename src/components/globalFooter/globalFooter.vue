<template>
  <footer class="global-footer">
    <ul class="container footer-container">
      <!-- 快速链接 -->
      <li class="link-block">
        <h1 class="footer-h1 ">快速链接</h1>
        <section class="link-detail-block block-detail">
          <!-- 社区链接 -->
          <ul class="link-sociality">
            <li v-for="(item,index) of socialityLink" :key="index">
              <a class="layout y-center" :href="item.href" target="_blank">
                <imgs size="20px" :src="item.icon"></imgs>
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
          <!-- 其他链接 -->
          <ul class="link-other">
            <li v-for="(item,index) of otherLink" :key="index">
              <router-link class="layout y-center" :to="{name:item.route}">{{item.name}}</router-link>
            </li>
          </ul>
        </section>


      </li>
      <!-- 关于BitJoy -->
      <li>
        <h1 class="footer-h1">关于BitJoy</h1>
        <section class="block-detail about-detail-block">
          BitJoy去中心化娱乐社区平台的出现是为了解决传统中心化社交网络面临的种种问题。依托于全新构架的区块链体系，我们将建立一套去中心的，自由和稳定的全新社交网络
        </section>
      </li>
      <!-- Other -->
      <li>
        <h1 class="footer-h1"></h1>
        <section class="other-detail-block">
          <p style="margin-bottom:10px">© 2017 Digital Asset Holdings, LLC</p>
          <p>All trademarks, logos and brands are property of their respective owners.  </p>
          <p>All company, product and service names used in this website are for identification purposes only.</p>
          <p>Responsible Disclosure Policy for Security Researchers</p>
        </section>
      </li>
    </ul>
  </footer>
</template>

<script>
  import socialityLink from './socialityLink.json';
  import otherLink from './otherLink.json';
  export default {
    name: 'global-footer',
    data() {
      return {
        socialityLink,
        otherLink
      }
    }
  }

</script>

<style scoped>
  .global-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 230px;
    width: 100%;
  }

  .footer-container {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
  }

  .footer-container>li {
    list-style-type: none;
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
    max-width:550px;
    font-size:14px;
    color:#fff;
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
