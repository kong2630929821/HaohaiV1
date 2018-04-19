<template>
  <section class="top-banner">
      <img src="../../static/image/banner_logo.png" class="ignore-banner-logo">
      <div>
        <h3 class="ignore-banner-title">{{$t('indexTopBanner.title')}}</h3>
        <p class="ignore-banner-advantages">{{$t('indexTopBanner.advantages')}}</p>
      </div>
  </section>
</template>
<style scoped>
.top-banner{
    height: 100vh;
    width: 100%;
    background: rgba(61,107,193,0.80);
    padding-left: 300px;
    display: flex;
    
    align-items: center;
}
.ignore-banner-logo{
    width: 160px;
    height: 200px;
}
.ignore-banner-title{
    font-size: 64px;
    line-height: 90px;
    color: #FFFFFF;
}
.ignore-banner-advantages{
    opacity: 0.9;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 22px;
}
</style>

