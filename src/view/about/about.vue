<template>
  <section>
    <header class="header-h1"></header>
    <main>
      <header class="header-h2">
        <section class="mask"></section>
        <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
        <main class="header-main">
          <h1 class="header-main-h1">关于FairBlock</h1>
          <p class="header-main-p">更安全，更快捷，更方便</p>
        </main>
      </header>
      <main class="block">
        <p class="block-header" >FairBlock基于全新构架的第三代区块链体系
        </p>
        <p class="block-header">致力于构建一个高效而可靠的价值传输体系</p>
        <p class="block-header">推动互联网成为构建社会信任的基础设施</p>
        <p class="block-header">我们试图建立一套去中心的、自由和稳定的全新互联网信任体系</p>
        <p class="block-header">重点解决区块链应用开发中以游戏等强交互应用为典型代表的泛娱乐领域的开发痛点</p>
        <p class="block-header">推进区块链技术面向普通大众的普及和推广应用</p>
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
    margin: 0 auto;
    margin-top: 132px;
    min-height: 300px;
    width: 900px;
  }

  .block-header {
    font-size: 24px;
    line-height: 70px;
    color: #333333;
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
    margin-top: 80px;
    margin-bottom: 102px;
  }

</style>
