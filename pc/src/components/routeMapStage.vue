<template>
<!--路线图  一个阶段-->
  <div class="stage-container">
      <div class="stage-summary ignore-stage-summary">{{stage.text}}</div>
      <div class="ignore-stage-box">
          <p class="ignore-stage-name">{{stage.title}}</p>
          <img :src="'/pc/static/image/' + stage.imgUrl" class="ignore-stage-img" :alt="stage.bgAlt" :title="stage.bgTitle">
          <div class="top-route">
            <span class="ignore-short-line"></span>
            <span class="ignore-dot"></span>
          </div>
          <div class="ignore-one-stage" v-for="(item,index) in stage.item" :key="index">
              <div class="ignore-left-box">
                  <p class="ignore-left-title">{{item.title}}</p>
                  <p class="ignore-left-text">{{item.text}}</p>
              </div>
              <div class="ignore-right-box">
                  <div class="ignore-top-box">
                      <span class="ignore-progress-text">{{$t('routeMapStages.progressText')}}</span>
                      <span class="ignore-percentage">{{item.percentage}}%</span>
                  </div>
                  <div class="ignore-progress-box">
                      <div class="progress-bg"></div>
                      <div class="progress-active" :style="{width:item.percentage * 2 + 'px'}"></div>
                  </div>
              </div>  
              <span class="ignore-dot ignore-stage-dot"></span>
          </div>
          
      </div>
  </div>
</template>
<style scoped>
.stage-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.stage-summary{
    width: 950px;
    white-space: pre-wrap;
    background: #203260;
}
.ignore-stage-summary{
    padding: 20px 50px;
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
}
.ignore-stage-box{
    width: 100%;
    margin-top: 50px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.ignore-stage-name{
    font-size: 18px;
    color: #333333;
    line-height: 25px;
}
.ignore-stage-img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 10px;
    z-index: 999;
}
.top-route{
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 666;
}
.ignore-short-line{
    width: 2px;
    height: 62px;
    background-color: #1A70DD;
    margin-top: -10px;
}
.ignore-long-line{
    height: 95px;
    margin: 0;
}
.ignore-dot{
    background: #1A70DD;
    border: 2px solid #FFFFFF;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    z-index: 999;
}
.ignore-stage-dot{
    position: absolute;
    bottom: 0;
    left: 393px;
}
.ignore-one-stage{
    height: 130px;
    display: flex;
    margin-top: -20px;
    position: relative;
}
.ignore-one-stage:last-child .ignore-left-box,
.ignore-one-stage:last-child .ignore-right-box{
    border: none;
}
.ignore-one-stage:last-child .ignore-stage-dot{
    display: none;
}
.ignore-left-box{
    width: 400px;
    padding-right: 32px;
    border-right: 1px solid #1A70DD;
}

.ignore-left-title{
    font-family: ".AppleSystemUIFont";
    font-size: 18px;
    color: #333333;
    text-align: right;
    line-height: 21px;
}
.ignore-left-text{
    font-size: 12px;
    color: #333333;
    text-align: right;
    line-height: 17px;
    margin-top: 8px;
}
.ignore-right-box{
    width: 400px;
    padding-left: 32px;
    padding-top: 5px;
    border-left: 1px solid #1A70DD;
}
.ignore-top-box{
    width: 200px;
    font-size: 12px;
    color: #333333;
    line-height: 17px;
    display: flex;
    padding: 0 3px;
    justify-content: space-between;
}
.ignore-progress-box{
    width: 200px;
    position: relative;
    margin-top: 10px;
}
.progress-bg{
    height: 2px;
    width: 100%;
    background-color: #ddd;
}
.progress-active{
    background-image: linear-gradient(-90deg, #00DCFF 0%, #C9C738 100%);
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
}
@media only screen and (max-width: 1199px) {
    .stage-summary{
        width: 80vw;
    }
    .ignore-stage-summary{
        font-size: 14px;
    }
}
@media only screen and (max-width: 991px) {
    .ignore-left-box,
    .ignore-right-box{
        width: 300px;
    }
    .ignore-dot{
        left: 293px;
    }
    
}
</style>
<script>
export default {
  props:['stage'],
 
}
</script>

