<template>
<!--新闻列表item-->
<nuxt-link :to="'/news/' + news.id + '/'" ::key="news.id" >
    <div class="ignore-news-item news-item">
        <h6 class="ignore-news-title">{{title}}</h6>
        <div class="ignore-box">
            <span v-text="formatedDate" class="ignore-date"></span>
            <span class="ignore-vertical-line"></span>
            <div class="tags">
                <span v-for="(tag,index) in tags" :key="index" class="tag">{{tag}}<span>，</span></span>
            </div>
        </div>
        <div class="ignore-text">{{summary}}</div>
    </div>
</nuxt-link>
</template>
<style scoped>
.news-item{
    padding-left:  300px;
    padding-right: 300px;
    border: 1px solid #DDDDDD;
    cursor: pointer;
}
.ignore-news-item{
    padding-top:45px;
    padding-bottom: 45px;
    background-color: #fff;
    
}
.ignore-news-item:hover{
    background-color: #F8FBFF;
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
    font-size: 18px;
    color: #333333;
    line-height: 25px;
    margin-top: 10px;
}
.ignore-vertical-line{
    width: 1px;
    height: 20px;
    background-color: #666;
    margin:0 5px;
}
.ignore-text{
    font-family: "PingFangSC-Light";
    font-size: 18px;
    color: #666666;
    line-height: 30px;
    margin-top: 20px;
    max-height: 210px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
}
.tag:last-child span{
    display: none;
}
@media only screen and (max-width: 1199px) {
    .ignore-news-title{
        font-size: 30px;
    }
    .ignore-text,
    .ignore-box{
        font-size: 17px;
    }
    .ignore-news-item,
    .page-box{
        padding-left: 10vw;
        padding-right: 10vw;
    }
}
@media only screen and (max-width: 991px) {
    
    .ignore-news-title{
        font-size: 28px;
    }
    .ignore-text,
    .ignore-box{
        font-size: 16px;
        line-height: 20px;
    }
    .ignore-news-item,
    .page-box{
        padding-left: 10vw;
        padding-right: 10vw;
    }
}
</style>
<script>
import { formatDate } from '../utils/index.js' 
export default {
    props:['news'],
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
    summary(){
        return this.$i18n.locale === 'zh-CN' ? this.news.summary_zh : this.news.summary_en;
    },

    }
    
}
</script>
