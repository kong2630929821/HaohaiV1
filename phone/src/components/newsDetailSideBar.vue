<template>
<!--新闻详情  侧边栏-->
  <div class="side-bar">
      <div class="recent-news-container">
          <h6 class="recent-new-title">{{$t('newsDetailSideBar.recentNews')}}</h6>
          <ul class="recents">
              <router-link v-for="(news,index) in newsTop5" :key="index" :to="`/news/${news.id}`"><li>{{$i18n.locale === 'zh-CN' ? news.title_zh : news.title_en}}</li></router-link>
          </ul>
      </div>
  </div>
</template>
<style scoped>
.side-bar{
    width: 100%;
}
.recent-news-container{
    margin-top: 32px;
}
.recent-new-title{
    font-size: 18px;
    color: #333333;
    line-height: 25px;
}
.recents{
    margin-top: 10px;
}
.recents a li{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-family: "PingFangSC-Light";
    font-size: 15px;
    color: #666666;
    line-height: 30px;
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
