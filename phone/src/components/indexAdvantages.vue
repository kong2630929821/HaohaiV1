<template>
<!--首页  3大优势-->
  <section class="advantages">
      <h6 class="title">{{$t('indexAdvantages.title')}}</h6>
      <DividingLine></DividingLine>
      <div :class="isShow[index] ? 'item-card advantage-item-card fade-in-up' : 'item-card advantage-item-card'" :key="index" v-for="(item,index) in $t('indexAdvantages.item')">
          <div class="advantage-img" :style="{backgroundImage:'url(/phone/static/image/' + item.imgUrl + ')'}" :alt="item.bgAlt" :title="item.bgTitle"></div>    
          <div class="" :key="index" >
              <div class="item-title">{{item.title}}</div>
              <DividingLine></DividingLine>
              <div class="item-text">{{item.text}}</div>
          </div>
      </div>
  </section>
</template>
<style scoped>
@keyframes fadeInUp {
    0% {opacity: 0;transform: translateY(300px);}
    100% {opacity: 1;transform: translateY(0px);}
}
.fade-in-up{
    animation: fadeInUp .5s;
}
.advantages{
    padding: 60px 40px;
    background: #203260;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    font-family: "PingFangSC-Medium";
    font-size: 24px;
    color: #FFFFFF;
    line-height: 33px;
    text-align: center;
}
.item-card{
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(300px);
    animation-fill-mode:forwards;
}
.advantage-img{
    width: 142px;
    height: 142px;
    background-position: center;
    background-size: cover;
}

.item-title{
    font-size: 24px;
    color: #FFFFFF;
    line-height: 33px;
    margin-top: 58px;
}
.item-text{
    max-width: 550px;
}
.item-text{
    font-size: 12px;
    color: #FFFFFF;
    line-height: 17px;
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
          isShow:[false,false,false]
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
      let doms = document.querySelectorAll('.advantage-item-card')
      let tops = [];
      for(let i = 0; i < doms.length; i++){
          tops.push(doms[i].offsetTop)
          if ( doms[i].offsetTop < scrollTop + 4 * wH / 5) {
            this.$set(this.isShow, i,true);
          }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
