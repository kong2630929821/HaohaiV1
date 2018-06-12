<template>
  <!--关于我们  弹出框-->
  <div class="mask" @click="clickMask">
    <div class="pop-box">
        <div class="person-img" :style="{backgroundImage:'url(../../static/phoneImage/' + selfIntroduction.imgUrl + ')'}"></div>
        <p class="person-name">{{selfIntroduction.name}}</p>
        <p class="person-job">{{selfIntroduction.job}}</p>
        <div class="person-text">{{selfIntroductionText}}</div>
    </div>
  </div>
</template>
<style scoped>
@keyframes an{
    0% {width:0;height:0;}
    100%  {width:295px;height:426px}
}
.mask{
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 555;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.pop-box{
    width: 0;
    height: 0;
    background: #fff;
    padding: 20px 18px 17px 17px;
    z-index: 888;
    box-shadow: 0 2px 4px 0 rgba(50,50,93,0.10);
    transition: all .5s linear;
    animation: an .3s ease-in-out;
    animation-fill-mode:forwards;
    -webkit-transition: all .5s linear;
    -webkit-animation: an .3s ease-in-out;
    -webkit-animation-fill-mode:forwards;
    overflow: hidden;
}

.person-img{
    width: 100%;
    height: 170px;
    background-size: cover;
    background-position: center;
}
.person-name{
    font-family: "PingFangSC-Light";
    font-size: 24px;
    color: #1A70DD;
    line-height: 33px;
    margin-top: 11px;
}
.person-job{
    font-family: "PingFangSC-Light";
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    padding-bottom: 10px;
    margin-top: 7px;
    border-bottom: 1px solid #1A70DD;
}
.person-text{
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    margin-top: 17px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    white-space: pre-wrap;
    max-height: 122px;
}
</style>
<script>
import $ from 'jquery'
export default {
  props:['selfIntroduction','isShow'],
  data(){
      return {
          docScrollTop:0
      }
  },
  computed:{
      selfIntroductionText(){
          return this.selfIntroduction.text.substr(0,100)
      }
  },
  methods:{
      clickMask(){
          this.$emit('hiddenCard');
          $("body").css({
                position:"relative",
                marginTop:0,
          });  
          window.scrollTo(0,this.docScrollTop)
      }
  },
  mounted(){
    let doc = $(document);
    this.docScrollTop = doc.scrollTop();
    $("body").css({
        position:"fixed",
        marginTop:-this.docScrollTop,
    });  
  }
}
</script>
