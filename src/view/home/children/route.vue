<template>
  <section class="route-container">

    <header>
      <h1 class="home-h1" style="padding-top:0px">路线图</h1>
      <p class="home-p">FairBlock区块链时间节点</p>
    </header>

    <main class="container route-main-container">
      <section class="mask">
        <imgs src="next.png" class="next-icon"></imgs>
      </section>
      <section class="time-point-layout">
        <section>
          <section v-for="(item,index) of routes" class="time-point">
            <section class="time-point-before"></section>
            <section class="time-area1">
              <h1>{{item.time}}</h1>
            </section>
            <section class="time-area2">
              <imgs size="260px;130px" src="lux_1.jpg"></imgs>
            </section>
            <section class="time-area3">
              {{item.content}}
            </section>
          </section>

        </section>
      </section>

    </main>
  </section>
</template>

<script>
  import routes from './route.json';

  export default {
    name: 'home-route',
    data() {
      return {
        routes
      }
    }
  }

</script>

<style scoped>
  .route-container {
    background-color: #f2f5fa;
    padding: 140px 0;
  }

  .route-main-container {
    position: relative;
    height: 600px;
  }

  .time-point-layout {
    height: 600px;
    position: relative;
    overflow-y: auto;
  }

  header {
    margin-bottom: 135px;
  }

  .time-point {
    height: 200px;
    position: relative;
    padding-left: 32px;
    display: flex;
    border: none;
    margin-left: 15px;
    border-left: 1px solid #999999;
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
    z-index: 4;
    top: 0px;
    left: -8px;
    background-color: #999999;
  }

  .time-area1 {
    margin-right: 30px;
    flex: 0 1 160px;
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

  .mask {
    width: 45px;
    background-color: #f2f5fa00;
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    height: 8px;
  }

  .mask::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    z-index: 3;
    top: 3px;
    left: 25px;
    background-color: #999999;
  }

  .next-icon {
    position: absolute;
    z-index: 5;
    transform: rotate(270deg) translateY(25px) translateX(-20px);
  }
  /* 滑条样式 */

   ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color: rgba(245, 245, 245, 0);
  }

</style>
