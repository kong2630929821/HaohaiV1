<template>
  <section class="application">
      <h6 class="ignore-title">{{$t('indexApplication.title')}}</h6>
      <DividingLine></DividingLine>
      <div class="application-container">
          <div class="item-card" :key="index" v-for="(item,index) in $t('indexApplication.item')" >
              <div class="ignore-img" :style="{backgroundImage:'url(../../static/image/' + item.imgUrl + ')'}"></div>
              <div class="ignore-item-title">{{item.title}}</div>
              <div class="ignore-item-text">{{item.text}}</div>
          </div>
      </div>
  </section>
</template>
<style scoped>
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
    margin-top: 150px;
}
.ignore-img{
    width: 80px;
    height: 80px;
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
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  }
}
</script>