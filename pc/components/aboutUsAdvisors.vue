<template>
<!--关于我们  顾问团队-->
    <section class="our-team ignore-our-team">
        <div class="text-box">
            <h6 class="ignore-title">{{$t('aboutUsAdvisors.title')}}</h6>
            <DividingLine></DividingLine>
            <div class="ignore-our-team-text">{{$t('aboutUsAdvisors.text')}}</div>
        </div>
        <div class="ignore-persons persons">
            <div class="card-item ourteam-card-item" v-for="(item,index) in $t('aboutUsAdvisors.item')" :key="index">
                <span class="ignore-person-name person-name">{{item.name}}</span>
                <div class="ignore-line"></div>
                <div class="ignore-person-text">{{item.text}}</div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.our-team{
    width: 100%;
    padding:0 250px;
}
.ignore-our-team{
    margin-bottom: 100px;
}
.text-box{
    margin-right: 73px;
}
.ignore-title{
    font-family: "PingFangSC-Light";
    font-size: 36px;
    color: #333333;
    line-height: 50px;
    margin-bottom: 10px;
}

.ignore-our-team-text{
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
    color: #666666;
}
.ignore-persons{
    display: flex;
    margin-top: 100px;
    flex-wrap: wrap;
}
.persons{
    margin-left: -70px;
}
.card-item{
    width: 266px;
    display: flex;
    flex-direction: column;

}

.person-name{
    
    font-family: "PingFangSC-Light";
    font-size: 24px;
    color: #1A70DD;
    line-height: 33px;
}
.ignore-person-name{
    margin-top: 10px;
}
.ignore-line{
    background: #1A70DD;
    width: 100%;
    height: 1px;
    margin-top: 10px;
}
.ignore-person-text{
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    margin-top: 17px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
    white-space: pre-wrap;
    min-height: 200px;
}
@media only screen and (max-width: 1199px) {
    .ignore-title{
        font-size: 34px;
    }
    .our-team{
        padding:  0 12vw;
    }
}
@media only screen and (max-width: 991px) {
    .our-team{
        padding:  0 10vw;
    }
    .ignore-title{
        font-size: 32px;
    }
    
    .ignore-person-name{
        font-size: 13px;
    }
    .ignore-person-text{
        font-size: 13px;
    }
}
</style>
<script>
import DividingLine from './dividingLine'
export default {
    components:{
        DividingLine
    }
}
</script>
        
                