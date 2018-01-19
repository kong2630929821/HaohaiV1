<template>
  <section>
    <header class="header-h1"></header>
    <main>
      <header class="header-h2">
        <section class="mask"></section>
        <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
        <main class="header-main">
          <h1 class="header-main-h1">关于FairBlock</h1>
          <p class="header-main-p">FairBlock去中心化娱乐社区平台的出现正是为了解决传统中心化社交网络面临的种种问题 依托于全新构架的区块链体系，我们将建立一套去中心的，自由和稳定的全新社交网络

          </p>
        </main>
      </header>
      <main class="block">
        <p class="block-header">FairBlock.com是您所有与比特币有关的首要来源。我们可以帮助您 购买FBC和/或选择FBC钱包。您也可以阅读最新消息，或在我们的FBC论坛上与社区进行交流。这是一个商业网站，列出钱包，交易所和其他比特币相关的公司。
        </p>
        <p class="block-header"  style="margin-bottom:31px">如果您有兴趣在Bitcoin.com工作，请点击这里查看我们目前的机会。</p>
        <button class="btn btn-i" @click="$router.push('us')">联系我们</button>
      </main>
    </main>
  </section>
</template>

<script>
  export default {
    name: 'about'
  }

</script>

<style scoped>
  header.header-h1 {
    height: 180px;
    background-color: #003874;
  }

  .mask {
    background-color: #003874;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  header.header-h2 {
    position: relative;
    height: 390px;
    overflow: hidden;
  }

  .header-h2-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    transform: translateY(-300px);
  }


  .header-main {
    margin: 0 auto;
    margin-top: 123px;
    width: 900px;
  }

  .header-main-h1 {
    font-size: 36px;
    line-height: 50px;
    color: #EEEEEE;
    text-align: center;
    margin-bottom: 30px;
  }

  .header-main-p {
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
  }

  .block {
    margin:0 auto;
    margin-top: 152px;
    min-height: 300px;
    width:900px;
  }

  .block-header {
    font-size: 16px;
    color:#333333;
    text-align: center;
  }


  .btn-i {
    background-color: #00a7fe;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    padding: 0 3em;
    display: block;
    margin: 0 auto;
  }

</style>
