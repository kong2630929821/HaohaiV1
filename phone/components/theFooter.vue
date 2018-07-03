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
            class="ignore-item"
            :title="'GAIA ' + item.text">
                <span>{{item.text}}</span>
            </router-link>
            <a 
            v-else
            :href="item.link" 
            target="_blank"
            class="ignore-item"
            :title="'GAIA ' + item.text"
            rel="nofollow">
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
                class="ignore-item"
                :title="'GAIA ' + item.text">
                    <span>{{item.text}}</span>
                </router-link>
                <a 
                v-else
                target="_blank" 
                :href="item.link" 
                class="ignore-item"
                :title="'GAIA ' + item.text"
                rel="nofollow">
                    <span>{{item.text}}</span>
                </a>
                </li>
            </ul>
        </div>
        <div class="contact-us ignore-text">
            <h4 class="title">{{$t('footerContactAs.title')}}</h4>
            <div class="thin-line"></div>
            <div class="ignore-contact-ways">
                <div  v-for="(item,index) in contactWays" :key="index" :class="item.isHover ? 'contact-way-item contact-way-item-active' : 'contact-way-item' "  @click="mouseClick(index)" @mouseout="mouseNormal(index)">
                    <div :style="'background-image:url(/phoneImage/' + (item.isHover ? item.hover:item.normal) + ')'" class="contact-img"></div>
                    <div :style="'background-image:url(/phoneImage/' + item.qrcode + ')'" :class="item.isHover ? 'ignore-qrcode-img qrcode-img-show' : 'ignore-qrcode-img'"></div>
                    <span class="ignore-contacts-text" >{{item.text}}</span>
                </div>
            </div>
            <div class="email-box">
                <div class="box">
                <img :src="'/phoneImage/' + $t('footerContactAs.email.imgUrl')">
                </div>
                <span class="text">{{$t('footerContactAs.email.text')}}</span>
            </div>
            <div class="phone-box">
                <div class="box">
                <img :src="'/phoneImage/' + $t('footerContactAs.address.imgUrl')">
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
.ignore-text{
    font-size: 14px;
}
.community-and-help-content,
.about-gaia-content,
.contact-ways{
    display: flex;
}

.ignore-item{
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

.email-box,
.phone-box{
    display: flex;
    align-items: center;
    margin-top: 14px;
    color: #B0B2C3;
}
.phone-box{
    margin-top: 2px;
    display: none;
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
.ignore-contact-ways{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.contact-way-item{
    margin-right: 12px;
    position: relative;
    display: flex;
    align-items: center;
    color: #B0B2C3;
}
.contact-way-item-active{
    color: #1A70DD;
}
.contact-way-item:last-child{
    margin: 0;
}
.contact-img{
    flex-basis: 20px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-position: center;
    background-size: cover;
    
}
.ignore-qrcode-img{
    position: absolute;
    top: -187px;
    left: 0;
    width: 172px;
    height: 172px;
    display: none;
    background-position: center;
    background-size: cover;
}
.qrcode-img-show{
    display: block;
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
                text:"WeChat",
                normal:'wechat.png',
                hover:'wechat2.png',
                isHover:false,
                qrcode:"gaia_QR.png",
                link:''
            }],
            
        }
    },
    computed:{
        footerLogo:function(){
            return this.$i18n.locale === 'zh-CN' ? 'footer_logo.png' : 'logo-footer2.png'
        }
    },
    methods:{
        mouseClick(index){
            this.contactWays[index].isHover = !this.contactWays[index].isHover;
        },
        mouseNormal(index){
            //this.contactWays[index].isHover = false;
        }
    }

}
</script>
    