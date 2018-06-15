<template>
    <div class="container-404">
      <img src="../../static/phoneImage/page404.jpg" class="img404">
      <router-link to="/"><div class="back-to-home">回到首页</div></router-link>
    </div>
  </template>
  <style scoped>
  .container-404{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .img404{
    width: 80vw;
  }
  .back-to-home{
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "SourceHanSansCN-Regular";
    font-size: 24px;
    color: #FFFFFF;
    line-height: 36px;
    background: #42A5F5;
    border-radius: 8px;
  }
  </style>
  <script>
  export default {
    created(){
      document.title = '404';
    }
  }
  </script>
  