<template>
  <section class="ignore-top-banner">
      <h6 class="ignore-title title">{{$t('routeMapBanner.title')}}</h6>
      <DividingLine class="ignore-margin"></DividingLine>
      <div class="ignore-text">{{$t('routeMapBanner.text')}}</div>
  </section>
</template>
<style scoped>
.ignore-top-banner{
    opacity: 0.7;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 370px;
    background-image: url(../../static/image/route-banner.png);
    display: flex;
    align-items: center;
    flex-direction: column;
}
.title{
    margin-top: 160px;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 42px;
    color: #FFFFFF;
    text-align: center;
    line-height: 59px;
    
}
.ignore-margin{
    margin: 10px 0;
}
.ignore-text{
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  },
}
</script>
