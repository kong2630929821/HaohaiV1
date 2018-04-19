<template>
  <section class="news-detail">
      <div class="ignore-detail-body detail-body">
            <h6 class="ignore-news-title">{{news.title}}</h6>
            <div class="ignore-box">
                <span v-text="formatedDate" class="ignore-date"></span>
                <span class="ignore-vertical-line"></span>
                <div class="tags">
                    <span v-for="(tag,index) in news.tags" :key="index" class="tag">{{tag}}<span>，</span></span>
                </div>
            </div>
            <div class="bg-img ignore-bg-img" :style="{backgroundImage:'url(../../static/newsImage/' + news.imgUrl + ')'}"></div>
            <div class="markdown-container">
                <vue-markdown :source="newsContent"></vue-markdown>
            </div>
      </div>
      <NewsDetailSideBar></NewsDetailSideBar>
  </section>
</template>
<style scoped>
.news-detail{
    width: 100%;
    padding-left: 300px;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
}
.ignore-detail-body{
    padding-top: 48px;
}
.detail-body{
    width: 800px;
    margin-right: 50px;
}
.ignore-news-title{
    font-family: "PingFangSC-Light";
    font-size: 32px;
    color: #333333;
    line-height: 45px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.ignore-box{
    display: flex;
    align-items: center;
    font-family: "PingFangSC-Light";
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    margin-top: 10px;
}
.ignore-vertical-line{
    width: 1px;
    height: 20px;
    background-color: #666;
    margin:0 5px;
}
.tag:last-child span{
    display: none;
}
.bg-img{
    width: 100%;
    height: 460px;
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-bottom: 30px;
}
.markdown-container{
    width: 100%;
    margin-bottom: 160px;
}
</style>
<script>
import { formatDate } from '../utils/index.js' 
import VueMarkdown from 'vue-markdown'
import api from '../api'
import NewsDetailSideBar from './NewsDetailSideBar'
export default {
    components:{
        VueMarkdown,
        NewsDetailSideBar,
    },
  data(){
      return {
          news:{},
          newsContent:""
      }
  },
  computed:{
    formatedDate(){
        return formatDate(this.news.date);
    }
  },
  created(){
      const news = JSON.parse(localStorage.getItem('news'))
      this.news = news;
      this.fetchData();
  },
  methods:{
      fetchData(){
          api.getNews(`${this.$route.params.id}.md`,res=>{
            this.newsContent = res.data;
          })
      }
  },
   watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': "fetchData"
  },
}
</script>
