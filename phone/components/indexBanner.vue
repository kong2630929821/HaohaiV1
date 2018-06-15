<template>
<!--首页  banner-->
    <section class="top-banner">
        <div class="banner-bg" :alt="$t('indexTopBanner.bgAlt')" :title="$t('indexTopBanner.bgTitle')">
        <img src="/phoneImage/banner_logo.png" class="banner-logo">
        </div>
        <div class="banner-content">
        <h1 class="banner-title">{{$t('indexTopBanner.title')}}</h1>
        <ul class="advantages-box">
            <li v-for="(item,index) in $t('indexTopBanner.advantages')" :key="index" class="banner-text">{{item}}</li>
        </ul>
        </div>
    </section>
</template>
<style scoped>
.top-banner{
    width: 100%;
    display: flex;
    position: relative;
    padding-bottom: 47px;
}
.banner-bg{
    width: 100%;
    height: 345px;
    background-image: url(/phoneImage/banner.png);
    position: absolute;
    background-position: bottom;
    background-size: cover;
    left: 0;
    top: 0;
    padding: 100px 0 0 96px;
}
.banner-logo{
    width: 163px;
    height: 205px;
}
.banner-content{
    width: 100%;
    margin-top: 375px;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 0 40px;
}
.banner-title{
    font-size: 24px;
    line-height: 33px;
    color: #333333;
    font-family: "PingFangSC-Medium";
    text-align: center;
}
.advantages-box{
    margin-top: 13px;
    list-style:disc;
}
.banner-text{
    opacity: 0.9;
    font-size: 16px;
    color: #333333;
    line-height: 22px;
}

</style>
        
        