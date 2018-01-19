<template>
  <section>
    <section class="block">
      <h1 class="block-h1">最后的插槽</h1>
      <main class="block-main">
        <table class="table">
          <tr>
            <td>Epoch</td>
            <td>Slot</td>
            <td>Since</td>
            <td>Transactions</td>
            <td>Total Sent</td>
            <td>Slot leader</td>
            <td>Size(bytes)</td>
          </tr>
          <tr v-for="(item,index) of slotData">
            <td>{{item.Epoch}}</td>
            <td>{{item.Slot}}</td>
            <td>{{item.Since}}</td>
            <td>{{item.Transactions}}</td>
            <td>{{item.ToalSent}}</td>
            <td>{{item.SlotLeader}}</td>
            <td>{{item.Size}}</td>
          </tr>
        </table>
        <section class="btn-area">
          <section class="btn btn-o-dark">
            <imgs @click="changeSlotIndex('pre')" src="next.png"></imgs>
            52111/52112
            <imgs @click="changeSlotIndex('next')" src="next.png" style="transform:rotate(180deg)"></imgs>
          </section>
        </section>
      </main>
    </section>

    <section class="block">
      <h1 class="block-h1" style="color:#012E5D">交易FEED</h1>
      <main class="block-main">
        <table class="table">
          <tr>
            <td>c20c6a4db7a4abcd48f8bf2708ec8962660ef321abf2cf7b554bda66095ea0b5</td>
            <td>01/18/2018 09:57:51</td>
            <td>2,115.555042</td>
          </tr>
          <tr>
            <td>c20c6a4db7a4abcd48f8bf2708ec8962660ef321abf2cf7b554bda66095ea0b5</td>
            <td>01/18/2018 09:57:51</td>
            <td>2,115.555042</td>
          </tr>
          <tr>
            <td>c20c6a4db7a4abcd48f8bf2708ec8962660ef321abf2cf7b554bda66095ea0b5</td>
            <td>01/18/2018 09:57:51</td>
            <td>2,115.555042</td>
          </tr>
        </table>
      </main>
      <section class="btn-area">
        <section class="btn-o-dark" style="font-size:18px">
          展开
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'browser-index',
    data() {
      return {
        slotData: Array(6).fill({
          Epoch: '23',
          Slot: '2203',
          Since: '53 min',
          Transactions: '2',
          ToalSent: '5,499,615.160703',
          SlotLeader: 'none',
          Size: '65904a8'
        })
      }
    },
    methods: {
      changeSlotIndex(direction) {

      }
    }
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
