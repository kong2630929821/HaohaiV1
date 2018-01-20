<template>
  <section>
    <header>
      <h1 class="home-h1">链上应用</h1>
      <!-- <p class="home-p" style="width:700px;margin:0 auto">FairBlock作为革命性的互联网底层架构，其所能实现的功能远不止数字货币或电子合约，许多我们常用的工作、生活甚至娱乐或游戏应用将可以以全新的形态在区块链上呈现。作为一套去中心化的协作体系，得益于技术团队带来的革命性技术，我们有能力将大多数互联网应用以去中心化的方式进行重构，互联网将变得更安全、更可靠、更富有想象力。</p> -->
    </header>
    <main>
      <section class="b0">
        <section class="b1">
          <section class="bit-joy">
            <section class="bit-joy-inner">
              <imgs class="firgue" src="yinyong_1.png"></imgs>
              <section class="bit-joy-main">
                <section class="bit-joy-main-inner">
                  <h1 class="bit-h1 bit-h1-light">高性能</h1>
                  <p class="bit-p bit-p-light">基于cPoS技术的FairBlock能够极大地提高区块链的处理效率，而全新的去中心化协作模式能够带来极低的处理成本。在小规模的测试网络中我们已经可以实现每秒2000次的处理效率。</p>
                </section>
              </section>
            </section>
          </section>
          <section class="bit-game">
                <section class="bit-game-inner">
                  <section class="bit-game-main">
                    <section class="bit-game-main-inner">
                      <h1 class="bit-h1 ">独立性</h1>
                      <p class="bit-p">我们提供完整的解决方案并鼓励开发者直接在侧链上开发应用。超级侧链功能可以提供独立和可靠的应用开发环境，而跨链事务规范则充分保证了主链与侧链间的交互。</p>
                    </section>
                  </section>
                  <imgs class="firgue" style="margin-right:10%;" src="yinyong_3.png"></imgs>
                </section>
              </section>
        </section>
        <section class="bit-page">
          <h1 class="bit-h1">可交互性</h1>
          <p class="bit-p ">在FairBlock区块链架构中，我们提供一个用户定义的外部函数调用，运行在FairBlock链中的代码可以通过安全函数调用外部数据，这将极大的拓展智能合约的应用范围。</p>
          <imgs class="firgue" src="yinyong_2.png"></imgs>
        </section>
      </section>
    </main>
  </section>
</template>

<script>
  export default {
    name: 'home-service'
  }

</script>

<style scoped>
  header {
    background-color: #f2f5fa;
    height: 400px;
  }

  .b0 {
    display: flex;
  }


  .b1 {
    width: 62%;
  }



  .bit-h1 {
    font-size: 24px;
    line-height: 28px;
    color: #3A478F;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .bit-h1-light {
    color: #00B6FF;
  }

  .bit-p {
    color: #666666;
    font-size: 16px;
    line-height: 22px;
  }

  .bit-p-light {
    color: #FFFFFF;
  }


  .bit-joy,
  .bit-game,
  .bit-page {
    position: relative;
  }

  .bit-joy {
    background-color: #003874;
    height: 500px;
    display: flex;
    align-items: center;
  }

  .bit-joy-inner {
    padding-left: 30px;
    display: flex;
  }


  .bit-joy-main {
    margin-top: 79px;
    display: flex;
    justify-content: center;
  }

  .bit-joy-main-inner {
    width: 58%;
  }

  .bit-game {
    height: 380px;
    height: 500px;
    display: flex;
    align-items: center;
  }


  .bit-game-inner {
    padding-right: 30px;
    display: flex;
  }


  .bit-game-main {
    margin-top: 79px;
    display: flex;
    justify-content: center;
  }

  .bit-game-main-inner {
    width: 58%;
  }


  .bit-page {
    padding: 166px 71px;
    width: 38%;
  }

  .firgue {
    object-fit: contain;
  }


  .bit-page .firgue {
    position: absolute;
    bottom: 0;
    right: -120px;
    z-index: -1;
  }

</style>
