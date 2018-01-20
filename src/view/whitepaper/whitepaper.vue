<template>
    <section>
      <header class="header-h1"></header>
      <main>
        <header class="header-h2">
          <section class="mask"></section>
          <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
          <main class="header-main">
            <h1 class="header-main-h1">白皮书</h1>
            <p class="header-main-p">竞争权益证明，超级侧链，安全函数</p>            
          </main>
        </header>
        <main class="block">
          <p class="block-header" >FairBlock是革命性的互联网底层架构</p>
          <p class="block-header">其所能实现的功能远不止数字货币或电子合约</p>
          <p class="block-header">我们常用的工作、生活甚至娱乐或游戏应用将可以以全新的形态在区块链上呈现</p>
          <p class="block-header">得益于技术团队带来的革命性技术，FairBlock实现了一套去中心化的协作体系</p>
          <p class="block-header" >我们有能力将大多数互联网应用以去中心化的方式进行重构</p>
          <p class="block-header"style="margin-bottom:31px">互联网将变得更安全、更可靠、更富有想象力</p>
          <a style="color:#fff" href="http://jenovachen.com/flowingames/Flow_in_games_final.pdf" target="_blank"><button class="btn btn-i">下载白皮书</button></a>
        </main>
      </main>
    </section>
  </template>
  
  <script>
    export default {
      name: 'white-paper',
      mounted(){
        window.scrollTo(0,0)
      }
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
      line-height: 90px;
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
      margin-top: 132px;
      min-height: 300px;
      width:900px;
    }
  
    .block-header {
      font-size: 24px;
      line-height:70px;
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
      margin-top:80px;
      margin-bottom:102px;
    }
  
  </style>
  