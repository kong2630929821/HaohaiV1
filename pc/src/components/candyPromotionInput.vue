<template>
    <div class="ignore-input-container">
        <div class="ignore-text ignore-margin">请输入您的GAIA接收地址  免费获得GAIA</div>
        <div class="ignore-input-box">
            <input class="ignore-text ignore-input">
            <div class="ignore-text ignore-commit-btn" @click="commitClick">提交</div>
        </div>
    </div>
</template>
<style scoped>
.ignore-input-container{
    margin:38px 0 20px; 
    display:flex;
    flex-direction:column;
    align-items: center;
}
.ignore-text{
    font-size: 16px;
    color: #000000;
    text-align: center;
    line-height: 22px;
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
</style>
<script>
export default {
    methods:{
        commitClick(){
            this.$router.push({path: '/candyPromotionStep2', query: {selected: "2"}});
        }
    }
}    
</script>