<template>
  <section>
    <header>
      <h1 class="home-h1">应用服务</h1>
      <p class="home-p">第三代泛娱乐公链</p>
    </header>
    <main>
      <section class="b0">
        <section class="b1">
          <section class="bit-joy">
            <section class="bit-joy-inner">
              <imgs class="firgue" src="yinyong_1.png"></imgs>
              <section class="bit-joy-main">
                <section class="bit-joy-main-inner">
                  <h1 class="bit-h1 bit-h1-light">BitJoy</h1>
                  <p class="bit-p bit-p-light">基于真实身份的去中心化社交网络，用户可以通过Timeline发布博客，图片，短视频等原创内容，信息以时间线形式展示</p>
                </section>
              </section>
            </section>
          </section>
          <section class="bit-game">
                <section class="bit-game-inner">
                  <section class="bit-game-main">
                    <section class="bit-game-main-inner">
                      <h1 class="bit-h1 ">BitGame</h1>
                      <p class="bit-p">基于真实身份的去中心化社交网络，用户可以通过Timeline发布博客，图片，短视频等原创内容，信息以时间线形式展示</p>
                    </section>
                  </section>
                  <imgs class="firgue" style="margin-right:10%;" src="yinyong_3.png"></imgs>
                </section>
              </section>
        </section>
        <section class="bit-page">
          <h1 class="bit-h1">BitPage</h1>
          <p class="bit-p ">为博客作者和原创者准备的内容发布平台，创建由个人管理且运行在区块链上的个人主页，用户甚至可以将原创作品在FairBlock上进行商业化</p>
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
    right: -180px;
    z-index: -1;
  }

</style>
