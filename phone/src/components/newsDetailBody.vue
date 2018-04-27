<template>
<!--新闻详情  主体-->
  <section class="news-detail">
      <div class="detail-body">
            <h6 class="news-title">{{title}}</h6>
            <div class="box">
                <span v-text="formatedDate" class="date"></span>
                <span class="vertical-line"></span>
                <div class="tags">
                    <span v-for="(tag,index) in tags" :key="index" class="tag">{{tag}}<span>，</span></span>
                </div>
            </div>
            <div class="dividing-line"></div>
            <div class="bg-img" :style="{backgroundImage:'url(/phone/static/newsImage/' + news.imgUrl + ')'}"></div>
            <div class="markdown-container">
                <vue-markdown :source="newsContent"></vue-markdown>
            </div>
      </div>
      <div class="dividing-line"></div>
      <NewsDetailSideBar></NewsDetailSideBar>
  </section>
</template>
<style scoped>
.news-detail{
    padding: 16px 24px 32px;
    margin-top: 50px;
}
.detail-body{
    width: 100%;
}
.news-title{
    line-height: 25px;
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    color: #333333;
}
.box{
    display: flex;
    align-items: center;
    font-family: "PingFangSC-Light";
    font-size: 12px;
    color: #333333;
    line-height: 17px;
    margin-top: 8px;
}
.vertical-line{
    width: 1px;
    height: 17px;
    background-color: #333;
    margin:0 5px;
}
.tag:last-child span{
    display: none;
}
.dividing-line{
    width: 100vw;
    height: 1px;
    background: #ddd;
    margin: 8px 0 16px -24px;
}
.bg-img{
    width: 100%;
    height: 191px;
    background-position: center;
    background-size: cover;
    margin-bottom: 16px;
}
.markdown-container{
    width: 100%;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 32px;
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
       return formatDate(this.news.date,this.$i18n.locale);
    },
    title(){
        return this.$i18n.locale === 'zh-CN' ? this.news.title_zh : this.news.title_en;
    },
    tags(){
        return this.$i18n.locale === 'zh-CN' ? this.news.tags_zh : this.news.tags_en;
    },
    lang(){
        return this.$i18n.locale;
    }
  },
  created(){
      const news = JSON.parse(localStorage.getItem('news'))
      this.news = news;
      this.fetchData();
  },
  methods:{
      fetchData(){
          const url = this.$i18n.locale === 'zh-CN' ? `${this.$route.params.id}_zh.md` : `${this.$route.params.id}_en.md`;
          api.getNews(url,res=>{
            this.newsContent = res.data;
          },()=>{
              this.newsContent = "";
          })
      }
  },
   watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': "fetchData",
        //如果中英文转换,重新抓取数据
        'lang':'fetchData'
  },
}
</script>
