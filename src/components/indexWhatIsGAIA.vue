<template>
<section class="what-is-gaia" >
  <h6 class="ignore-title">{{$t('indexWhatIsGAIA.title')}}</h6>
  <DividingLine></DividingLine>
  <transition-group  enter-active-class="animated fadeInUp" class="tansition-container" id="what-is-gaia">
      <div v-for="(item,index) in $t('indexWhatIsGAIA.item')" :key="index" class="item-card" v-show="whatIsGAIAShow">
          <div :style="{backgroundImage:'url(../../static/image/' + item.imgUrl + ')'}" class="card-img"></div>
          <span class="ignore-item-text">{{item.text}}</span>
      </div>
  </transition-group>
</section>
</template>
<style scoped>
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
    justify-content: space-between;
}
.item-card{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-img{
    width: 380px;
    height: 250px;
    margin-bottom: 10px;
    background-position: center;
    background-size: cover;
}
.ignore-item-text{
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    text-align: center;
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  },
  props:['whatIsGAIAShow']
}
</script>
