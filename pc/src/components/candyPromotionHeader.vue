<template>
    <div class="ignore-candy-header">
        <div class="logo-container">
            <div class="ignore-logo-box">
                <img src="/pc/static/image/img_candy_logo.jpg" class="ignore-candy-logo">
            </div>
            <div class="ignore-header-text ignore-lang">中文</div>
        </div>
        <div class="ignore-header-text">快速收取免费糖果</div>
        <div class="ignore-header-text ignore-join-btn">加入Telegram群组</div>
        <div class="ignore-header-text ignore-candy-desc">
            <div class="ignore-candy-desc-text">{{text}}</div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.ignore-candy-header{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo-container{
    margin-top: 20px;
    position: relative;
}
.ignore-lang{
    position: absolute;
    top: 60px;
    right: -240px;
}
.ignore-logo-box{
    width: 311px;
    height: 311px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ignore-candy-logo{
    width: 250px;
    height: 250px;
}
.ignore-header-text{
    font-size: 16px;
    color: #000000;
    text-align: center;
    line-height: 22px;
}
.ignore-join-btn{
    width: 240px;
    height: 40px;
    color: #FFFFFF;
    background: #1A70DD;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px;
}

.ignore-candy-desc{
    min-width: 680px;
    max-width: 900px;
    margin: 0 100px;
    text-align: left;
}
.ignore-candy-desc-text{
    text-align: center;
}
</style>
<script>
export default {
    data(){
        return {
            text:`GAIAWorld是一个快速收取免费糖果的工具，不定期空投1亿GAIA糖果，尽快领取,入群即送18个，推荐好友入群再送10个。
                推荐更多好友会有惊喜！`
        }
    }
}    
</script>