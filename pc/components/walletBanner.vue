<template>
<!--钱包  banner-->
    <section class="ignore-wallet-banner wallet-banner" :alt="$t('walletTopBanner.bgAlt')" :title="$t('walletTopBanner.bgTitle')">
        <div class="logo-img ignore-logo-img" :style="{backgroundImage:'url(/pcImage/' + logoImg + ')'}"></div>
        <div>
            <h1 class="ignore-title">{{$t('walletTopBanner.title')}}</h1>
            <DividingLine></DividingLine>
            <div class="ignore-text text">{{$t('walletTopBanner.text')}}</div>
        </div>
        <div class="ignore-download-box">
            <div class="phone-download">
                <p class="ignore-download-title">{{$t('walletTopBanner.phoneDownload.title')}}</p>
                <div class="ignore-download-ways">
                    <div v-for="(item,index) in $t('walletTopBanner.phoneDownload.item')" :key="index" class="ignore-download-way">
                        <a :href="item.link" class="ignore-download-link">
                        <img :src="'/pcImage/' + item.imgUrl" :alt="item.bgAlt" :title="item.bgTitle">
                        <span class="ignore-download-way-title">{{item.title}}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="ignore-pc-download">
                <p class="ignore-download-title">{{$t('walletTopBanner.pcDownload.title')}}</p>
                <div class="ignore-download-ways download-ways-2">
                    <div v-for="(item,index) in $t('walletTopBanner.pcDownload.item')" :key="index" class="ignore-download-way">
                        <a :href="item.link" class="ignore-download-link">
                        <img :src="'/pcImage/' + item.imgUrl" class="ignore-tag-img" :alt="item.bgAlt" :title="item.bgTitle">
                        <span class="ignore-download-way-title">{{item.title}}</span>
                        </a>
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
    background: #171C2B;
    background-size: cover;
    background-position: center;
    background-image: url(/pcImage/mask-banner.jpg);
}

.logo-img{
    left: 1090px;
    width: 442px;
    height: 860px;
    position: absolute;
    background-position: center;
    background-size: cover;
}
.ignore-logo-img{
    top: 80px;
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
.ignore-download-link{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.ignore-download-way{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
@media only screen and (max-width: 1199px) {
    .text{
        max-width: 40vw;
    }
    .ignore-title{
        font-size: 34px;
    }
    .ignore-download-way-title{
        font-size: 22px;
    }
    .wallet-banner{
        padding-left: 10vw;
    }
    .ignore-logo-img{
        width: 310px;
        height: 602px;
        top: 250px;
        margin-left: 20px;
    }
}
@media only screen and (max-width: 991px) {
    
    .ignore-title{
        font-size: 32px;
    }
    .ignore-text{
        font-size: 13px;
    }
    .ignore-download-way-title{
        font-size: 20px;
    }
    .ignore-download-box{
        width: 400px;
    }
    .ignore-download-way{
        margin-right: 15px;
        
    }
    .ignore-download-link{
        padding: 6px;
    }
    .ignore-tag-img{
        width: 30px;
        height: 30px;
    }
    .ignore-logo-img{
        width: 248px;
        height: 481.6px;
        top: 290px;
    }
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
        