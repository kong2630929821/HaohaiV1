<template>
<footer>
    <img :src="'/pcImage/' + footerLogo" class="logo-img" :alt="$t('footerLogo.bgAlt')" :title="$t('footerLogo.bgTitle')">
    <div class="community-and-help">
        <h4 class="ignore-title">{{$t('footerCommunityAndHelp.title')}}</h4>
        <DividingLine></DividingLine>
        <ul class="ignore-margin">
            <span v-for="(item,index) in $t('footerCommunityAndHelp.item')" 
                :key="index"  >
            <nuxt-link 
                v-if="item.link.indexOf('http') === 0 ? false : true"
                :to="item.link" 
                class="ignore-item"
                :title="'GAIA ' + item.text">
                    <li>{{item.text}}</li>
            </nuxt-link>
            <a 
                v-else
                :href="item.link" 
                target="_blank"
                class="ignore-item"
                :title="'GAIA ' + item.text"
                rel="nofollow">
                    <li>{{item.text}}</li>
            </a>
            </span>
        </ul>
    </div>
    <div class="about-gaia">
        <h4 class="ignore-title">{{$t('footerAboutGAIA.title')}}</h4>
        <DividingLine></DividingLine>
        <ul class="ignore-margin">
            <span  v-for="(item,index) in $t('footerAboutGAIA.item')" 
                :key="index" >
            <nuxt-link 
                v-if="item.link.indexOf('http') === 0 ? false : true"
                :to="item.link" 
                class="ignore-item"
                :title="'GAIA ' + item.text">
                    <li>{{item.text}}</li>
            </nuxt-link>
            <a 
                v-else
                target="_blank" 
                :href="item.link" 
                class="ignore-item"
                :title="'GAIA ' + item.text"
                rel="nofollow">
                    <li>{{item.text}}</li>
            </a>
            </span>
        </ul>
    </div>
    <div class="contact-us">
        <h2 class="ignore-title">{{$t('footerContactAs.title')}}</h2>
        <DividingLine></DividingLine>
        <div class="ignore-contact-ways">
            <a :href="item.link" v-for="(item,index) in contactWays" :key="index" class="ignore-contact-way-item"  @mouseover="mouseHover(index)" @mouseout="mouseNormal(index)">
                <img :src="'/pcImage/' + (item.isHover ? item.hover:item.normal)" class="ignore-contact-img">
                <img :src="'/pcImage/' + item.qrcode" :class="item.isHover ? 'ignore-qrcode-img qrcode-img-show' : 'ignore-qrcode-img'">
                <span class="ignore-contacts-text" >{{item.text}}</span>
            </a>
        </div>
        <div class="ignore-email-box">
            <div class="ignore-box">
            <img :src="'/pcImage/' + $t('footerContactAs.email.imgUrl')">
            </div>
            <span  >{{$t('footerContactAs.email.text')}}</span>
        </div>
        <div class="ignore-phone-box">
            <div class="ignore-box">
                <img :src="'/pcImage/' + $t('footerContactAs.address.imgUrl')">
            </div>
            <span class="ignore-text">{{$t('footerContactAs.address.text')}}</span>
        </div>
        <!--<div class="ignore-copyright">{{$t('footerContactAs.copyright')}}</div>-->
    </div>
</footer>
</template>
<style scoped>
footer{
    background: #203260;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 95px 0 55px;
}
.logo-img{
    width: 350px;
    height: 150px;
    margin-top: 16px;
}
.community-and-help,
.about-gaia,
.contact-us{
    margin-left:150px;
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
    line-height: 33px;
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
    flex-direction: column;
}
.ignore-contact-way-item{
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    color: #B0B2C3;
}
.ignore-contact-way-item:hover{
    color: #1A70DD;
}
.ignore-contacts-text{
    font-size: 14px;
    line-height: 22px;
}
.ignore-contact-img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.ignore-contact-way-item:last-child{
    margin: 0;
}
.ignore-qrcode-img{
    position: absolute;
    top: -187px;
    left: 0;
    width: 172px;
    height: 172px;
    display: none;
}
.qrcode-img-show{
    display: block;
}
.ignore-email-box,
.ignore-phone-box{
    display: flex;
    margin-top: 26px;
    align-items: center;
    color: #B0B2C3;
}
.ignore-phone-box{
    margin-top: 5px;
    display: none;
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
@media only screen and (max-width: 1199px) {

    .ignore-title{
        font-size: 20px;
        line-height: 28px;
    }
    .ignore-item{
        font-size: 16px;
        line-height: 21px;
    }
    .community-and-help,
    .about-gaia,
    .contact-us{
        margin-left:5vw;
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
    }
    .ignore-text,
    .ignore-copyright{
        font-size: 13px;
    }
}
@media only screen and (max-width: 991px) {

    .ignore-title{
        font-size: 16px;
        line-height: 24px;
    }
    .ignore-item{
        font-size: 13px;
        line-height: 20px;
    }
    .community-and-help,
    .about-gaia,
    .contact-us{
        margin-left:2vw;
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
    }
    .ignore-contact-way-item{
        width: 30px;
        height: 30px;
    }
    .ignore-email-box{
        margin-top: 18px;
    }
    .ignore-text,
    .ignore-copyright{
        font-size: 12px;
    }
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
            }/* ,{
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
            }, */],
            
        }
    },
    computed:{
        footerLogo:function(){
            return this.$i18n.locale === 'zh-CN' ? 'footer_logo.png' : 'logo-footer2.png'
        }
    },
    methods:{
        mouseHover(index){
            this.contactWays[index].isHover = true;
        },
        mouseNormal(index){
            this.contactWays[index].isHover = false;
        }
    }
}
</script>
      