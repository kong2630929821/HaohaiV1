<template>
<!--路线图  一个阶段-->
<div :class="folded ? 'stage-item stage-item-no-shadow' : 'stage-item'" >
    <div class="stage-header" @click="clickItem">
        <img :src="'/phone/static/image/' + stage.imgUrl" class="stage-img">
        <p class="stage-name">{{stage.title}}</p>
        <img src="/phone/static/image/triangular.png" :class="folded ? 'triangular triangular-rotate' : 'triangular'">
    </div>
    <div :class="folded ? 'route-map-container' : 'route-map-container route-map-hidden'">
        <div class="route-map">
            <div class="top-route ignore-top-route">
                <span class="dot ignore-dot" v-if="stage.item.length === 0"></span>
            </div>
            <div class="content-box">
                <div class="one-stage ignore-one-stage" v-for="(item,index) in stage.item" :key="index">
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                    <div class="top-box">
                        <span class="progress-text">{{$t('routeMapStages.progressText')}}</span>
                        <span class="percentage">{{item.percentage}}%</span>
                    </div>
                    <div class="progress-box">
                        <div class="ignore-progress-bg"></div>
                        <div class="ignore-progress-active" :style="{width:item.percentage * 200 / 375 + 'vw'}"></div>
                    </div>
                    <span class="stage-dot ignore-stage-dot"></span>
                </div>
            </div>
        </div>
        <div class="stage-summary">{{stage.text}}</div>
    </div>
</div>
</template>
<style scoped>
.stage-item {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  border-radius: 4px;
  padding: 8px 16px 8px 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
}
.stage-item-no-shadow {
  box-shadow: none;
}
.stage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stage-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 222;
}
.stage-name {
  font-size: 18px;
  color: #b0b2c3;
  line-height: 25px;
  margin-left: 17px;
  flex: 1 0 0;
}
.triangular {
  transition: all 0.2s linear;
}
.triangular-rotate {
  transform: rotate(180deg);
}
.route-map-container {
  overflow: hidden;
  transition: all 0.5s linear;
}
.route-map-hidden {
  height: 0;
}
.route-map {
  padding-left: 32px;
}
.top-route {
  z-index: 111;
  padding-left: 33px;
  height: 42px;
  display: flex;
  flex-direction: column;

  position: relative;
}
.ignore-top-route,
.ignore-one-stage {
  border-left: 2px solid #1a70dd;
}
.short-line {
  width: 2px;
  height: 42px;
  background-color: #1a70dd;
  margin-top: -10px;
}
.ignore-dot,
.ignore-stage-dot {
  background: #1a70dd;
  border: 2px solid #ffffff;
  width: 14px;
  height: 14px;
  box-sizing: content-box;
  border-radius: 50%;
  z-index: 999;
}
.ignore-dot {
  position: absolute;
  bottom: -6px;
  left: -10px;
}
.content-box {
}
.one-stage {
  padding-left: 24px;
  padding-bottom: 42px;
  position: relative;
  margin-top: -10px;
}
.ignore-one-stage:last-child {
  border: 2px solid transparent;
}
.ignore-stage-dot {
  position: absolute;
  left: -10px;
  top: 7px;
}
.title {
  font-family: "PingFangSC-Medium";
  font-size: 18px;
  color: #333333;
  line-height: 25px;
}
.text {
  font-size: 12px;
  color: #333333;
  line-height: 17px;
}

.top-box {
  font-size: 10px;
  color: #333333;
  line-height: 14px;
  margin-top: 8px;
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.progress-text,
.percentage {
  font-size: 10px;
  color: #333333;
  line-height: 14px;
}
.progress-box {
  width: 200px;
  position: relative;
  margin-top: 8px;
}
.ignore-progress-bg {
  height: 2px;
  width: 100%;
  background-color: #ddd;
}
.ignore-progress-active {
  background-image: linear-gradient(-90deg, #00dcff 0%, #c9c738 100%);
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
}
.stage-summary {
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  line-height: 20px;
  line-height: 20px;
  width: 100%;
  padding: 8px;
  background: #203260;
  margin-bottom: 70px;
  margin-top: 20px;
}
</style>
<script>
import $ from "jquery";
export default {
  props: ["stage", "folded", "index","lastIndex"],
  data() {
    return {
      curOffsetTop: 0
    };
  },
  mounted() {
    let curStageItem = $(".stage-item")[this.index];
    this.curOffsetTop = $(curStageItem).offset().top;
  },
  methods: {
    clickItem() {
      if (this.folded) {
        this.$emit("clickRouteMap", this.index);
        return;
      }
      let $routeMapHeight = $( ":not('.route-map-hidden').route-map-container").outerHeight(true);
      if (!$routeMapHeight) {
        //第一次展开
        this.$emit("clickRouteMap", this.index);
        return;
      }
      //let curStageItem = $(".stage-item")[this.index];
      let scrollTop = $(document).scrollTop();
      //console.log(window.innerHeight);
      //console.log("路线图高度=", $routeMapHeight);
      //console.log("滑动高度=", scrollTop);
      //console.log("当前item高度=", $(curStageItem).outerHeight(true));
      //console.log("当前item距离顶部的高度=", $(curStageItem).offset().top);
      this.$emit("clickRouteMap", this.index);
      if(this.index < this.lastIndex){//从下往上进行展开
          return;
      }
      let t = scrollTop - $routeMapHeight;
      if (t < 0 ) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, scrollTop - $routeMapHeight);
      }
    },
    currentShow() {
      if (!this.folded) {
        return;
      }
      let curStageItem = $(".stage-item")[this.index];
      let scrollTop = $(document).scrollTop();
      console.log(scrollTop);
      //window.scrollTo(0,scrollTop - $(curStageItem).outerHeight(true))
    }
  },
  watch: {
    //"folded":"currentShow"
  }
};
</script>

