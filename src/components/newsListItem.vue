<template>
  <div class="ignore-news-item news-item">
      <h6 class="ignore-news-title">{{news.title}}</h6>
      <div class="ignore-box">
          <span v-text="formatedDate" class="ignore-date"></span>
          <span class="ignore-vertical-line"></span>
          <div class="tags">
              <span v-for="(tag,index) in news.tags" :key="index" class="tag">{{tag}}<span>，</span></span>
          </div>
      </div>
      <div class="ignore-text">{{news.summary}}</div>
  </div>
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
        return formatDate(this.news.date);
    }
  }
 
}
</script>
