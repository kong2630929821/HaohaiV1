<template>
<!--新闻详情  侧边栏-->
  <div class="ignore-side-bar">
      <router-link to="/news"><div class="ignore-return-list">{{$t('newsDetailSideBar.returnList')}}</div></router-link>
      <div class="recent-news-container">
          <h6 class="ignore-recent-new-title">{{$t('newsDetailSideBar.recentNews')}}</h6>
          <ul class="ignore-recents">
              <router-link v-for="(news,index) in newsTop5" :key="index" :to="`/news/${news.id}`"><li>{{$i18n.locale === 'zh-CN' ? news.title_zh : news.title_en}}</li></router-link>
          </ul>
      </div>
  </div>
</template>
<style scoped>
.ignore-side-bar{
    width: 310px;
    margin-top: 59px;
    margin-bottom: 200px;
}
.ignore-return-list{
    font-size: 18px;
    color: #333333;
    line-height: 25px;
}
.ignore-return-list:hover{
    color: #1a70dd;
}
.recent-news-container{
    margin-top: 62px;
}
.ignore-recent-new-title{
    font-size: 18px;
    color: #333333;
    line-height: 25px;
}
.ignore-recents{
    margin-top: 10px;
}
.ignore-recents a li{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-family: "PingFangSC-Light";
    font-size: 15px;
    color: #666666;
    line-height: 30px;
}
.ignore-recents a li:hover{
    color: #1a70dd;
}
</style>
<script>
import  { sortByDate }  from '../utils/index.js'
export default {
  data(){
      return {
          sortedNews:[],
      };
  },
    computed:{
      newsTop5:function(){
          return this.sortedNews.slice(0,5);
      },
     
  },
  created:function(){
      //获取配置文件
      this.$api.getNewsConfig('newsConfig.json',res=>{
          this.sortedNews.push(...sortByDate(res.data));
      });
  },
 
}
</script>
