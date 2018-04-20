<template>
  <section class="ignore-about-gaia about-gaia">
      <div class="text-box">
          <h6 class="ignore-title">{{$t('aboutUsAboutGAIA.title')}}</h6>
          <DividingLine></DividingLine>
          <div class="ignore-gaia-text gaia-text">{{$t('aboutUsAboutGAIA.text')}}</div>
      </div>
      <div class="img-box">
          <div class="gaia-img"></div>
          <div class="gaia-img-shadow"></div>
      </div>
  </section>
</template>
<style scoped>
.about-gaia{
    padding:0 300px;
}
.ignore-about-gaia{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 210px;
    margin-bottom: 110px;
}
.text-box{
    margin-right: 73px;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 36px;
    color: #333333;
    line-height: 50px;
    margin-bottom: 10px;
}
.gaia-text{
    width: 600px;
    color: #666666;
}
.ignore-gaia-text{
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
}
.img-box{
    position: relative;
}
.gaia-img{
    background-image: url(../../static/image/100477742_wx.jpg);
    width: 530px;
    height: 500px;
    background-position: center;
    background-size: cover;
}
.gaia-img-shadow{
    position: absolute;
    width: 530px;
    height: 500px;
    background: #E2E2E2;
    top: 10px;
    left: 10px;
    z-index: -999;
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  }
}
</script>
