<template>
<footer>
    <div class="community-and-help">
        <h4 class="title">{{$t('footerCommunityAndHelp.title')}}</h4>
        <div class="thin-line"></div>
        <ul class="community-and-help-content">
            <li v-for="(item,index) in $t('footerCommunityAndHelp.item')" 
            :key="index" 
            :class="$i18n.locale === 'zh-CN' ? 'cn-margin' : 'en-margin'" >
            <router-link 
            v-if="item.link.indexOf('http') === 0 ? false : true"
            :to="item.link" 
            class="item">
                <span>{{item.text}}</span>
            </router-link>
            <a 
            v-else
            :href="item.link" 
            target="_blank"
            class="item">
                <span>{{item.text}}</span>
            </a>
            </li>
        </ul>
    </div>
    <div class="about-gaia">
          <h4 class="title">{{$t('footerAboutGAIA.title')}}</h4>
          <div class="thin-line"></div>
          <ul class="about-gaia-content">
              <li  v-for="(item,index) in $t('footerAboutGAIA.item')" 
                :key="index" >
              <router-link 
                v-if="item.link.indexOf('http') === 0 ? false : true"
                :to="item.link" 
                class="item">
                    <span>{{item.text}}</span>
              </router-link>
              <a 
                v-else
                target="_blank" 
                :href="item.link" 
                class="item">
                    <span>{{item.text}}</span>
              </a>
              </li>
          </ul>
      </div>
      <div class="contact-us">
          <h4 class="title">{{$t('footerContactAs.title')}}</h4>
          <div class="thin-line"></div>
          <div class="contact-ways">
              <span  v-for="(item,index) in contactWays" :key="index" class="contact-way-item" >
              <router-link 
                v-if="item.link.indexOf('http') === 0 ? false : true"
                :to="item.link" 
                class="item">
                    <img :src="'../../static/phoneImage/' + (item.isHover ? item.hover:item.normal)">
              </router-link>
              <a 
                v-else
                target="_blank" 
                :href="item.link" 
                class="item">
                    <img :src="'../../static/phoneImage/' + (item.isHover ? item.hover:item.normal)">
              </a>
              </span>
          </div>
          <div class="email-box">
              <div class="box">
              <img :src="'../../static/phoneImage/' + $t('footerContactAs.email.imgUrl')">
              </div>
              <span class="text">{{$t('footerContactAs.email.text')}}</span>
          </div>
          <div class="phone-box">
              <div class="box">
                <img :src="'../../static/phoneImage/' + $t('footerContactAs.address.imgUrl')">
              </div>
              <span class="text">{{$t('footerContactAs.address.text')}}</span>
          </div>
      </div>
</footer>
</template>
<style scoped>
footer{
    padding: 60px 0 30px 24px;
    background: #203260;
    width: 100%;
}
.title{
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #FFFFFF;
    line-height: 22px;
}
.thin-line{
    width: 80px;
    height: 1px;
    background: #666;
    margin: 10px 0;
}
.about-gaia,
.contact-us{
    margin-top: 30px;
}
.community-and-help-content,
.about-gaia-content,
.contact-ways{
    display: flex;
}

.item{
    font-size: 14px;
    color: #B0B2C3;
    line-height: 30px;
}

.about-gaia-content li{
    margin-right: 30px;
}
.cn-margin{
    margin-right: 30px;
}
.en-margin{
    margin-right: 15px;
}
.community-and-help-content li:last-child,
.about-gaia-content li:last-child{
    margin-right: 0;
}
.contact-way-item{
    width: 30px;
    height: 30px;
    margin-right: 16px;
}
.contact-way-item img{
    width: 100%;
    height: 100%;
}
.email-box,
.phone-box{
    display: flex;
    align-items: center;
    margin-top: 34px;
}
.phone-box{
    margin-top: 2px;
}
.box{
    width: 20px;
    height: 20px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.box img{
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}
.text{
    font-family: "PingFangSC-Light";
    font-size: 14px;
    color: #B0B2C3;
    line-height: 20px;
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
          contactWays:[{
              normal:'github.png',
              hover:'ion-github2.png',
              isHover:false,
              link:''
          },{
              normal:'facebook.png',
              hover:'ion-facebook2.png',
              isHover:false,
              link:''
          },{
              normal:'googleplus.png',
              hover:'ion-googleplus2.png',
              isHover:false,
              link:''
          },{
              normal:'reddit.png',
              hover:'ion-reddit2.png',
              isHover:false,
              link:''
          },{
              normal:'send.png',
              hover:'ion-send2.png',
              isHover:false,
              link:''
          },],
          
      }
  },
  computed:{
      footerLogo:function(){
          return this.$i18n.locale === 'zh-CN' ? 'footer_logo.png' : 'logo-footer2.png'
      }
  },

}
</script>
