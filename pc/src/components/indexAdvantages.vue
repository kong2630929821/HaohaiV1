<template>
<!--首页  3大优势-->
  <section class="advantages">
      <h6 class="ignore-title">{{$t('indexAdvantages.title')}}</h6>
      <DividingLine></DividingLine>
      <div :class="isShow[index] ? 'item-card advantage-item-card fade-in-up' : 'item-card advantage-item-card'" :key="index" v-for="(item,index) in $t('indexAdvantages.item')">
          <div :class="index%2 === 1 ? 'order-1 advantage-img' : 'order-0 advantage-img' " :style="{backgroundImage:'url(/pc/static/image/' + item.imgUrl + ')'}" ></div>    
          <div :class="index%2 === 1 ? 'order-2' : ''" :key="index" >
              <div class="ignore-item-title">{{item.title}}</div>
              <DividingLine></DividingLine>
              <div class="ignore-item-text item-text">{{item.text}}</div>
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
    padding: 80px 0 198px;
    background: #203260;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 42px;
    color: #FFFFFF;
    line-height: 59px;
    margin-bottom: 10px;
}
.item-card{
    margin-top: 220px;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: translateY(300px);
    animation-fill-mode:forwards;
}
.advantage-img{
    width: 300px;
    height: 300px;
    background-position: center;
    background-size: cover;
    margin-left: 100px;
}

.ignore-item-title{
    font-size: 24px;
    color: #FFFFFF;
    line-height: 33px;
    margin-bottom: 10px;
}
.item-text{
    max-width: 550px;
}
.ignore-item-text{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    margin-top: 10px;
}
.order-0{
   order: 0;
   margin-right: 200px;
}
.order-1{
    order: 1;
}
.order-2{
    margin-left: -100px;
    margin-right: 74px;
}
@media only screen and (max-width: 1199px) {
    .ignore-title{
        font-size: 38px;
        line-height: 50px;
    }
    .ignore-item-title{
        font-size: 22px;
        line-height: 30px;
    }
    .advantage-img{
        width: 18vw;
        height: 18vw;
    }
    .ignore-item-text{
        font-size: 13px;
        line-height: 19px;
        max-width: 35vw;
    }
}
@media only screen and (max-width: 991px) {

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
