<template>
<!--首页  钱包-->
    <section class="wallet" :alt="$t('indexGAIAWallet.bgAlt')" :title="$t('indexGAIAWallet.bgTitle')">
        <h2 class="title">{{$t('indexGAIAWallet.title')}}</h2>
        <DividingLine></DividingLine>
        <p class="text">{{$t('indexGAIAWallet.text')}}</p>
        <div class="download-text">{{$t('indexGAIAWallet.downloadText')}}</div>
    </section>
</template>
<style scoped>
.wallet{
    padding: 46px 0 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/phoneImage/wallet.png);
    background-size: cover;
    background-position: center;
}
.title{
    font-family: "PingFangSC-Medium";
    font-size: 24px;
    color: #ffffff;
    line-height: 33px;
}
.text{
    font-size: 12px;
    color: #FFFFFF;
    line-height: 17px;
}
.download-text{
    background: #FFFFFF;
    border-radius: 100px;
    width: 200px;
    height: 45px;
    font-size: 18px;
    color: #1A70DD;
    line-height: 25px;
    margin-top: 28px;
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