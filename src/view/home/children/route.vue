<template>
  <section class="route-container">

    <header>
      <h1 class="home-h1" style="padding-top:0px">路线图</h1>
      <p class="home-p">FairBlock区块链时间节点</p>
    </header>

    <main class="container">
      <section class="time-point">
        <section class="time-area1">
          <h1>17年11月30日</h1>
          <p>搭建FairBlock官网</p>
        </section>
        <section class="time-area2">
          <imgs size="260px;130px" src="lux_1.jpg"></imgs>
        </section>
        <section class="time-area3">
          我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是
        </section>
      </section>
      <section class="time-point">
        <section class="time-area1">
          <h1>18年1月20日</h1>
          <p>发布FairBlock代码和FairBlock钱包</p>
        </section>
        <section class="time-area2">
          <imgs size="260px;130px" src="lux_2.jpg"></imgs>
        </section>
        <section class="time-area3">
          我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是
        </section>
      </section>
      <section class="time-point">
        <section class="time-area1">
          <h1>18年1月31日</h1>
          <p>在FairBlock主链中发布2-3个上链资产，这些资产在钱包中可见</p>
        </section>
        <section class="time-area2">
          <imgs size="260px;130px" src="lux_3.jpg"></imgs>
        </section>
        <section class="time-area3">
          我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是一串开发解释我是
        </section>
      </section>
      <imgs src="next.png" style="transform:rotate(270deg) translateY(-2px) translateX(182px)"></imgs>
    </main>
  </section>
</template>

<script>
  export default {
    name: 'home-route'
  }

</script>

<style scoped>
  .route-container {
    background-color: #f2f5fa;
    padding: 140px 0;
  }

  header {
    margin-bottom: 135px;
  }

  .time-point {
    min-height: 200px;
    position: relative;
    padding-left: 32px;
    display: flex;
    border:none;
  }

  .time-point:not(:last-child) {
    border-left: 1px solid #999999;
  }

  .time-point::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 16px;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: -8px;
    background-color: #999999;
  }

  .time-area1 {
    margin-right: 30px;
    flex: 1 1 230px;

  }

  .time-area1 h1 {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #00B6FF;
    margin-bottom: 8px;
  }

  .time-area1 p {
    font-size: 16px;
    font-weight: 500;
    color: #666666;
  }

  .time-area2 {
    flex: 0 0 auto;
  }

  .time-area3 {
    flex: 2 2 auto;
    padding: 0 45px;
    font-size: 16px;
    line-height: 26px;
    color: #637485;
  }

</style>
