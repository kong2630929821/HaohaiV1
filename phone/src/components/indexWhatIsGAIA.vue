<template>
<!--首页  什么是GAIA-->
<section class="what-is-gaia" >
  <h2 class="title">{{$t('indexWhatIsGAIA.title')}}</h2>
  <DividingLine></DividingLine>
  <div id="what-is-gaia" :class="isShow ? 'tansition-container fade-in-up' : 'tansition-container'">
      <div v-for="(item,index) in $t('indexWhatIsGAIA.item')" :key="index" class="item-card" >
          <div :style="{backgroundImage:'url(../../static/phoneImage/' + item.imgUrl + ')'}" class="card-img" :alt="item.bgAlt" :title="item.bgTitle"></div>
          <span class="item-text">{{item.text}}</span>
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
    padding: 60px  24px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ECEFF1;
}
.title{
    font-family: "PingFangSC-Light";
    font-size: 24px;
    color: #333333;
    line-height: 33px;
}
.tansition-container{
    width: 100%;
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(200px);
    animation-fill-mode:forwards;
}
.item-card{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}
.item-card:last-child{
    margin: 0;
}
.card-img{
    width: 80px;
    height: 53px;
    background-position: center;
    background-size: cover;
    margin-right: 16px;
    flex-shrink: 0;
}

.item-text{
    font-size: 16px;
    color: #333333;
    line-height: 22px;
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
