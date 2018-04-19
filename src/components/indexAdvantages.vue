<template>
  <section class="advantages">
      <h6 class="ignore-title">{{$t('indexAdvantages.title')}}</h6>
      <DividingLine></DividingLine>
      <!--
      <transition-group  
        enter-active-class="animated fadeInUp" 
        class="tansition-container" 
        v-for="(item,index) in $t('indexAdvantages.item')" 
        appear
        :key="index" 
        :id="'advantages-card-' + index">
      <div class="item-card" :key="index" v-if="advantageShow0">
          <div :class="index%2 === 1 ? 'order-1 advantage-img' : 'order-0 advantage-img' " :style="{backgroundImage:'url(../../static/image/' + item.imgUrl + ')'}" ></div>    
          <div :class="index%2 === 1 ? 'order-2' : ''" :key="index" >
              <div class="ignore-item-title">{{item.title}}</div>
              <DividingLine></DividingLine>
              <div class="ignore-item-text item-text">{{item.text}}</div>
          </div>
      </div>
      </transition-group>
      -->
      <transition-group  
        enter-active-class="animated fadeInUp" 
        appear
        id="advantages-card-0">
      <div class="item-card" :key="0" v-show="advantageShow0">
          <div class="order-0 advantage-img" :style="{backgroundImage:'url(../../static/image/' + $t('indexAdvantages.item[0]').imgUrl + ')'}" ></div>    
          <div>
              <div class="ignore-item-title">{{$t('indexAdvantages.item[0]').title}}</div>
              <DividingLine></DividingLine>
              <div class="ignore-item-text item-text">{{$t('indexAdvantages.item[0]').text}}</div>
          </div>
      </div>
      </transition-group>

      <transition-group  
        enter-active-class="animated fadeInUp" 
        appear
        id="advantages-card-1">
      <div class="item-card" :key="1" v-show="advantageShow1">
          <div class="order-1 advantage-img" :style="{backgroundImage:'url(../../static/image/' + $t('indexAdvantages.item[1]').imgUrl + ')'}" ></div>    
          <div class="order-2" >
              <div class="ignore-item-title">{{$t('indexAdvantages.item[1]').title}}</div>
              <DividingLine></DividingLine>
              <div class="ignore-item-text item-text">{{$t('indexAdvantages.item[1]').text}}</div>
          </div>
      </div>
      </transition-group>

      <transition-group  
        enter-active-class="animated fadeInUp" 
        appear
        id="advantages-card-2">
      <div class="item-card" :key="2" v-show="advantageShow2">
          <div class="order-0 advantage-img" :style="{backgroundImage:'url(../../static/image/' + $t('indexAdvantages.item[2]').imgUrl + ')'}" ></div>    
          <div>
              <div class="ignore-item-title">{{$t('indexAdvantages.item[2]').title}}</div>
              <DividingLine></DividingLine>
              <div class="ignore-item-text item-text">{{$t('indexAdvantages.item[2]').text}}</div>
          </div>
      </div>
      </transition-group>
  </section>
</template>
<style scoped>
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
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  },
  props:['advantageShow0','advantageShow1','advantageShow2'],
  
}
</script>
