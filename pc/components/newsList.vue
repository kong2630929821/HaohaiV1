<template>
<!--新闻列表  -->
    <section class="news-list" >
        <NewsListItem  v-for="(news,index) in curPageNews" :key="index" :news="news"></NewsListItem>
        <div class="ignore-page page-box">
            <span @click="prePage" v-show="curPage!=1" class="pre-page">{{$t('newsList.prePage')}}</span>
            <span @click="nextPage" class="next-page" v-show="curPage!=totalPages">{{$t('newsList.nextPage')}}</span>
        </div>
    </section>
</template>
<style scoped>
.news-list{
    margin-top: 80px;
    min-height: 61.3vh;
}
.page-box{
    padding: 0 300px;
}
.ignore-page{
    margin: 42px 0 90px;
    display: flex;
    justify-content: space-between;
    font-family: "SourceHanSansCN-Normal";
    font-size: 16px;
    color: #1A70DD;
    line-height: 24px;
    cursor: pointer;
}
.next-page{
    flex: 1 0 0; 
    text-align: right;
}
@media only screen and (max-width: 1199px) {
    .page-box{
        padding-left: 10vw;
        padding-right: 10vw;
    }
}
@media only screen and (max-width: 991px) {
    
    .page-box{
        padding-left: 7vw;
        padding-right: 7vw;
    }
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
        
        