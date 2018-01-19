<template>
  <section class="search-out search-container" :class="{'search-out-focus':isUnFold}">
    <imgs @click.native="search" class="search-icon" src="search.png"></imgs>
    <section v-show="isUnFold" class="control">
      <ul>
        <li class="label-word" :class="{'li-active':conditionActiveIndex==0}" @click="conditionActiveIndex=0">地点</li>
        <li class="label-word" :class="{'li-active':conditionActiveIndex==1}" @click="conditionActiveIndex=1">交易</li>
        <!-- <li class="label-word" :class="{'li-active':conditionActiveIndex==2}" @click="conditionActiveIndex=2">时间</li> -->
      </ul>
    </section>
    <section class="block" v-if="conditionActiveIndex==0">
      <input @focus="isUnFold=true" @blur="isUnFold=false" @keyup.enter="search" class="address" type="text" v-model="search_words">
    </section>
    <section class="block" v-else-if="conditionActiveIndex==1">
      <input class="transaction" @focus="isUnFold=true" @keyup.enter="search" @blur="isUnFold=false" type="text" v-model="search_words">
    </section>
    <!-- 按时间条件 -->
    <!-- <section class="block" v-else-if="conditionActiveIndex==2">
      <label for="" class="label-word">时代</label>
      <input @input="int($event)" class="time" type="text" v-model="time">
      <label for="" class="label-word">插槽</label>
      <input @input="int($event)" class="slot" type="text" v-model="slot">
    </section> -->
  </section>
</template>

<script>
  import Web3 from 'web3';

  const web3 = new Web3(new Web3.providers.HttpProvider("http://120.79.172.99:8545"));
  window.web3 = web3;
  export default {
    name: 'search',
    data() {
      return {
        isUnFold: false,
        conditionActiveIndex: 0,
        search_words: '',
        result: {}
      }
    },
    created() {
      //   debugger;
      //     let Transaction = web3.eth.getTransaction("0x49d895676f63696f6bc619737787d4765afa2fb12833b940c7fd051ff7224847")
      //     let banlance = web3.eth.getBalance("0x91f28b79b263c9016070df84719b3fddbb9bfa2e")
    },
    methods: {
      search() {
        let condition = this.conditionActiveIndex == 0 ? 'address' : 'transaction';
        this.result = {};
        if (condition == 'address') {
          try {
            this.result.price = web3.eth.getBalance(format16X(this.search_words)).toString();
            this.result.type = 'address'
          } catch (e) {
            this.result.type = 'error'
          }
          this.$emit('search', {
            type: this.result.type,
            value: this.result
          });
        } else if (condition == 'transaction') {
          try {
            this.result = web3.eth.getTransaction(format16X(this.search_words));
            let timeStamp = web3.eth.getBlock(this.result.blockHash).timestamp;
            let gasUsed = web3.eth.getTransactionReceipt(format16X(this.search_words)).gasUsed;
            this.result.timeStamp = timeStamp;
            this.result.cost = web3.fromWei(gasUsed*this.result.gasPrice.c[0],'ether');
            this.result.type = 'transaction';
          } catch (e) {
            this.result.type = 'error';
          }
          this.$emit('search', {
            type: this.result.type,
            value: this.result
          });
        }

      }
    }
  }

  const format16X = (str) => {
    if (str.includes("0x")) {
      return str
    } else {
      return "0x" + str
    }
  }

</script>

<style>
  .search-out {
    transition: width 0.5s;
    width: 649px;
    position: relative;
  }

  .search-out-focus {
    transition: width 0.5s;
    width: 898px !important;
    position: relative;
  }


  .search-icon {
    margin-top: 6px;
    position: absolute;
    right: 2em;
  }

  .search-container {
    background: rgba(0, 0, 0, 0.10);
    border: 1px solid #00B6FF;
    border-radius: 100px;
    height: 42px;
    width: 649px;
    outline: none;
    padding: 0 3em;
    color: #fff;
    font-size: 20px;
    margin: 0 auto;
  }

  .block {
    height: 100%;
  }

  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: #A3A3A3;
  }

  .search-out-focus input {
    color: #fff;
  }

  .address,
  .transaction {
    width: 100%;
  }

  .time {
    width: 120px;
  }

  .slot {
    width: 400px;
  }

  .control {
    width: 300px;
    height: 100%;
    position: absolute;
    right: 5em;
  }

  .control ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }

  .label-word {
    font-size: 14px;
    line-height: 16px;
    color: #A3A3A3;
    cursor: pointer;
  }



  .li-active {
    color: #fff !important;
  }

  .control li:not(:last-child) {
    margin-right: 18px;
  }

</style>
