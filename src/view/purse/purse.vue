<template>
        <section>
          <header class="header-h1"></header>
          <main>
            <header class="header-h2">
              <section class="mask"></section>
              <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
              <main class="header-main">
                <h1 class="header-main-h1">钱包</h1>
                <p class="header-main-p">更安全，更快捷，更方便</p>
              </main>
            </header>
            <main class="block">
              <p class="block-header">FairBlock钱包不单是链上资产的存储系统，更是区块链与用户交互的媒介，用户将可以在钱包中直接使用第三方分布式应用。钱包在整个生态系统中是如此的重要，正如浏览器在互联网中的作用。
              </p>
              <a style="color:#fff" href="https://chrome.google.com/webstore/detail/fairblockwallet/jpcpjfhljjjdlhciheahiecoiofnpnge?hl=zh-CN" target="_blank"><button class="btn btn-i" >下载钱包</button></a>
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
          margin-bottom:30px
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
      