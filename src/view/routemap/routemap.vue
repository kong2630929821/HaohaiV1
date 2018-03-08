<template>
  <section>
    <header class="header-h1"></header>
    <main class="container">
      <header class="header-h2">
        <section class="mask"></section>
        <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
        <main class="header-main">
          <h1 class="header-main-h1">fairblock路线图</h1>
          <p class="header-main-aside">FB项目分为四个阶段，以历史上伟大帝王出现的先后顺序命名。</p>
          <section class="hr"></section>
        </main>
      </header>
      <section class="content">

        <section class="routemap">
          <template v-for="(item,index) of routemap">

            <header class="header-content-p">
              {{item.desc}}
            </header>

            <section class="name">
              {{item.blockname}}
            </section>
            <section class="face-container">
              <imgs class="face" :src="'routermap_'+item.pics+'.jpg'"></imgs>
            </section>
            <main style="display:flex;flex-wrap:wrap">
              <!-- 标题 -->
              <template>
                <div class="routemap-left"></div>
                <div class="routemap-right"></div>
              </template>

              <!-- 正文 -->
              <template v-if="item.contents.length>0" v-for="(content,index2) of item.contents">
                <!-- left -->
                <div class="routemap-left" :class="{'is-last':index2==item.contents.length-1}">
                  <h1 class="routemap-content-left-title" :class="content.isUpdated?'updated':''">{{content.name}}</h1>
                  <p class="routemap-content-left-p" :class="content.fold?'fold':''">{{content.desc}}</p>
                </div>

                <!-- right -->
                <div class="routemap-right">
                  <section class="routemap-point"></section>
                  <section class="routemap-content">
                    <section v-if="content.progress!=-1" class="progress">
                      <p class="progress-title">
                        <span>进展</span>
                        <span>{{content.progress}}%</span>
                      </p>
                      <section class="progress-back">
                        <section class="progress-fore" :style="{width:content.progress+'%'}"></section>
                      </section>
                    </section>
                  </section>
                </div>
              </template>
              <template v-else-if="item.contents.length==0">
                <div class="routemap-left" :class="{'is-last':index2==item.contents.length-1}">
                </div>
                <div class="routemap-right">
                  <section class="routemap-point"></section>
                </div>
              </template>
            </main>
            <section v-show="index!=routemap.length-1" class="hr"></section>
          </template>
        </section>
      </section>
    </main>
  </section>
</template>

<script>
  import routemap from "./routemap.json"


  export default {
    name: 'route-map',
    data() {
      return {
        countdown: 0,
        nextTime: new Date('2018-3-10 00:00:00'),
        fold: true,
        routemap: routemap,
        dom: []
      }
    },
    mounted() {
      window.scrollTo(0, 0);
      timer = setInterval(() => {
        this.changeNextTime()
      }, 1000)
      this.updateRouteMap();
    },
    methods: {
      changeNextTime() {
        const nowTime = new Date();
        let countdownS = parseInt((this.nextTime - nowTime) / 1000); // 精确到秒
        if (countdownS <= 0) {
          timer && clearInterval(timer);
          this.countdown = 0
        } else {

          const day = Math.floor(countdownS / (60 * 60 * 24))
          const hour = Math.floor((countdownS - day * 60 * 60 * 24) / (60 * 60))
          const min = Math.floor((countdownS - day * 60 * 60 * 24 - hour * 60 * 60) / (60))
          const sec = Math.floor((countdownS - day * 60 * 60 * 24 - hour * 60 * 60 - min * 60))

          const dayStr = formatDate(day);
          const hourStr = formatDate(hour);
          const minStr = formatDate(min);
          const secStr = formatDate(sec)

          this.countdown = `${dayStr}:${hourStr}:${minStr}:${secStr}`
        }
      },
      toggleFold(index, index2) {
        let detail = this.routemap[index].content[index2];
        detail.fold = !detail.fold
        this.routemap = this.routemap.slice(0);
      },
      updateRouteMap() {
        let self = this;

        this.routemap = this.routemap.map((route, index) => {

          route.content = route.content.map((content, index2) => {
            content.fold = true;
            if (content.detail.length >= 27) {
              content.over2line = true
            } else {
              content.over2line = false
            }
            return content
          })

          return route
        })
      }
    }
  }

  let timer = null;
  const ONE_SECOUNDS = 1000;
  const ONE_MIN = ONE_SECOUNDS * 60;
  const ONE_HOURS = ONE_MIN * 60;
  const ONE_DAY = ONE_HOURS * 24

  const formatDate = (date) => {
    if (date <= 9) {
      return `0${date}`
    } else {
      return `${date}`
    }
  }

