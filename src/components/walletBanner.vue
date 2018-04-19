<template>
  <section class="ignore-wallet-banner wallet-banner">
      <div class="logo-img"></div>
      <div>
          <h6 class="ignore-title">{{$t('walletTopBanner.title')}}</h6>
          <DividingLine></DividingLine>
          <div class="ignore-text text">{{$t('walletTopBanner.text')}}</div>
      </div>
      <div class="ignore-download-box">
          <div class="phone-download">
              <p class="ignore-download-title">{{$t('walletTopBanner.phoneDownload.title')}}</p>
              <div class="ignore-download-ways">
                  <div v-for="(item,index) in $t('walletTopBanner.phoneDownload.item')" :key="index" class="ignore-download-way">
                      <img :src="'../../static/image/' + item.imgUrl">
                      <span class="ignore-download-way-title">{{item.title}}</span>
                  </div>
              </div>
          </div>
           <div class="ignore-pc-download">
              <p class="ignore-download-title">{{$t('walletTopBanner.pcDownload.title')}}</p>
              <div class="ignore-download-ways download-ways-2">
                  <div v-for="(item,index) in $t('walletTopBanner.pcDownload.item')" :key="index" class="ignore-download-way">
                      <img :src="'../../static/image/' + item.imgUrl">
                      <span class="ignore-download-way-title">{{item.title}}</span>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<style scoped>
.wallet-banner{
    padding-left: 300px;
    position: relative;
    margin-bottom: 290px;
}
.ignore-wallet-banner{
    padding-top: 186px;
    
    width: 100%;
    height: 680px;
    opacity: 0.7;
    background: #171C2B;
    background-size: cover;
    background-position: center;
    background-image: url(../../static/image/mask-banner.png);
}

.logo-img{
    left: 1090px;
    top: 80px;
    width: 400px;
    height: 800px;
    background-image: url(../../static/image/mask-app.png);
    position: absolute;
    background-position: center;
    background-size: cover;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 36px;
    color: #FFFFFF;
    line-height: 50px;
    margin-bottom: 10px;
}
.text{
    max-width: 600px;
}
.ignore-text{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    margin-top: 10px;
}
.ignore-download-box{
    margin-top: 65px;
    width: 600px;
}
.phone-download,
.ignore-pc-download{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.ignore-pc-download{
    margin-top: 30px;
}
.ignore-download-title{
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
}
.ignore-download-ways{
    margin-top: 15px;
    display: flex;
    justify-content: center;
}
.download-ways-2{
    justify-content: flex-start;
}
.ignore-download-way{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #1C1C1C;
    border-radius: 6px;
    margin-right: 30px;
    cursor: pointer;
}
.ignore-download-way:last-child{
    margin: 0;
}
.ignore-download-way:hover{
    background: #1A70DD;
}
.ignore-download-way-title{
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
    line-height: 33px;
    margin-left: 10px;
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
