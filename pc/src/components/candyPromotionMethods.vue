<template>
    <div class="ignore-candy-methods-container ignore-text">
        <div class="ignore-method-1"><span>1. 加入</span><span class="ignore-telgram">Telegram 群组</span></div>
        <div class="ignore-method-2">
            <div>2. 把以下验证码发到群里即可获得 18 GET!</div>
            <div class="ignore-input-container">
                <div class="ignore-input-box">
                    <input class="ignore-text ignore-input">
                    <div class="ignore-text ignore-commit-btn" @click="">提交</div>
                </div>
            </div>
        </div>
        <div class="ignore-method-3">
            <div>3. 把以下链接分享给好友，每成功推荐一个好友入群，即可再获得 10 GAIA.</div>
            <div class="ignore-input-container">
                <div class="ignore-input-box">
                    <input class="ignore-text ignore-input">
                    <div class="ignore-text ignore-commit-btn" @click="">提交</div>
                </div>
            </div>
        </div>
        <div class="ignore-statistics-container">
            <div class="ignore-invited-box">
                <span class="ignore-title">已成功邀请（人次）</span>
                <span class="ignore-number">0</span>
            </div>
            <div class="ignore-Earned-box">
                <span class="ignore-title">已成功邀请（人次）</span>
                <span class="ignore-number">0</span>
            </div>
        </div>
</div>
</template>
<style scoped>
.ignore-candy-methods-container{
    margin-top: 38px;
}
.ignore-text{
    font-size: 16px;
    color: #333333;
    line-height: 22px;
}
.ignore-telgram{
    margin-left: 14px;
    color: #1A70DD;
}
.ignore-method-2,
.ignore-method-3{
    margin-top: 10px;
}
.ignore-input-container{
    margin:30px 0 20px; 
    display:flex;
    flex-direction:column;
    align-items: center;
}

.ignore-margin{
    margin: 0 0 20px;
}
.ignore-input-box{
    width: 575px;
    height: 45px;
    background: rgba(255,255,255,0.10);
    position: relative;
}
.ignore-input{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border: 1px solid #CECECE;
    border-radius: 100px;
    padding: 0 85px 0 10px;
    text-align:left;
    color: #111;
}
.ignore-commit-btn{
    background: #1A70DD;
    border-radius: 100px;
    width: 70px;
    height: 35px;
    position: absolute;
    top:5px;
    right: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.ignore-statistics-container{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.ignore-invited-box,
.ignore-Earned-box{
    background: #1A70DD;
    border-radius: 10px;
    width: 270px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-right: 35px;
}
.ignore-Earned-box{
    margin: 0;
    background: #FF3190;
}
.ignore-title{
    margin: 13px 0;   
}
.ignore-number{
    font-size: 36px;
    line-height: 50px;
}
</style>