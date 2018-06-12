<template>
<!--钱包  banner-->
  <section class="wallet-banner">
      <div class="bg-banner" :alt="$t('walletTopBanner.bgAlt')" :title="$t('walletTopBanner.bgTitle')">
        <div class="logo-img" :style="{backgroundImage:'url(../../static/phoneImage/' + logoImg + ')'}"></div>
        <div class="download-box">
            <h6 class="title">{{$t('walletTopBanner.title')}}</h6>
            <div class="download-ways">
                <div v-for="(item,index) in $t('walletTopBanner.phoneDownload.item')" :key="index" class="download-way">
                    <a :href="item.link"><img :src="'../../static/phoneImage/' + item.imgUrl" class="tag-img" :alt="item.bgAlt" :title="item.bgTitle"></a>
                </div>
            </div>
            <div class="download-ways">
                <div v-for="(item,index) in $t('walletTopBanner.pcDownload.item')" :key="index" class="download-way">
                    <a :href="item.link"><img :src="'../../static/phoneImage/' + item.imgUrl" class="tag-img" :alt="item.bgAlt" :title="item.bgTitle"></a>
                </div>
            </div>
        </div>
      </div>
      <div class="text-container">
        <DividingLine></DividingLine>
        <div class="text">{{$t('walletTopBanner.text')}}</div>
     </div>
  </section>
</template>
<style scoped>

.wallet-banner{
    position: relative;
    width: 100%;
    background: #fff;
}
.bg-banner{
    padding: 0 24px;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url(../../static/phoneImage/mask-banner.jpg);
}
.logo-img{
    top: 90px;
    right: 24px;
    width: 150px;
    height: 292px;
    position: absolute;
    background-position: center;
    background-size: cover;
}
.download-box{
    padding-top: 104px;
    padding-bottom: 50px;
}
.title{
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #FFFFFF;
    line-height: 22px;
    margin-bottom: 25px;
}
.download-ways{
    display: flex;
    align-items: center;
    margin-top: 25px;
}
.download-way{
    margin-right: 30px;
}
.download-way:last-child{
    margin: 0;
}
.text-container{
    margin-top: 148px;
    margin-bottom: 109px;
    padding: 0 24px;
}
.text{
    font-size: 12px;
    line-height: 17px;
    color: #515151;
}
.tag-img{
    width: 37px;
    height: 37px;
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  },
  computed:{
      logoImg:function(){
          return this.$i18n.locale === 'zh-CN' ? 'mask-app.png' : 'mask-app2.png'
      }
  },
}
</script>
