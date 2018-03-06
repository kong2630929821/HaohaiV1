<template>
  <section>
    <header class="header-h1"></header>
    <main class="container">
      <header class="header-h2">
        <section class="mask"></section>
        <imgs src="bg_4.jpg" class="header-h2-bg"></imgs>
        <main class="header-main">
          <h1 class="header-main-h1">fairblock路线图</h1>
          <p class="header-main-p">2018年3月15日 ， 公告，开发，一般，更新</p>
          <p class="header-content-p">整个Cardano团队由全球专家组成，核心技术团队由Well Typed，Serokell，运行时验证，可预测网络解决方案和ATIX组成，IOHK为团队领导。Grimm，RPI Cryptography Group和FP
            Complete等外部审计师通过对IOHK负责，确保产品质量。
          </p>
          <p class="header-content-p">指导制定路线图的三项原则是：首先，社区的发展及其需求; 第二，真正符合Satoshi最初愿景的分布式和弹性网络，第三，平衡研发速度，因此商业优势在科学严谨性的应用上并不能取胜。</p>
          <p class="header-content-p">一个加密货币只和它背后的社区一样好。我们一直对我们社区一直以来的惊人，耐心和帮助感到谦卑。我们的希望是，路线图是我们可以随着时间的推移一起建立起来的，它成为我们最强大的支柱之一。</p>
          <p class="header-content-p">现有的智能合约模式缺乏严格的基础，IOHK的发展目标是纠正这种模式。为此，IOHK已经将编程语言理论领域的领先思想部署到智能合约的设计中。</p>
        </main>
      </header>
      <section class="content">
        <section class="routemap">
          <main style="display:flex;flex-wrap:wrap">
            <template v-for="(item,index) of routemap">
              <!-- 标题 -->
              <div class="routemap-left">
                <section class="routemap-content routemap-content-left ">
                  <h1 class="routemap-content-left-title">{{item.title.text}}</h1>
                  <p class="routemap-content-left-p">{{item.title.detail}}</p>
                </section>
              </div>
              <div class="routemap-right">
                <section class="routemap-point"></section>
                <section class="progress">
                  <h1 class="progress-title">
                    <span>进展</span>
                    <span>{{item.title.progress}}%</span>
                  </h1>
                  <div class="progress-back">
                    <div class="progress-fore" :style="`width:${item.title.progress}%`"></div>
                  </div>
                </section>
              </div>

              <!-- 正文 -->
              <template v-for="(content,index2) of item.content">
                <div class="routemap-left">
                </div>
                <div class="routemap-right">
                  <section class="routemap-point"></section>
                  <section class="routemap-content">
                    <h1 :class="content.isUpdated?'updated':''">{{content.title}}</h1>
                    <p  :class="content.fold?'fold':''">{{content.detail}}</p>
                    <aside v-show="content.over2line" @click="toggleFold(index,index2)" class="unfolder-btn">
                      <imgs :class="content.fold?'fold-btn':'unfold-btn'" style="width:15px" src="arrow.png"></imgs>
                    </aside>
                  </section>
                </div>
              </template>
            </template>
          </main>
          <section class="routemap-point-last"></section>
          <aside class="routemap-next">
            下一次更新
          </aside>
          <aside class="routemap-next-time">
            {{countdown}}
          </aside>

          <template v-for="value of routemap">
            {{value.content.title}}
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
          clearInterval(timer);
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
        let detail = this.routemap[index].content[index2]
        detail.fold = !detail.fold
      },
      updateRouteMap() {
        let self = this;

        this.routemap = this.routemap.map((route, index) => {

          route.content = route.content.map((content, index2) => {
            content.fold = true;
            if(content.detail.length>=27){
              content.over2line = true
            }else {
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
  header.header-h1 {
    height: 180px;
    background-color: #003874;
  }

  .header-content-p {
    margin-top: 20px;
    color: #EEEEEE;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 1em;
    text-indent: 2em;
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


  .routemap-left,
  .routemap-right {
    flex: 0 0 50%;
    width: 50%;
    min-height: 100px;
    padding: 0px 30px 20px 30px;
    position: relative;
  }

  .routemap-left {
    border-right: 1px solid #E05FE0;
  }

  .routemap-point {
    width: 16px;
    height: 16px;
    border: 3px solid #fff;
    background-color: #E05FE0;
    border-radius: 15px;
    position: absolute;
    left: -8px;
    top: 0px;
  }

  .routemap-point-last {
    width: 16px;
    height: 16px;
    border: 3px solid #fff;
    background-color: #E05FE0;
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
    background-color: #00B6FF;
    height: 2px;
  }

  .progress-back {
    margin-top: 10px;
    width: 200px;
    height: 2px;
    background-color: black;
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
    height: 550px;
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
    margin-top: 123px;
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


  .updated{
    color:#00B6FF !important
  }

  .updated:hover {
    color:#0090CA !important; 
  }

</style>
