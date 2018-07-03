<template>
<!--关于我们  我们的团队-->
    <section class="our-team">
        <div class="text-box">
            <h6 class="title">{{$t('aboutUsOurTeam.title')}}</h6>
            <DividingLine></DividingLine>
            <div class="our-team-text">{{$t('aboutUsOurTeam.text')}}</div>
        </div>
        <div class="persons">
            <div class="card-item" v-for="(item,index) in $t('aboutUsOurTeam.item')" :key="index" @click="showPerson(index)">{{item.name}}</div>
            <AboutUsOurTeamPopBox 
            v-if="curShow >= 0"
            :selfIntroduction="$t('aboutUsOurTeam.item[' + curShow + ']')"
            v-on:hiddenCard="hiddenCard"
                >
            </AboutUsOurTeamPopBox>
        </div>
    </section>
</template>
<style scoped>

.our-team{
    width: 100%;
    padding:60px 16px;
    background: #ECEFF1;
    position: relative;
}
.title{
    font-size: 24px;
    color: #333333;
    line-height: 33px;
}
.our-team-text{
    font-size: 12px;
    line-height: 17px;
    color: #666666;
}
.persons{
    display: flex;
    margin-top: 57px;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card-item{
    width: 163px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(50,50,93,0.10);
    border-radius: 4px;
    margin-bottom: 17px;
    font-size: 18px;
    color: #333333;
    font-family: "PingFangSC-Light";
    line-height: 25px;
}


</style>
<script>
import DividingLine from './dividingLine'
import AboutUsOurTeamPopBox from './aboutUsOurTeamPopBox'
export default {
    components:{
        DividingLine,
        AboutUsOurTeamPopBox
    },
    data(){
        return {
            curShow:-1
        }
    },
    methods:{
        showPerson(index){
            this.curShow = index;
        },
        hiddenCard(){
            this.curShow = -1;
        }
    }
}
</script>
        
        