<template>
<div>
    <NewsDetailBody :news="news" :newsContent="newsContent"><NewsDetailSideBar :newsConfig="newsConfig"></NewsDetailSideBar></NewsDetailBody>
</div>
</template>
<script>
import NewsDetailBody from '../../components/newsDetailBody'
import NewsDetailSideBar from '../../components/newsDetailSideBar'
import { getNewsConfig,getNews } from '../../api'
import Vue from 'vue'

const getCurrentNewsConfig = (newsConfig,id)=>{
    return newsConfig.filter((item)=>{
        return item.id === id;
    })[0];
}
export default {
    components:{
        NewsDetailBody,
        NewsDetailSideBar
    },
    async asyncData({ params,query }){
        let res = await getNewsConfig();
        let newsConfig = res.data;
        let mdResZh = await getNews(`${params.id}_zh.md`);
        let mdResEn = await getNews(`${params.id}_en.md`);
        return {
            newsConfig,
            news:getCurrentNewsConfig(newsConfig,params.id),
            newsContentZh:mdResZh.data,
            newsContentEn:mdResEn.data
        }
    },
    computed:{
        newsContent(){
            const newsContent = this.$i18n.locale == 'en-US' ? this.newsContentEn : this.newsContentZh;
            return newsContent;
        }
    },
    method:{
        
    }
}
</script>
        