<template>
  <section>
    <header>
      <h1 class="home-h1">核心技术</h1>
      <p class="home-p">FairBlock区块链网络核心技术</p>
    </header>
    <main>
      <!-- 超级侧链 -->
      <section class="container section-container">
        <section class="w1">
          <header class="layout y-center" style="margin-bottom:9px;">
            <imgs style="width:40px" src="home_c.png"></imgs>
            <h2 class="home-h2">
              超级侧链
            </h2>
          </header>
          <p class="home-p2">FairBlock研发的超级侧链技术则支持以混合模式分叉侧链，既独立与原有链，又能与原区块链网络相兼容。</p>
          <p class="home-p2">侧链可以独立进行区块锻造，可以完全独立于主链运行，极高的侧链锻造速度可以满足极高频率的交互要求。节点端软件支持同时为多个基于主链衍生的侧链提供服务。而主链同时可以对侧链进行认证。</p>
        </section>
        <section class="p1">
          <imgs src="jihua_1.png"></imgs>
        </section>
      </section>
      <!-- 安全网关 -->
      <section class="gateway-container">
        <section class="container section-container gateway-inner">
          <section class="p1">
            <imgs src="jihua_2.png"></imgs>
          </section>
          <section class="w2">
            <header class="layout y-center" style="margin-bottom:9px;">
              <imgs style="width:40px" src="home_b.png"></imgs>
              <h2 class="home-h2">
                安全网关
              </h2>
            </header>
            <p class="home-p2" style="color:#333333">在标准意义上的智能合约本质上是一段运行在虚拟机中的代码，代码所操作的数据全部存放在链上，在这种架构下，智能合约代码无法调用和操作区块链之外的数据。这就导致传统的智能合约无法和区块链外的数据进行交互，例如无法进行DNS查询，也无法得到安全随机数。</p>
            <p class="home-p2" style="color:#333333">在FairBlock区块链架构中，我们提供一个经验证的安全的网关系统，运行在FairBlock链中的代码可以通过安全网关调用外部数据，这将极大的拓展智能合约的应用范围，例如可以为链上合约提供安全随机数</p>
          </section>
        </section>
      </section>
      <!-- POS -->
      <section class="pos-container">
      <section class="container full-section-container">
        <section class="w1">
          <header class="layout y-center" style="margin-bottom:9px;">
            <imgs style="width:40px"  src="home_a.png"></imgs>
            <h2 class="home-h2" style="color:#00B6FF">
              POS
            </h2>
          </header>
          <p class="home-p2" style="color:#FFFFFF">过去区块链网络完成一次区块的创建或验证往往需要数分钟的时间，如此低的处理速度在现代互联网中是难以接受的。</p>
          <p class="home-p2" style="color:#FFFFFF">哪怕是用于区块链最基础的应用之一——电子货币交易。而使用cPOS技术，这一时间可以被缩短到秒级。</p>
        </section>
        <section class="p1">
          <imgs src="jihua_3.png"></imgs>
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

  .gateway-container {
    background-color: #f2f5fa;
  }

  .pos-container{
      background-color: #003874;
      overflow:hidden;
      height:540px;
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
    flex: 0 0 auto;
    max-width: 600px;
    margin-top: 97px;
  }

</style>
