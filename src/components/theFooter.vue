<template>
  <footer>
      <img src="../../static/image/footer_logo.png" class="logo-img">
      <div class="community-and-help">
          <h4 class="ignore-title">{{$t('footerCommunityAndHelp.title')}}</h4>
          <DividingLine></DividingLine>
          <ul class="ignore-margin">
              <router-link 
                v-for="(item,index) in $t('footerCommunityAndHelp.item')" 
                :key="index" target="_blank" 
                :to="item.link" 
                class="ignore-item">
                    <li>{{item.text}}</li>
              </router-link>
          </ul>
      </div>
      <div class="about-gaia">
          <h4 class="ignore-title">{{$t('footerAboutGAIA.title')}}</h4>
          <DividingLine></DividingLine>
          <ul class="ignore-margin">
              <router-link 
                v-for="(item,index) in $t('footerAboutGAIA.item')" 
                :key="index" 
                target="_blank" 
                :to="item.link" 
                class="ignore-item">
                    <li>{{item.text}}</li>
              </router-link>
          </ul>
      </div>
      <div class="contact-us">
          <h4 class="ignore-title">{{$t('footerContactAs.title')}}</h4>
          <DividingLine></DividingLine>
          <div class="ignore-contact-ways">
              <img :src="'../../static/image/' + item" v-for="(item,index) in contactWays" :key="index" class="ignore-contact-way-item">
          </div>
          <div class="ignore-email-box">
              <div class="ignore-box">
              <img :src="'../../static/image/' + email.imgUrl">
              </div>
              <span class="ignore-text">{{email.text}}</span>
          </div>
          <div class="ignore-phone-box">
              <div class="ignore-box">
                <img :src="'../../static/image/' + phone.imgUrl">
              </div>
              <span class="ignore-text">{{phone.text}}</span>
          </div>
          <div class="ignore-copyright">{{$t('footerContactAs.copyright')}}</div>
      </div>
  </footer>
</template>
<style scoped>
footer{
    background: #203260;
    width: 100%;
    display: flex;
    padding: 95px 0 55px;
}
.logo-img{
    width: 350px;
    height: 150px;
    margin-left: 300px;
    margin-top: 16px;
}
.community-and-help,
.about-gaia,
.contact-us{
    margin-left:190px;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
}
.about-gaia,
.contact-us{
    margin-left: 110px;
}
.ignore-title{
    font-size: 24px;
    margin-bottom: 14px;
}
.ignore-margin{
    margin-top: 10px;
}

.ignore-item{
    font-size: 18px;
    line-height: 25px;
    color: #B0B2C3;
}
.ignore-contact-ways{
    margin-top: 10px;
    display: flex;
    
}
.ignore-contact-way-item{
    width: 30px;
    height: 30px;
    margin-right: 12px;
}
.ignore-contact-way-item:last-child{
    margin: 0;
}
.ignore-email-box,
.ignore-phone-box{
    display: flex;
    margin-top: 26px;
    align-items: center;
}
.ignore-phone-box{
    margin-top: 5px;
}
.ignore-box{
    width:36px;
    display: flex;
    align-items: center;
    height: 20px;
}
.ignore-text,
.ignore-copyright{
    font-family: "PingFangSC-Light";
    font-size: 14px;
    color: #B0B2C3;
    line-height: 20px;
}
.ignore-copyright{
    margin-top: 2px;
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
  components:{
      DividingLine
  },
  data(){
      return {
          contactWays:['github.png','facebook.png','googleplus.png','reddit.png','send.png'],
          email:{
              imgUrl:'phone.png',
              text:'gaia@gaia.world'
          },
          phone:{
              imgUrl:'phone.png',
              text:'+46(0) 000 000 0000'
          }
      }
  }
}
</script>
