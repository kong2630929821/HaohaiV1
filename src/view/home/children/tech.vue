<template>
  <section>
    <header>
      <h1 class="home-h1">核心技术</h1>
      <p class="home-p">FairBlock区块链网络核心技术</p>
    </header>
    <main>
      <!-- POS -->
      <section class="pos-container">
        <section class="container full-section-container">
          <section class="w1">
            <header class="layout y-center" style="margin-bottom:9px;">
              <imgs style="width:40px" src="home_a.png"></imgs>
              <h2 class="home-h2" style="color:#00B6FF">
                cPoS
              </h2>
            </header>
            <p class="home-p2" style="color:#FFFFFF">PoS(Proof of Stake)是第三代区块链的象征，这是一种基于链上货币计价的共识机制。PoS算法不需要计算复杂的数学问题，避免了资源和能源的浪费。考虑到网络环境和区块链运行效率，在充分保证安全的前提下，FairBlock设计了全新的PoS方案：基于竞争的PoS(cPoS)</p>
          </section>
          <section class="p1">
            <imgs src="jihua_3.gif"></imgs>
          </section>
        </section>
      </section>
      <!-- 安全网关 -->
      <section class="gateway-container">
        <section class="container section-container gateway-inner">
          <section class="p1">
            <imgs src="jihua_2.gif"></imgs>
          </section>
          <section class="w2">
            <header class="layout y-center" style="margin-bottom:9px;">
              <imgs style="width:40px" src="home_b.png"></imgs>
              <h2 class="home-h2">
                安全函数
              </h2>
            </header>
            <p class="home-p2" style="color:#333333">安全函数专注于解决传统智能合约代码无法调用和操作区块链外数据的问题。在FairBlock区块链架构中，我们提供一个经验证的安全的网关系统，运行在FairBlock链中的代码可以通过安全函数调用外部数据，这将极大的拓展智能合约的应用范围。</p>
          </section>
        </section>
      </section>
      <!-- 超级侧链 -->
      <section class="sub-container">
        <section class="container section-container ">
          <section class="w1">
            <header class="layout y-center" style="margin-bottom:9px;">
              <imgs style="width:40px" src="home_c.png"></imgs>
              <h2 class="home-h2">
                超级侧链
              </h2>
            </header>
            <p class="home-p2">FairBlock带来全新的超级侧链技术，为开发者提供全新侧链应用模式。超级侧链代码和主链相同，使用相同的共识算法（cPOS），有自己独立的区块链。得益于PoS的共识算法，超级侧链可以直接使用部分主链的节点网络，也可以独立部署节点网络。</p>
          </section>
          <section class="p1">
            <imgs src="jihua_1.gif"></imgs>
          </section>
        </section>
      </section>



    </main>
  </section>
</template>

<script>
  export default {
    name: 'home-tech'
  }

</script>

<style scoped>
  .section-container {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 73px;
  }

  .full-section-container {
    display: flex;
    justify-content: space-between;
  }

  .sub-container {}

  .gateway-container {
    background-color: #f2f5fa;
  }

  .pos-container {
    background-color: #003874;
    overflow: hidden;
    height: 540px;
  }

  .gateway-inner {
    padding-top: 46px;
    padding-bottom: 49px;
  }

  .w1 {
    flex: 0 0 auto;
    max-width: 600px;
    margin-top: 140px;
  }

  .p1 {
    height: 437px;
    width: 450px;
  }

  .w2 {
    flex: 0 auto;
    max-width: 600px;
    margin-top: 97px;
  }

</style>
