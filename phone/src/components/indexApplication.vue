<template>
<!--首页  链上应用-->
  <section class="application">
      <h6 class="title">{{$t('indexApplication.title')}}</h6>
      <DividingLine></DividingLine>
      <div :class="isShow ? 'application-container fade-in-up' : 'application-container'" id="application-container" >
        <div class="item-card" :key="index" v-for="(item,index) in $t('indexApplication.item')" >
            <div class="img" :style="{backgroundImage:'url(../../static/phoneImage/' + item.imgUrl + ')'}"></div>
            <div class="item-title">{{item.title}}</div>
            <div class="item-text">{{item.text}}</div>
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
    padding: 60px 0 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
}
.title{
    font-family: "PingFangSC-Medium";
    font-size: 24px;
    color: #333333;
    line-height: 33px;
    padding: 0 10px;
    text-align: center;
}
.application-container{
    display: flex;
    flex-direction: column;
    
    opacity: 0;
    transform: translateY(200px);
    animation-fill-mode:forwards;
}
.img{
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
}
.item-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 51px;
}

.item-title{
    font-size: 20px;
    color: #333333;
    text-align: center;
    line-height: 28px;
    margin-top: 21px
}
.item-text{
    font-size: 12px;
    color: #666666;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 24px;
    margin-top: 10px;
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