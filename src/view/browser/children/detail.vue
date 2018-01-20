<template>
  <section>

    <section v-if="obj.type=='error'" class="block">
      <h1 class="block-h1">查不到当前信息</h1>
    </section>

    <section v-if="obj.type=='address'" class="block">
      <h1 class="block-h1" style="color:#012E5D">地址明细</h1>
      <main class="block-main">
        <table class="table">
          <tr>
            <td>地址</td>
            <td>{{obj.address}}</td>
          </tr>
          <tr>
            <td>余额</td>
            <td>{{fbc}} FBC</td>
          </tr>
          <tr>
            <td>美元</td>
            <td>$ {{dollar}} </td>
          </tr>
          <tr>
            <td>人民币</td>
            <td>￥ {{rmb}} </td>
          </tr>
        </table>
      </main>
    </section>

    <section v-if="obj.type=='transaction'" class="block">
      <h1 class="block-h1">概要</h1>
      <main class="block-main">
        <table class="table">
          <tr>
            <td>TimeStamp</td>
            <td>{{time}}</td>
          </tr>
          <tr>
            <td>From</td>
            <td>{{obj.from}}</td>
          </tr>
          <tr>
            <td>To</td>
            <td>{{obj.to}}</td>
          </tr>
          <tr>
            <td>Actual Tx Cost</td>
            <td>{{obj.cost}} FBC</td>
          </tr>
          <tr>
            <td>Total Cost</td>
            <td>{{obj.totalCost}}</td>
          </tr>
          <tr>
            <td>InputData</td>
            <td>{{obj.input}}</td>
          </tr>
        </table>
      </main>
    </section>


  </section>
</template>

<script>
  export default {
    name: 'browser-index',
    props: ['obj'],
    computed: {
      time() {
        let time = new Date(this.obj.timeStamp * 1000);
        let format = {
          year: time.getFullYear(),
          month: time.getMonth() + 1,
          day: time.getDate(),
          hour: time.getHours(),
          min: time.getMinutes(),
          sec: time.getSeconds()
        }

        for (const key in format) {
          if (format.hasOwnProperty(key)) {
            let element = format[key];
            if (element.length <= 1) {
              format[key] = '0' + element;
            }
          }
        }

        return `${format.year}年${format.month}月${format.day} ${format.hour}:${format.min}:${format.sec}`
      },
      fbc() {
        return this.obj.price.toFixed(6);
      },
      dollar() {
        return (this.obj.price * 0.36).toFixed(2);
      },
      rmb() {
        return (this.obj.price * 2.3).toFixed(2);
      }
    },
    // props:['timestamp','from','to','cost','inputdata'],
    methods: {}
  }

</script>

<style scoped>
  .block {
    margin-top: 60px;
  }

  .block-h1 {
    font-size: 24px;
    font-weight: 600;
    color: #323232;
  }

  .block-main {
    margin-top: 20px;
  }

  .btn-o-dark {
    display: inline-block;
    text-align: center;
    min-width: 5em;
    transition: border 0.2s, color 0.2s;
    border: 1px solid #666666;
    color: black;
    font-weight: 400;
    font-size: 16px;
    line-height: 50px;
    padding: 0 3em;
  }

  .btn-area {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }

</style>
