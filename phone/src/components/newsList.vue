<template>
<!--新闻列表  -->
    <section class="news-list">
        <NewsListItem  v-for="(news,index) in curPageNews" :key="index" :news="news" @click.native="jumpTo(news)"></NewsListItem>
        <div class="page">
            <span @click="prePage" v-show="curPage!=1" class="pre-page">{{$t('newsList.prePage')}}</span>
            <span @click="nextPage" class="next-page" v-show="curPage!=totalPages">{{$t('newsList.nextPage')}}</span>
        </div>
    </section>
</template>
<style scoped>
.news-list{
   padding: 0 24px;
   margin-top: 50px;
   min-height: 35.7vh;
}
.page{
    margin: 25px 0 27px;
    font-size: 16px;
    color: #1A70DD;
    line-height: 22px;
    cursor: pointer;
    overflow: hidden;
}
.pre-page{
    float: left;
    padding: 0 10px;
}
.next-page{
    float: right;
}

</style>
<script>
import NewsListItem from './newsListItem'
import axios from 'axios'
import { sortByDate } from '../utils' 
export default {
  components:{
      NewsListItem
  },
   data(){
      return {
          pageSize:10,
          curPage:1,
          sortedNews:[],
      };
  },
  computed:{
     curPageNews:function(){
          return this.sortedNews.slice((this.curPage - 1) * this.pageSize , this.curPage * this.pageSize);
      },
      totalPages:function(){
          return Math.ceil(this.sortedNews.length / this.pageSize);
      }
  },
  created:function(){
      //获取配置文件
      this.$api.getNewsConfig('newsConfig.json',res=>{
          this.sortedNews.push(...sortByDate(res.data));
      });
  },
  methods:{
      prePage(){
          this.curPage -= 1;
      },
      nextPage(){
          this.curPage += 1;
      },
      jumpTo(news){
        this.$router.push({path:`/news/${news.id}`});//类似post传参
        localStorage.setItem('news',JSON.stringify(news));
      }
  }
}
</script>

