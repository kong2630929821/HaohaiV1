<template>
<div class="container-404">
    <img src="/pcImage/404.jpg" class="img404">
    <nuxt-link to="/"><div class="back-to-home">回到首页</div></nuxt-link>
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
    margin-top: 20px;
}
</style>
<script>
export default {
    props: ['error'],
    layout: '404' // 你可以为错误页面指定自定义的布局
}
</script>
      