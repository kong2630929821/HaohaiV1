<template>
  <section class="purse-container">
    <section class="fill"></section>
    <h1 class="home-h1" style="padding-top:140px">FairBlock钱包</h1>
    <p class="home-p" style="width:35%;margin:0 auto;margin-top:20px;margin-bottom:62px">
        更安全，更快捷，更方便
    </p>
    <a style="color:#fff" href="https://chrome.google.com/webstore/detail/fairblockwallet/jpcpjfhljjjdlhciheahiecoiofnpnge?hl=zh-CN" target="_blank"><button class="btn btn-i">钱包下载</button></a>
    <p class="btn-a" @click="$router.push('buy')">购买FBC</p>
  </section>
</template>

<script>
  export default {
    name: 'home-purse'
  }

</script>

<style scoped>
  .purse-container {
    height: 560px;
    background-color: #f2f5fa;
    
  }

  .fill {
    height: 37px;
    background-color: #f2f5fa;
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

  .btn-a {
    font-size: 20px;
    color: #00B6FF;
    text-align: center;
    font-weight: 400;
    margin-top:16px;
    cursor: pointer;
  }

</style>
