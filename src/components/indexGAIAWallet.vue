<template>
  <section class="wallet">
      <h6 class="ignore-title">{{$t('indexGAIAWallet.title')}}</h6>
      <DividingLine></DividingLine>
      <p class="ignore-text">{{$t('indexGAIAWallet.text')}}</p>
      <div class="ignore-download-text">{{$t('indexGAIAWallet.downloadText')}}</div>
  </section>
</template>
<style scoped>
.wallet{
    padding: 170px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.7;
    background-image: url(../../static/image/wallet.png);
    background-size: cover;
    background-position: center;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 42px;
    color: #ffffff;
    line-height: 59px;
    margin-bottom: 10px;
}
.ignore-text{
    font-size: 16px;
    color: #FFFFFF;
    line-height: 22px;
    margin-top: 10px;
}
.ignore-download-text{
    background: #FFFFFF;
    border-radius: 100px;
    width: 300px;
    height: 60px;
    font-size: 24px;
    color: #1A70DD;
    line-height: 33px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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