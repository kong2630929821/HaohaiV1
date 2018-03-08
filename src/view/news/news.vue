<template>
  <section>
    <header class="header-h1"></header>
    <main v-if="filterList.length>0">
      <item v-for="(item,index) of filterList" :obj="item" @click.native="enterDetail(index)"></item>
    </main>
    <main class="block empty" v-else>
      抱歉，列表为空
    </main>
    <footer class="content content-lr">
      <span @click="pre">← 旧的新闻</span>
      <span @click="aft">→ 较新的新闻</span>
    </footer>
  </section>
</template>

<script>
  import Item from "./newsitem.vue"
  import axios from "axios"



  const STEP_SIZE = 5;
  let news_list = [];
  export default {
    name: 'news',
    components: {
      Item
    },
    data() {
      return {
        page: 1,
        newsList: [],
        filterList:[]
      }
    },
    watch: {
      page: function (newpage, oldpage) {
        this.$router.replace({
          name: 'news',
          params: {
            page: newpage
          }
        })
        this.splitNewsList();
        
      }
    },
    created() {
      this.getParams();
      this.fetchList();
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      getParams() {
        this.page = parseInt(this.$route.params.page) || 1;
      },
      fetchList() {
        axios.get('/article_zh/newslist.json').then(resp => {
          this.newsList = resp.data;
          this.splitNewsList();
        })
      },
      splitNewsList() {
        this.filterList = this.newsList.slice((this.page - 1) * STEP_SIZE, (this.page - 1) * STEP_SIZE + STEP_SIZE)
      },
      pre() {
          if (this.newsList.length != 0) {
            this.page++;
          }
      },
      aft() {
          if (this.page >= 2) {
            this.page--;
          }
      },
      enterDetail(index) {
        this.$router.push({
          name: 'newsdetail',
          params: {
            id: this.newsList[index].id
          }
        })
      }
    }
  }

</script>

<style scoped>
  header.header-h1 {
    height: 180px;
    background-color: #003874;
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
    height: 390px;
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
    line-height: 50px;
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

  .content {
    width: 900px;
    margin: 42px auto;

  }

  .content span {
    font-size: 16px;
    color: #00B6FF;
    cursor: pointer;
  }

  .content span:hover {
    color: #0488BD;
  }

  .content-lr {
    display: flex;
    justify-content: space-between;
  }

  .block-header {
    font-size: 24px;
    line-height: 70px;
    color: #333333;
    text-align: center;
  }


  .btn-i {
    background-color: #00a7fe;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    padding: 0 3em;
    display: block;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 102px;
  }

  .empty {
      font-size:30px;
      text-align: center;
      color:#333333;
  }

</style>
