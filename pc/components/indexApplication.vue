<template>
    <!--首页  链上应用-->
    <section class="application">
        <h2 class="ignore-title">{{$t('indexApplication.title')}}</h2>
        <DividingLine></DividingLine>
        <div :class="isShow ? 'application-container fade-in-up' : 'application-container'" id="application-container" >
            <div class="item-card" :key="index" v-for="(item,index) in $t('indexApplication.item')" >
                <div class="ignore-img" :style="{backgroundImage:'url(/pcImage/' + item.imgUrl + ')'}" :alt="item.bgAlt" :title="item.bgTitle"></div>
                <h3 class="ignore-item-title">{{item.title}}</h3>
                <div class="ignore-item-text">{{item.text}}</div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    @keyframes fadeInUp {
        0% {opacity: 0;transform: translateY(200px);}
        100% {opacity: 1;transform: translateY(0px);}
    }
    .fade-in-up{
        animation: fadeInUp .5s;
    }
    .application{
        padding: 80px 315px 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
    }
    .ignore-title{
        font-family: "PingFangSC-Light";
        font-size: 42px;
        color: #333333;
        line-height: 59px;
        margin-bottom: 10px;
    }
    .application-container{
        display: flex;
        margin-top: 110px;
        opacity: 0;
        transform: translateY(200px);
        animation-fill-mode:forwards;
    }
    .ignore-img{
        width: 84px;
        height: 84px;
    }
    .item-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 60px;
        flex: 1 0 0;
    }
    .item-card:last-child{
        margin: 0;
    }
    .ignore-item-title{
        font-size: 24px;
        color: #333333;
        line-height: 33px;
        margin:40px 0 30px;
        text-align: center;
    }
    .ignore-item-text{
        font-size: 14px;
        color: #666666;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    @media only screen and (max-width: 1199px) {
        .application{
            padding-left: 12vw;
            padding-right: 12vw;
        }
        .ignore-title{
            font-size: 38px;
            line-height: 50px;
        }
        .ignore-item-title{
            font-size: 22px;
            line-height: 30px;
        }
        .ignore-item-text{
            font-size: 13px;
            line-height: 19px;
        }
    }
    @media only screen and (max-width: 991px) {
        .application{
            padding-left: 7vw;
            padding-right: 7vw;
        }
        .ignore-title{
            font-size: 36px;
            line-height: 40px;
        }
        .ignore-item-title{
            font-size: 20px;
            line-height: 28px;
        }
        .ignore-item-text{
            font-size: 12px;
            line-height: 17px;
        }
    }
    </style>
    <script>
    import DividingLine from './dividingLine'
    export default {
    components:{
        DividingLine
    },
    data(){
        return {
            isShow:false,
            
        }
    },
    mounted(){
        this.$nextTick(function () {
        window.addEventListener('scroll', this.handleScroll)
        })
    },
    methods:{
        handleScroll () {
        let wH = window.innerHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let top = document.querySelector('#application-container').offsetTop
        if ( top < scrollTop + 3 * wH / 4) {
            this.isShow = true
        }
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>