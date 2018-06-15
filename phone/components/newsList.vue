<template>
<!--新闻列表  -->
    <section class="news-list">
        <NewsListItem  v-for="(news,index) in curPageNews" :key="index" :news="news"></NewsListItem>
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
import { sortByDate } from '../utils' 
import { getNewsConfig } from '../api'
export default {
    props: ['sortedNews'],
    components:{
        NewsListItem
    },
    data(){
        return {
            pageSize:5,
            curPage:1,
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
    methods:{
        prePage(){
            this.curPage -= 1;
        },
        nextPage(){
            this.curPage += 1;
        }
    },

}
</script>

        
        