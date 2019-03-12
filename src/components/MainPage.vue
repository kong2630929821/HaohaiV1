<template>
  <div class="m-wrapper">
    <div class="m-body-first">
      <div class="mbf-f">

        <div class="mbf-f-box">
          <img class="hao_hai_dialog" src="../../static/image/group_18@2x.png"/>
          <span>好玩又赚钱</span>
          <div class="mbf-f-er">
            <span>- 下载APP</span>
            <img  src="../../static/image/android@2x.png"/>
            <div class="download-ico-android" >
              <div >
                <img   src="../../static/image/icon-android@2x.png">
                <span>android</span>
              </div>
            </div>

          </div>
          <div class="mbf-f-iso">
            <span></span>
            <img src="../../static/image/ios@2x.png"/>
            <div class="download-ico-ios">
              <div>
                <img  src="../../static/image/icon-ios@2x.png">
                <span>ios</span>
              </div>
            </div>

          </div>
        </div>


        <img class="mbf-f-phone" src="../../static/image/phone-model@2x.png">





      </div>
      <div class="mbf-f-box2">
        <ul style="display: flex;flex-wrap: wrap">
          <ul class="mbs-item">
            <li></li>
            <li><span>玩游戏</span></li>
            <li>无需下载轻松在线畅玩 多种类型满足不同喜好 区块链游戏无门槛体验</li>
          </ul>
          <ul class="mbs-item">
            <li></li>
            <li>看小说</li>
            <li>海量正版小说免费看 最新最热小说抢先看 小说作者资讯全包罗</li>
          </ul>
          <ul class="mbs-item">
            <li></li>
            <li>逛圈子</li>
            <li>结交小说游戏同好好友 单人群组论坛自由畅聊 发红包发语音沟通无碍</li>
          </ul>
          <ul class="mbs-item">
            <li></li>
            <li>能赚钱</li>
            <li>做任务得嗨豆 嗨豆领分红 分红可提现</li>
          </ul>
        </ul>
        <div class="mbf-f-box3">
          <img class="group-big"   src="../../static/image/group-big@2x.png"/>
          <img class="group-small"  src="../../static/image/group-small@2x.png"/>
          <ul style="position: relative">
            <li >
              <div class="haidou-hef"><a href="#">嗨豆</a></div>
              <div class="haidou-hint">得ETH分红</div>
            </li>
            <li class="haidou">
              <div class="haidou-hef"><a href="#">碎银</a></div>
              <div class="haidou-hint"> 游戏必备</div>
            </li>
            <li class="haidou">
              <div class="haidou-hef"><a href="#">免费机会</a></div>
              <div class="haidou-hint">尽情玩</div>
            </li>
          </ul>


        </div>

      </div>
    </div>
    <div class="bg-wave"></div>
    <div class="m-body-second">
      <div class="m-body-second-wrapper">
        <div class="sec-top">
          <div style="display: flex;">
            <div>
              <div class="sec-join-us">- 加入我们</div>
              <div class="sec-another-href">第三方接入</div>
              <div class="sec-info">区块链DApp无需任何开发，只需要给一个链接，即能接入成功</div>
            </div>
          </div>

          <div>
            <div class="sec-btn-later">稍后</div>
          </div>
        </div>
        <div class="sec-second">
          <div class="sec-second-item">
            <img class="sec-second-item-img" src="../../static/image/link01@2x.png">
            <div class="sec-second-item-text">
              <div class="sec-second-item-title">快捷登录</div>
              <div class="sec-second-item-info">一键登录，简化繁琐流程，同样安全保险</div>
            </div>
          </div>
          <div class="sec-second-item">
            <img class="sec-second-item-img" src="../../static/image/link02.png">
            <div class="sec-second-item-text">
              <div class="sec-second-item-title">挖矿赚钱</div>
              <div class="sec-second-item-info">接入传统H5游戏和区块链DApp游戏</div>
            </div>
          </div>
          <div class="sec-second-item">
            <img class="sec-second-item-img" src="../../static/image/link03.png">
            <div class="sec-second-item-text">
              <div class="sec-second-item-title">游戏资源</div>
              <div class="sec-second-item-info">游戏种类丰富，接入更多好玩游戏</div>
            </div>
          </div>
          <div class="sec-second-item">
            <img class="sec-second-item-img" src="../../static/image/link04.png">
            <div class="sec-second-item-text">
              <div class="sec-second-item-title">邀请有礼</div>
              <div class="sec-second-item-info">邀请好友得同等奖励，你有我有大家有</div>
            </div>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="sec-bottom">
          <div class="sec-bottom-QR">
            <img class="sec-bottom-QR-img" src="../../static/image/haohai-public@2x.png"/>
            <div class="sec-bottom-QR-title">关注微信公众号</div>
          </div>
          <div class="sec-bottom-dark">
            <img class="sec-bottom-dark-img"  src="../../static/image/oval@2x.png"/>
          </div>

        </div>
      </div>
    </div>
    <div class="bg-bottom-wave"></div>

  </div>
