<template>
  <section>
    <section class="first-screen">
      <section class="head" :style="bg">
        <header>
          <h1>FairBlock.io</h1>
          <p>搜索地址和交易详情</p>
        </header>
        <search  :type="type" :words="words"  @search="updateDetail" style="margin:0 auto">
        </search>
      </section>
    </section>

    <main class="main container">
            <!-- <brower-index></brower-index> -->
      <brower-detail :obj="result"></brower-detail>
    </main>
  </section>
</template>

<script>
  import Assert_bg from '../../res/bg_3.png';
  import Search from './children/search.vue';

  import BrowerIndex from './children/index.vue';
  import BrowerDetail from './children/detail.vue';
  export default {
    name: 'browser',
    components: {
      Search,
      BrowerIndex,
      BrowerDetail
    },
    data() {
      return {
        bg: {
          'background-image': `url(${Assert_bg})`,
          'background-size': `100% 100%`
        },
        type:'',
        words:'',
        init:{},
        result:{}
      }
    },
    mounted(){
      this.getParams();
    },
    methods: {
        getParams(){
            this.type = this.$route.params.type || '';
            this.words = this.$route.params.search_words || '';
        },

        updateDetail(result){
            this.result = result.value;
            this.result.type=result.type;
        }
    }
  }

</script>

<style scoped>
  .first-screen {
    height: 560px;
    overflow: hidden;
    background-color: #003874;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .head {
    margin-top: 209px;
    height: 350px;
    width: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header>* {
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  header>h1 {
    font-size: 36px;
    line-height: 42px;
  }

  header>p {
    font-size: 16px;
    line-height: 22px;
  }

  .main {
    background-color: #fff;
    min-height: 700px;
    padding-bottom:100px;
  }

</style>
