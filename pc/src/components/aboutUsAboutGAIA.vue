<template>
<!--关于我们  关于GAIA-->
  <section class="ignore-about-gaia about-gaia">
      <div class="text-box">
          <h6 class="ignore-title">{{$t('aboutUsAboutGAIA.title')}}</h6>
          <DividingLine></DividingLine>
          <div class="ignore-gaia-text gaia-text">{{$t('aboutUsAboutGAIA.text')}}</div>
      </div>
      <div class="img-box">
          <div class="gaia-img" :alt="$t('aboutUsAboutGAIA.bgAlt')" :title="$t('aboutUsAboutGAIA.bgTitle')"></div>
          <div class="gaia-img-shadow"></div>
      </div>
  </section>
</template>
<style scoped>
.about-gaia{
    padding:0 250px;
    justify-content: space-between;
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
    background-image: url(/pc/static/image/100477742_wx.jpg);
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
@media only screen and (max-width: 1199px) {
    .ignore-title{
        font-size: 34px;
    }
    .ignore-gaia-text{
        font-size: 13px;
    }
    .about-gaia{
        padding: 0 10vw;
    }
    .gaia-text{
        width: 40vw;
    }
}
@media only screen and (max-width: 991px) {
    .text-box{
        margin-right: 2vw;
    }
    .ignore-about-gaia{
        margin-top: 180px;
        justify-content: space-between;
    }
    .ignore-title{
        font-size: 32px;
    }
    .ignore-gaia-text{
        font-size: 12px;
        width: 35vw;
    }

    .gaia-img{
        width: 33vw;
        height: 31.13vw;
    }
    
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
