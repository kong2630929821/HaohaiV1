<template>
<header :class="headerBg + ' ignore-header-min-height'">
    <img src="/pcImage/logo.png" class="logo-img">
    <ul class="nav-menu">
        <nuxt-link 
            v-for="(menuItem,index) in $t('headerMenu')" 
            :key="index" 
            :to="menuItem.link === '/whitePaper' ? (menuItem.link + '/?lang=' + $i18n.locale) : menuItem.link + '/'"
            :class="menuItem.disabled ? 'menu-item ignore-menu-item menu-item-disabled' : 'menu-item ignore-menu-item'" 
            active-class="active"
            :exact="menuItem.link === '' ? true : false"
            :target="menuItem.link === '/whitePaper' ? '_blank' : ''"
            :title="'GAIA ' + menuItem.text"
            >
                <li >
                    {{menuItem.text}}
                </li>
        </nuxt-link>
    </ul>
    <div class="switch-lang-btn ignore-switch-lang-btn">
        {{$t('langSwitch.locale')}}<img src="/pcImage/triangular.png" class="ignore-triangular">
        <ul :class="'ignore-switch-lang switch-lang-' + $t('langSwitch.langs').length">
            <li v-for="(item,index) in $t('langSwitch.langs')" :key="index" class="switch-lang-item ignore-switch-lang-item" @click="switchLang(item.lang)"><span>{{item.text}}</span></li>
        </ul>
    </div>
</header>
</template>

<style scoped>
header{
    width: 100%;
    font-family: 'PingFangSC-Light';
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px 0 45px;
    position: fixed;
    top: 0;
    z-index: 999;
}
.ignore-header-min-height{
    min-height: 40px;
}
.header-bg-1{
    background: rgba(61,107,193,0.80);
}
.header-bg-2{
    background: rgba(250,250,250,0.95);
}
.logo-img{
    width: 213px;
    height: 50px;
}
.nav-menu{
    margin-left: 39px;
    flex: 1 0 0;
    display: flex;
    align-items: center;
}

.ignore-menu-item,
.ignore-sub-menu-item,
.ignore-switch-lang-btn,
.ignore-switch-lang-item{ 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B0B2C3;
    position: relative;
    cursor: pointer;
}

.ignore-menu-item:after,
.ignore-sub-menu-item:after,
.ignore-switch-lang-item:after{
    content: " ";
    width: 0px;
    height: 1px;
    background: #1A70DD;
    position: absolute;
    top: 39px;
    transition: all .2s linear;
}

.ignore-menu-item:hover:after,
.ignore-switch-lang-item:hover:after{
    width: 100px;
}


.ignore-switch-lang-btn{
    font-size: 16px;
    height: 40px;
    line-height: 22px;
    width: 100px;
}
.ignore-menu-item{
    margin-right: 25px;
    margin-left: 25px;
    font-size: 16px;
    height: 40px;
    line-height: 22px;
}
.ignore-menu-item:first-child{
    margin-left: 0;
}
.ignore-menu-item:last-child{
    margin-right: 0;
}

.ignore-switch-lang{
    position: absolute;
    top: 40px;
    left: 0;
    overflow: hidden;
    height: 0;
    transition: all .2s linear;
}
.ignore-switch-lang-item{
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(250,250,250,0.95);
    
}
.ignore-switch-lang-btn:hover .switch-lang-1{
    height: 40px;
}
.ignore-switch-lang-btn:hover .switch-lang-2{
    height: 80px;
}
.ignore-triangular{
    margin-left: 3px;
    margin-top: 2px;
    transition: all .2s linear;
}
.ignore-switch-lang-btn:hover .ignore-triangular{
    transform: rotate(180deg)
}
.active{
    color: #1A6BD3;
}
.menu-item-disabled{
    pointer-events:none;
    opacity: 0.2;
}
@media only screen and (max-width: 1199px) {
    
    .ignore-menu-item,
    .ignore-sub-menu-item,
    .ignore-switch-lang-btn,
    .ignore-switch-lang-item{
        font-size: 15px;
        height: 40px;
        line-height: 20px;
    }
    .ignore-menu-item{
        margin-right: 15px;
        margin-left: 15px;
    }
    .ignore-sub-menu-item,
    .ignore-switch-lang-btn,
    .ignore-switch-lang-item{
        width: 90px;
    }
    .ignore-menu-item:hover:after{
        width: 70px;
    }
}
@media only screen and (max-width: 991px) {
    .ignore-menu-item,
    .ignore-sub-menu-item,
    .ignore-switch-lang-btn,
    .ignore-switch-lang-item{
        font-size: 12px;
        height: 40px;
        line-height: 17px;
    }
    .ignore-sub-menu-item,
    .ignore-switch-lang-btn,
    .ignore-switch-lang-item{
        width: 75px;
    }
    .ignore-menu-item{
        margin-right: 10px;
        margin-left: 10px;
    }
    .ignore-menu-item:hover:after{
        width: 50px;
    }
}
</style>
<script>
export default {
    data(){
        return {
            headerBg:""
        }
    },
    mounted(){
        this.$nextTick(function () {
            window.addEventListener('scroll', this.handleScroll)
        })
    },
    methods:{
        switchLang(lang){
            this.$i18n.locale = lang;
            document.title = this.$t('explorerTitle');
        },
        handleScroll () {
            let wH = window.innerHeight;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop > wH){
                this.headerBg = 'header-bg-2';
            }else{
                this.headerBg = '';
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>
      
      