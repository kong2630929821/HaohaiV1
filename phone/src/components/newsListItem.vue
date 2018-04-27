<template>
<!--新闻列表item-->
  <div class="news-item">
      <h6 class="news-title">{{title}}</h6>
      <div class="box">
          <span v-text="formatedDate" class="date"></span>
          <span class="vertical-line"></span>
          <div class="tags">
              <span v-for="(tag,index) in tags" :key="index" class="tag">{{tag}}<span>，</span></span>
          </div>
      </div>
      <div class="text">{{summary}}</div>
  </div>
</template>
<style scoped>
.news-item{
    padding: 16px 0;
    background-color: #fff;
    border-bottom: 1px solid #DDDDDD;
    cursor: pointer;
}

.news-item:hover{
    background-color: #F8FBFF;
}
.news-title{
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    color: #333333;
    line-height: 25px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
    height: 15px;
    background-color: #666;
    margin:0 5px;
}
.text{
    font-family: "PingFangSC-Light";
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    margin-top: 8px;
    max-height: 105px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
}
.tag:last-child span{
    display: none;
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
        let summary = this.$i18n.locale === 'zh-CN' ? this.news.summary_zh : this.news.summary_en;
        return summary.substr(0,125);
    },

  }
 
}
</script>
