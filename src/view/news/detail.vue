<template>
  <section>
    <header class="detail-header-h1"></header>
    <main class="detail-block">
      <section class="article">
        <header class="detail-title-header">
          <h1 class="detail-title">{{obj.title}}</h1>
          <aside class="detail-title-aside">
            <span>{{timeStr}}</span> |
            <span>{{typeStr}}</span>
          </aside>
        </header>
        <main style="display:flex">
          <section v-html="content" class="detail-content"></section>
        </main>
      </section>
      <section class="article-aside">
        <router-link class="back" :to="{name:'news',params:{page:1}}">← 返回列表</router-link>
        <h1 class="article-aside-title">最近的列表</h1>
        <ul class="article-aside-list">
          <li v-for="item of filterList">
            <router-link :to="{name:'newsdetail',params:{id:item.id}}">{{item.title}}</router-link>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<script>
  import marked from "marked";
  import axios from "axios";

  export default {
    name: 'news-detail',
    data: function () {
      return {
        content: '',
        list: [],
        obj: {
          time: '',
          type: []
        }
      }
    },
    computed: {
      timeStr() {

        return this.obj.time.toLocaleString("UTC", {
          hour12: false
        }) || ''
      },
      typeStr() {
        return this.obj.type.join(',')
      },
      filterList() {
        return this.list.filter((el, index) => {
          return index < 5
        })
      }
    },
    mounted() {
      window.scrollTo(0, 0)
      this.getParams();
      this.readMd();
      this.updateList();

    },
    watch: {
      '$route': function () {
        this.getParams();
        this.readMd();
        this.updateList();
      }
    },
    methods: {
      getParams() {
        this.id = this.$route.params.id || 1;
      },
      readMd() {
        try {
          axios.get(`/article/${this.id}.md`).then(resp => {
            this.content = marked(resp.data)
          })
        } catch (e) {
          console.error('不存在' + `/article/${this.id}.md`)
        }
      },
      updateList() {
        axios.get('/article/newslist.json').then(resp => {
          console.log('resprespresp', resp)
          this.list = resp.data;
          this.obj = this.list.find((item) => {
            return item.id == this.id
          })
        })
      }
    }

  }

</script>

<style>
  header.detail-header-h1 {
    height: 180px;
    background-color: #003874;
  }

  .detail-title-header {
    margin-bottom: 33px;
  }

  .detail-title {
    font-size: 32px;
    line-height: 48px;
    color: #333333;
    font-weight: 600;
  }

  .detail-title-aside {
    margin-top: 15px;
    font-size: 14px;
    color: #666666;
    line-height: 21px;
    font-weight: 400;
  }


  .detail-block {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
    min-height: 300px;
    width: 1200px;
    display: flex;
  }

  .article {
    display: inline-block;
    width: calc(80% - 50px);
    margin-right: 50px;
  }

  .article-aside {
    display: inline-block;
    width: 20%
  }

  .detail-content {
    width: 100%;
  }

  .detail-content p,
  ul,
  li a {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }

  .detail-content h1,
  h2,
  h3,
  h4,
  h5 {
    color: black;
    font-weight: 600;
    margin: 0.4em 0;
  }

  .detail-content h1 {
    font-size: 28px;
  }

  .detail-content h2 {
    font-size: 22px;
  }

  .detail-content h3 {
    font-size: 18px;
  }

  .detail-content h4 {
    font-size: 16px;
  }

  .detail-content h5 {
    font-size: 14px;
  }

  .detail-content p {
    margin: 0 0 1.5em 0;
    word-break: break-all;
  }

  .detail-content img {
    width: 100%
  }

  .detail-content iframe {
    margin-bottom: 5px;
    width: 100%
  }

  .detail-content img:hover {
    transition: box-shadow 0.5s;
    box-shadow: 1px 1px 5px rgba(184, 184, 184, 0.5);
  }

  .back {
    font-size: 16px;
    line-height: 24px;
    color: #07A2CC;
  }

  .back:hover {
    color: #0488BD;
  }

  .article-aside-title {
    margin-top: 70px;
    margin-bottom: 6px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
  }

  .article-aside-list {
    font-size: 15px;
    line-height: 30px;
    color: #666666;
  }

  .article-aside-list li {
    cursor: pointer;
    margin-bottom: 5px;
  }

</style>