</template>

<script>
export default {
  name: 'main-page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}


.m-wrapper {
 /* width: 99vw;*/
  background-image: url("../../static/image/bg-top@2x.png") ;
  background-repeat:no-repeat;
  background-size: 100% auto;
}





.mbf-f {
  /*position: relative;
  left: 0;
  top: 0;
  width: 100vw;*/
 /*height:1493px;*/
  height:82.94vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mbf-f-phone {
  width: 24.7vw;
  height: auto;
  /*position: absolute;
  top:21.1%;
  right: 0;*/
}

.mbf-f-box {
  position: relative;
  /*left: 266px;
  top: 478px;
  //height: 688px;
  //width: 550px
  left: 0;
  top: 26.56vw;*/
  height: 37.8vw;
  width: 30.6vw

}
.mbf-f-box>span{
  font-size:5.55vw;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(255,255,255,1);
 /* line-height:140px;*/
  text-shadow:0px 0px 10px rgba(80,150,244,0.3);
}
.mbf-f-er {
  position: absolute;
  bottom:0;
  left: 0;
  width: 45.45%
}
.mbf-f-er>img{
  margin-top: 2.22vw;
  width: 100%;
  height: auto;
}
  .mbf-f-er>span{
    font-size:1.29vw;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:33px;
  }
.mbf-f-iso{
  position: absolute;
  bottom:0;
  right: 0;
  width: 45.45%;
}
.mbf-f-iso>img{
  margin-top: 2.22vw;
  width: 100%;
  height: auto;
}
.mbf-f-iso>span{
  font-size:1.5625em;
  font-family:MicrosoftYaHei;
  color:rgba(255,255,255,1);
  line-height:33px;
}

.download-ico-android {
  cursor: pointer;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-image: url("../../static/image/rectangle@2x.png");
  background-size: 100% 100%;
  background-position: center;
  position: relative;
}
.download-ico-android>div>img{
  height:26px;
}
.download-ico-android>div{
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-ico-android>div>span{
  line-height:26px;
  font-size:20px;
  margin-left: 7px;
  font-family:Roboto-Medium;
  font-weight:500;
  color:rgba(50,116,222,1);
}
.download-ico-ios {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  margin-top: 20px;
  background-image: url("../../static/image/rectangle@2x.png");
  background-size: 100% 100%;
  background-position: center;
  position: relative;
}
.download-ico-ios>div{
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-ico-ios>div>img{
  height:26px;
}
.download-ico-ios>div>span{
  line-height:26px;
  font-size:20px;
  margin-left: 7px;
  font-family:Roboto-Medium;
  font-weight:500;
  color:rgba(50,116,222,1);
}

.mbs-item {
  width: 345px;
  padding:39px ;
  box-sizing: border-box;
  box-shadow:6px 13px 38px 0px rgba(26,118,204,0.12);
  border-radius:8px;
}
.mbs-item>li{
  display: flex;

}
.mbs-item:hover{
  background:linear-gradient(45deg,rgba(49,141,230,1) 0%,rgba(56,207,231,1) 100%);
  border-radius:8px;

}
.mbs-item:hover>li:nth-child(3){
  color: white;
}


.mbs-item>li:nth-child(1){
  width: 76px;
  height: 76px;
  background-image: url("../../static/image/icon-playgame@2x.png");
  background-size: 100%;
}
.mbs-item>li:nth-child(2){
  width: 100%;
  height: 76px;
  font-size:28px;
  font-family:MicrosoftYaHei;
  color:rgba(34,34,34,1);
  line-height:76px;
}
.mbs-item>li:nth-child(3){
  font-size:20px;
  font-family:MicrosoftYaHei;
  color:rgba(153,153,153,1);
  line-height:26px;
}



.mbs-item:nth-child(2)>li:nth-child(1){
  width: 76px;
  height: 76px;
  background-image: url("../../static/image/icon-readbook@2x.png");
  background-size: 100%;
}
.mbs-item:nth-child(3)>li:nth-child(1){
  width: 76px;
  height: 76px;
  background-image: url("../../static/image/icon-han@2x.png");
  background-size: 100%;
}
.mbs-item:nth-child(4)>li:nth-child(1){
  width: 76px;
  height: 76px;
  background-image: url("../../static/image/icon-money@2x.png");
  background-size: 100%;
}




.m-body-second {
  /*width: 100vw;*/
  height: 950px;
  background:linear-gradient(180deg,rgba(49,141,230,1) 0%,rgba(56,207,231,1) 100%);
}
.sec-top{
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sec-top>div{
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mbf-f-box2 {
  /*margin-left: 26px;*/
}

.haidou-hint {
  margin-top: 13px;
  font-size:28px;
  font-family:MicrosoftYaHeiLight;
  color:rgba(153,153,153,1);
  line-height:37px;
}

.haidou-hef {
  font-size:30px;
  font-family:MicrosoftYaHeiLight;
  color:rgba(59,124,229,1);
  line-height:37px;
}

.haidou {
  margin-left: 144px;
}

.mbf-f-box3 {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mbf-f-box3 a{
  text-decoration:none;
  color:rgba(59,124,229,1);
}

.group-big{
  width: 350px;
  position: absolute;
  left: 0;
  bottom: 20px;
}
.group-small{
  width: 120px;
  position: absolute;
  right: 12px;
  top: 100px
}

.bg-wave {
 /* width: 100vw;*/
  height: 98px;
  background-image: url("../../static/image/bg-wave@2x.png");
  background-size: 100% 100%;
}

.sec-join-us {
  font-size:25px;
  font-family:MicrosoftYaHei;
  color:rgba(255,255,255,1);
  line-height:33px;
}

.sec-another-href {
  margin-top: 40px;
  font-size:56px;
  font-family:MicrosoftYaHei;
  color:rgba(255,255,255,1);
  line-height:63px;
}

.sec-info {
  width:39vw;
  height:32px;
  margin-top: 12px;
  font-size:20px;
  font-family:MicrosoftYaHei;
  color:rgba(255,255,255,1);
  line-height:31px;
}

.sec-btn-later {
  cursor: pointer;
  width:250px;
  height:75px;
  background:linear-gradient(90deg,rgba(250,203,33,1) 0%,rgba(255,244,101,1) 100%);
  box-shadow:0px 5px 10px 0px rgba(85,122,231,0.3);
  border-radius:125px;
  font-size:30px;
  font-family:MicrosoftYaHei;
  color:rgba(50,116,222,1);
  line-height:40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sec-second-item {
  overflow: hidden;
  box-sizing: border-box;
  width: 20.83vw;
  height: 56.06vw;
  margin-left: 2.3%;
}
.sec-second-item:nth-child(1){
  margin-left: 0
}


.sec-second {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sec-bottom {
  height: 468px;
  position: relative;
}
.sec-bottom>div{
  width:240px;
  height:37px;
  font-size:28px;
  font-family:MicrosoftYaHei;
  color:rgba(34,34,34,1);
  line-height:37px;
}

.sec-second-item-img {
  /*width: 375px;
  height: 667px;*/
  width: 20.83vw;
  height: 37.06vw;
}

.sec-second-item-title {
  font-size:28px;
  font-family:MicrosoftYaHei;
  color:rgba(34,34,34,1);
  line-height:37px;
}

.sec-second-item-info {
  width:13.61vw;
  font-size:20px;
  margin-top: 13px;
  font-family:MicrosoftYaHei;
  color:rgba(153,153,153,1);
  line-height:26px;
}

.sec-second-item-text {
  width: 100%;
  margin-top: 3.33vw;
  margin-left:3.33vw;
}

.line {
  margin-top: 10px;
  height: 2px;
  background:rgba(204,204,204,1) ;
  width: 90%;
  margin-left: 5%;
}

.sec-bottom-QR {
  position: absolute;
  /*left: 200px;
  top: 100px;*/
  left: 14.3%;
  top: 19.1%;
  width: 250px;
  height: 270px;

}

.sec-bottom-QR-img {
  width: 250px;
  height: 250px;
}

.sec-bottom-dark {
  position: absolute;
  /*right: 209px;
  bottom: 249px;*/
  right: 20%;
  bottom: 20%;
}

.sec-bottom-dark-img {
  width: 352px;
  height: 249px;
}

.sec-bottom-QR-title {
  width: 250px;
  text-align:center
}

.hao_hai_dialog {
  position: absolute;
  /*right: -110px;
  top: -110px;
  width: 218px;
  height: 143px;*/
  right: -20%;
  top: -20%;
  width: 12.1vw;
  height: 7.94vw;
}

.bg-bottom-wave {
 /* width: 100vw;*/
  height:100px;
  background-image: url("../../static/image/bg-bottom-wave@2x.png");
  background-size: 100% 100%;
}

@media (min-width: 314px) and (max-width: 320px) {
  .mbf-f-box>span{
    font-size: 40px !important;
  }
}
@media (min-width: 768px) and (max-width: 768px) {
  .hao_hai_dialog{
    left: 115px!important;
    top: 29vw !important;
  }
  .download-ico-android{
    height: 65px !important;
  }
  .download-ico-ios{
    height: 65px !important;
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .haidou {
    margin-left: 100px!important;
  }
}

@media (min-width: 314px) and (max-width: 800px) {
  .m-body-first {
    width: 94vw;
    margin-left:3vw ;
    overflow: hidden;
  }
  .m-wrapper {
    /* width: 99vw; */
    background-image: url(../../static/image/bg-phone-bg@2x.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .m-body-second-wrapper {
    width: 100vw;
  }




  .haidou {
    margin-left: 0px;
  }
  .haidou-hef{
    font-size: 17px;
    line-height: 16px;
  }
  .haidou-hint{
    height:19px;
    margin-top: 7px;
    font-size:14px;
    font-family:MicrosoftYaHeiLight;
    color:rgba(153,153,153,1);
    line-height:19px;
  }
  /*顶部波浪*/
  .bg-wave{
    height: 50px;
    background-image: url(../../static/image/bg-top-wave-phone@2x.png)
  }
  /*顶部波浪*/
/*  中部背景*/
  .group-big{
    width:42.6vw;
    position: absolute;
    left: -4vw;
    bottom: -20px;
  }
  .group-small{
    width: 57px;
    position: absolute;
    right: 30px;
    top: 60px;
  }
  /*  中部背景*/

   /*加入我们*/
  .sec-join-us{
    height:17px;
    font-size:13px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:17px;
  }

  .sec-another-href{
    margin-top: 20px;
    height:32px;
    font-size:28px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:31px;
  }
  .sec-info{
    width: 80vw;
    height:16px;
    font-size:10px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:16px;
  }
  .sec-btn-later{
    width:125px;
    height:38px;
    font-size:15px;
  }
  .sec-top{
    height: 250px;
  flex-wrap: wrap;
  }
  .sec-top>div{
    margin-left: 30px;
    width: 100vw;
    justify-content: space-between;
  }
  /*加入我们*/


  /*轮播图*/

  .sec-second{
    flex-wrap: wrap;
    width: 100vw;
  }
  .sec-second-item{
    background: white;
    margin-left: 0;
    width: 50%;
    height: calc(88.88vw + 150px);
  }
  .sec-second-item-img{
    width: 100%;
    height: 88.88vw;
    box-shadow:3px 7px 19px 0px rgba(26,118,204,0.12);
  }
  .sec-second-item-title{
    height:19px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(34,34,34,1);
    line-height:19px;
  }
  .sec-second-item-info{
    width: calc(100% - 13px);
    font-size:10px;
    font-family:MicrosoftYaHei;
    color:rgba(153,153,153,1);
    line-height:13px;
  }
  .sec-second-item-text{
    width: 90%;
  }
  /*轮播图*/

  /*底部二维码*/
  .sec-bottom-QR-img{
    width: 33vw;
    height: 33vw;

  }
  .sec-bottom-QR{

    left: 33.5%;
    top: 28.5%;
    z-index: 2;
  }
  .sec-bottom{
    height: 64vw;
    overflow: hidden;
  }
  .sec-bottom>div{
    width: 33vw;
    height: 35vw;
  }
  .sec-bottom-dark-img{
    width: 47.2vw;
    height: 100%;
  }
  .sec-bottom-QR-title{
    width: 33vw;
    height:19px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(34,34,34,1);
    line-height:19px;
  }
  .sec-bottom-dark{
    bottom: 0;
  }
    /*底部二维码*/


  .download-ico-ios{

    height: 38px
  }
  .download-ico-android{

    height: 38px
  }
  .download-ico-android>div>span{
    font-size: 14px
  }
  .download-ico-ios>div>span{
    font-size: 14px
  }

  .mbs-item{
    margin-left: 10px;
    width: calc(94vw/2 - 10px) !important;
    padding: 10px;
  }

  .mbs-item>li:nth-child(2){
    margin-top: 10px;
    font-size:14px;
    height:19px;
    line-height:20px;
  }
  .mbs-item>li:nth-child(3){
    margin-top: 7px;
    font-size:12px;
    line-height:14px;
  }
  /*好玩又赚钱*/


  .mbf-f{
    height: 264vw !important;
    display: flex;
    flex-wrap: wrap;
  }

  .mbf-f-box {
    position: relative ;
    height: 120vw;
    width: 68%;
    margin-left: 16%;
  }
  .mbf-f-box2 {
    margin-top: 61px;
  }
  .mbf-f-box3{
    height: 317px;
  }
  .hao_hai_dialog{
    top: 24vw;
    right:-38px;
    width: 109px;
    height: 72px;
  }
  .mbf-f-box>span{
    position: absolute;
    top: 38vw;
    left: -13vw;
    height:70px;
    font-size:50px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:70px;
    text-shadow:0px 0px 5px rgba(80,150,244,0.3);
  }
  .mbf-f-phone{
    margin-top: 20px;
    margin-left: 17vw;
    width: 60vw;
    height: 131vw;
  }
  /*好玩又赚钱*/


}

@media (min-width: 800px) and (max-width: 1400px) {
  .m-body-first {
    margin-left: 150px;
    width:  calc(100vw - 300px);
    overflow: hidden;
  }

  .m-body-second-wrapper {
    margin-left: 100px;
    width: calc(100vw - 200px);
  }

  .sec-second-item-title{
    font-size: 20px;
  }
  .sec-second-item-info{
    font-size: 13px;
  }
  .mbs-item{
    width: calc((100vw - 300px)/2) !important;
  }
  .download-ico-ios{
    height: 55px !important;
  }
  .download-ico-android{
    height: 55px !important;
  }
  .download-ico-android>div>span{
    font-size: 18px !important;
  }
  .download-ico-ios>div>span{
    font-size: 18px !important;
  }

}
@media (min-width: 800px) {
  .haidou[data-v-109177d0] {
    margin-left: 40px!important;
  }
}
@media (min-width: 900px) {
  .haidou[data-v-109177d0] {
    margin-left: 80px!important;
  }
}
@media (min-width: 1200px) {
  .mbs-item{
    width: calc((100vw - 300px)/4) !important;
  }
  .haidou[data-v-109177d0] {
    margin-left: 144px!important;
  }
}

@media (min-width: 1400px) {
  .m-body-first {
    margin-left: calc((100% - 1200px)/2);
    width: 1200px;
    overflow: hidden;
  }

  .m-body-second-wrapper {
    margin-left: calc((100vw - 1400px)/2); ;
    width: 1400px;
  }
  .mbs-item{
    width: 300px !important;
  }
}

@media (min-width: 1600px) {
  .m-body-first {
    margin-left: calc((100% - 1400px)/2);
    width: 1400px;
    overflow: hidden;
  }

  .m-body-second-wrapper {
    margin-left: calc((100vw - 1600px)/2); ;
    width: 1600px;
  }
  .mbs-item{
    width: 350px !important;
  }
}


</style>
