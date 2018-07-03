<template>
<!--首页  什么是GAIA-->
<section class="what-is-gaia" >
    <h2 class="ignore-title">{{$t('indexWhatIsGAIA.title')}}</h2>
    <DividingLine></DividingLine>
    <div id="what-is-gaia" :class="isShow ? 'tansition-container fade-in-up' : 'tansition-container'">
        <div v-for="(item,index) in $t('indexWhatIsGAIA.item')" :key="index" class="item-card" >
            <div :style="{backgroundImage:'url(/pcImage/' + item.imgUrl + ')'}" class="ignore-card-img card-img" :alt="item.bgAlt" :title="item.bgTitle"></div>
            <span class="ignore-item-text">{{item.text}}</span>
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
.what-is-gaia{
    width: 100%;
    padding: 150px  297px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 42px;
    color: #333333;
    line-height: 59px;
    margin-bottom: 10px;
}
.tansition-container{
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(200px);
    animation-fill-mode:forwards;
}
.item-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
}
.item-card:last-child{
    margin: 0;
}
.card-img{
    width: 380px;
    height: 250px;
}
.ignore-card-img{
    margin-bottom: 10px;
    background-position: center;
    background-size: cover;
}
.ignore-item-text{
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    text-align: center;
}
@media only screen and (max-width: 1199px) {
    .what-is-gaia{
        padding-left: 10vw;
        padding-right: 10vw;
    }
    .ignore-card-img{
        width: 260px;
        height: 171px;
    }
    .ignore-title{
        font-size: 38px;
        line-height: 50px;
    }
    .ignore-item-text{
        font-size: 15px;
        line-height: 20px;
    }
    
}
@media only screen and (max-width: 991px) {
    
    .ignore-card-img{
        width: 200px;
        height: 131.57px;
    }
    .ignore-title{
        font-size: 36px;
        line-height: 40px;
    }
    .ignore-item-text{
        font-size: 14px;
        line-height: 19px;
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
            isShow:false
        }
    },
    mounted(){
    this.$nextTick(function () {
        window.addEventListener('scroll',this.handleScroll)
    })
    },
    methods:{
    handleScroll () {
        let wH = window.innerHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let top = document.querySelector('#what-is-gaia').offsetTop
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
        