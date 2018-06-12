<template>
<!--首页  banner-->
  <section class="top-banner" :alt="$t('indexTopBanner.bgAlt')" :title="$t('indexTopBanner.bgTitle')">
      <img src="../../static/pcImage/banner_logo.png" class="ignore-banner-logo">
      <div>
        <h3 class="ignore-banner-title">{{$t('indexTopBanner.title')}}</h3>
        <p class="ignore-banner-advantages"><span v-for="(item,index) in $t('indexTopBanner.advantages')" :key="index" class="advantage-item">{{item}}<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span></span></p>
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
    background-image: url(../../static/pcImage/banner.jpg);
    align-items: center;
    background-position: bottom;
}
.ignore-banner-logo{
    width: 160px;
    height: 200px;
    flex-shrink: 0;
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
    padding-left: 4px;
    padding-right: 20px;
    margin-right: 10px;
}
.advantage-item:last-child span{
    display: none;
}
@media only screen and (max-width: 1199px) {
    .top-banner{
        padding-left: 10vw;
    }
    .ignore-banner-logo{
        width: 144px;
        height: 180px;
    }
    .ignore-banner-title{
        font-size: 56px;
        line-height: 80px;
    }
    .ignore-banner-advantages{
        font-size: 15px;
        padding-left: 3px;
    }
}
@media only screen and (max-width: 991px) {
    .top-banner{
        padding-left: 7vw;
    }
    .ignore-banner-logo{
        width: 128px;
        height: 160px;
    }

    .ignore-banner-title{
        font-size: 40px;
        line-height: 70px;
    }
    .ignore-banner-advantages{
        font-size: 13px;
        padding-left: 3px;
    }
}
</style>

