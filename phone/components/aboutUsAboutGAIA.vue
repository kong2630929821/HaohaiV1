<template>
<!--关于我们  关于GAIA-->
    <section class="about-gaia">
        <div class="text-box">
            <h1 class="title">{{$t('aboutUsAboutGAIA.title')}}</h1>
            <DividingLine></DividingLine>
            <div class="gaia-text gaia-text">{{$t('aboutUsAboutGAIA.text')}}</div>
        </div>
    </section>
</template>
<style scoped>
.about-gaia{
    padding:0 24px;
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: center;
}
.text-box{
    margin: 114px 0 60px;
}
.title{
    font-family: "PingFangSC-Regular";
    font-size: 24px;
    color: #333333;
    line-height: 33px;
}
.gaia-text{
    font-size: 12px;
    line-height: 17px;
    color: #666666;
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
        