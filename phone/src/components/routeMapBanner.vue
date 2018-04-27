<template>
<!--路线图banner-->
  <section class="top-banner">
      <h6 class="title">{{$t('routeMapBanner.title')}}</h6>
      <DividingLine class="margin"></DividingLine>
      <div class="text">{{$t('routeMapBanner.text')}}</div>
  </section>
</template>
<style scoped>
.top-banner{
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 345px;
    background-image: url(/phone/static/image/route-banner.jpg);
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.title{
    font-family: "PingFangSC-Medium";
    font-size: 36px;
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    margin-top: 140px;
}

.text{
    width: 100%;
    font-size: 12px;
    padding: 0 24px;
    color: #FFFFFF;
    text-align: center;
    line-height: 17px;
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
