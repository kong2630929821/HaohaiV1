<template>
<!--新闻详情  主体-->
    <section class="news-detail">
        <div class="ignore-detail-body detail-body">
            <h2 class="ignore-news-title">{{title}}</h2>
            <div class="ignore-box">
                <span v-text="formatedDate" class="ignore-date"></span>
                <span class="ignore-vertical-line"></span>
                <div class="tags">
                    <span v-for="(tag,index) in tags" :key="index" class="tag">{{tag}}<span>，</span></span>
                </div>
            </div>
            <div class="bg-img ignore-bg-img" :style="{backgroundImage:'url(/newsImage/' + news.imgUrl + ')'}"></div>
            <div class="markdown-container ignore-markdown-container" id="markdown-container">
                <vue-markdown :source="newsContent"></vue-markdown>
            </div>
        </div>
        <slot></slot>
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

@media only screen and (max-width: 1199px) {
    .news-detail{
        padding-left: 10vw;
    }
    .ignore-news-title{
        font-size: 28px;
    }
}
@media only screen and (max-width: 991px) {
    
    .news-detail{
        padding-left: 10vw;
    }
    .ignore-news-title{
        font-size: 24px;
    }
}
</style>
<script>
import { formatDate } from '../utils' 
import VueMarkdown from 'vue-markdown'
export default {
    props:["news","newsContent"],
    components:{
        VueMarkdown,
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
        }
    }
}
</script>
        