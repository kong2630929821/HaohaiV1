<template>
    <div class="header">
      <div class="left" v-show="screenWidth>414">
        <img class="mbf-f-phone" src="../../static/image/phone-model@2x.png" alt="">
      </div>  
      <div class="right" v-show="screenWidth>414">
          <div class="login-name"></div>
          <p class="title">{{title}}</p>
          <a :href="src" class="sec-btn-later">下载</a>
      </div>
      <div class="right1" v-show="screenWidth<=414">
    
              <div class="login-name1"></div>
              <p class="title1">{{title}}</p>
              <a :href="src" class="sec-btn-later1">下载</a>

      </div>
    </div>
</template>

<script>
export default {
  name: 'Download',
  data () {
    return {
        title:this.$route.query.title||'好嗨-区块英雄',
        src:this.$route.query.src||'123',
        screenWidth: document.body.clientWidth   // 这里是给到了一个默认值
      }
    },
    mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    watch: {
    screenWidth (val) {
        if (!this.timer) {
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function () {
                // that.screenWidth = that.$store.state.canvasWidth
                console.log(that.screenWidth)
                that.timer = false
            }, 400)
        }
    }
 }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        width: 100vw;
        height: 100vh;
        background:linear-gradient(135deg,rgba(23,234,217,1) 0%,rgba(96,120,234,1) 100%);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mbf-f-phone {
      width: 24.7vw;
      height: auto;
      margin-left: 18vw;
      margin-top: 24vh;
    }
    .left{
      width: 60vw;
      height: 100vh;
      background: url("../../static/image/down-bg.png")no-repeat;
      background-size: 100% 100%;
    }
    .right{
      width:40vw;
      height: 100vh;
      overflow: hidden;
    }
    .title{
      font-size:24px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:50px;
      margin: 1vh 2.4vw;
    }
    a{
      text-decoration: none;
    }
    .login-name{
      width: 150px;
      height: 150px;
      background: url("../../static/image/logo-bg.png");
      background-size: 100%;
      margin: 45vh 2.4vw 0;
    }
    .right1{
      width:100vw;
      height: 100vh;
      overflow: hidden;
      background: url("../../static/image/down-bg.png")no-repeat -328px 0;
      background-size: 176% 100%;
    }
     .title1{
      font-size:18px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:50px;
      margin: 1vh 2.4vw;
      text-align: center;
    }
    .login-name1{
      width: 100px;
      height: 100px;
      background: url("../../static/image/logo-bg.png");
      background-size: 100%;
      margin: 33vh auto 0;
    }
    .sec-btn-later1 {
      cursor: pointer;
      width:177px;
      height:40px;
      background:linear-gradient(90deg,rgba(250,203,33,1) 0%,rgba(255,244,101,1) 100%);
      box-shadow:0px 5px 10px 0px rgba(85,122,231,0.3);
      border-radius:125px;
      font-size:18px;
      font-family:MicrosoftYaHei;
      color:rgba(50,116,222,1);
      line-height:40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
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
      margin: 0 0;
  }
</style>