</script>

<style scoped>
  .hr {
    height: 150px;
    width: 100%;
  }

  .hr::after {
    content: "---------------";
    padding-top: 50px;
    color: #00B6FF;
    font-weight: 800;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  header.header-h1 {
    height: 180px;
    background-color: #003874;
    padding-bottom: 30px;
  }

  .header-main-aside {
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    font-weight: 200;
    text-align: center;
  }

  .header-content-p {
    color: #EEEEEE;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  .container {
    width: 100%;
    padding: 50px 0;
    background-color: #003874;
    margin: 0 auto;
  }

  .content {
    width: 900px;
    margin: 0 auto;
  }

  .face-container {
    display: flex;
    justify-content: center;
    position: relative;
    top: 30px;
    z-index: 2;
  }

  .face {
    height: 70px;
    width: 70px;
    border-radius: 35px;
    border: 1px solid #00B6FF;
  }

  .name {
    color: #00B6FF;
    text-align: center;
    font-size: 18px;
    line-height: 27px;
    position: relative;
    top: 20px;
  }


  .routemap-left,
  .routemap-right {
    flex: 0 0 50%;
    width: 50%;
    min-height: 100px;
    padding: 0px 30px 20px 30px;
    position: relative;
  }

  .routemap-left {
    border-right: 1px solid #4266B8;
  }

  .is-last {
    border-right: 1px solid rgba(0, 0, 0, 0);
  }

  .routemap-point {
    width: 16px;
    height: 16px;
    border: 3px solid #fff;
    background-color: #4266B8;
    border-radius: 15px;
    position: absolute;
    left: -8px;
    top: 0px;
  }



  .routemap-point-last {
    width: 16px;
    height: 16px;
    border: 3px solid #fff;
    background-color: #4266B8;
    border-radius: 15px;
    position: relative;
    left: 0px;
    top: 0px;
    margin: 0 auto;
  }



  .routemap-content-left {
    width: fit-content;
    position: absolute;
    right: 30px;
  }


  .routemap-content-left-title,
  .routemap-content-left-p {
    text-align: right;
    cursor: pointer;
  }

  .routemap-content-left-title {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
    position:relative;
    top:-3px;
  }

  .routemap-content-left-p {
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    font-weight: 200;
  }

  .routemap-content h1 {
    margin-top: -5px;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 10px;
    font-weight: 600;
    cursor: pointer;
  }

  .routemap-content p {
    font-size: 14px;
    color: #FFFFFF;
    line-height: 18px;
    font-weight: 200;
    word-break: break-all;
    cursor: pointer;
  }

  .routemap-content p.fold {
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .routemap-content .unfolder-btn {
    margin-top: 20px;
    color: #fff;
    cursor: pointer;
  }

  .unfold-btn {
    transform: rotate(180deg);
  }

  .progress {
    color: #fff;
    width: 200px;
  }

  .progress-title {
    display: flex;
    justify-content: space-between;
  }

  .progress-fore {
    background-image: linear-gradient(-90deg, #00DCFF 0%, #C9C738 100%);
    height: 2px;
  }

  .progress-back {
    margin-top: 10px;
    width: 200px;
    height: 2px;
    background-color: black;
    overflow: hidden;
  }

  .routemap-next {
    font-size: 14px;
    color: #fff;
    line-height: 18px;
    text-align: center;
    margin-top: 21px;
  }

  .routemap-next-time {
    margin-top: 60px;
    font-size: 48px;
    line-height: 72px;
    color: #00B6FF;
    text-align: center;
  }

  .mask {
    background-color: #003874;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  header.header-h2 {
    position: relative;
    height: 275px;
    overflow: hidden;
  }

  .header-h2-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    transform: translateY(-300px);
  }


  .header-main {
    margin: 0 auto;
    margin-top: 0px;
    width: 900px;
  }

  .header-main-h1 {
    font-size: 36px;
    line-height: 90px;
    color: #EEEEEE;
    text-align: center;
    margin-bottom: 30px;
  }

  .header-main-p {
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
  }

  .block {
    margin: 0 auto;
    margin-top: 132px;
    min-height: 300px;
    width: 900px;
  }

  .block-header {
    font-size: 24px;
    line-height: 70px;
    color: #333333;
    text-align: center;
  }


  .updated {
    color: #00B6FF !important
  }

  .updated:hover {
    color: #0090CA !important;
  }

</style>
