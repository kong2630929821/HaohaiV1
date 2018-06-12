<template>
<!--回到顶部-->
  <div class="ignore-back-to-top" @click="goTop" name="button" v-show="visible" :style="customStyle">
      <img src="../../static/phoneImage/btn-top.png" class="back-to-top-img">
  </div>
</template>
<style scoped>
.ignore-back-to-top{
    position: fixed;
    cursor: pointer;
}
</style>
<script>
export default {
    props:{
        visibleHeight: { // 按钮出现条件
            type: Number,
            default: 400
        },
        rate: {
            type: Number, // 滚动速率
            default: 4
        },
        customStyle: { // 默认样式
            type: Object,
            default() {  // 此处由于是Object 所以要返回一个函数
                return {
                    right: '30px',
                    bottom: '10vh',
                    width: '40px',
                    height: '40px',
                    'border-radius': '4px',
                    'line-height': '45px',
                }
            }
        }
    },
    data() {
        return {
            scrollTop: '',
            visible: false, // 是否显示
            interval: null  // 定时器
        }
    },
    mounted() {
        // Dom加载完毕时监听scroll事件
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
            if (this.interval) {
                clearInterval(this.interval)
            }
    },
    methods:{
        handleScroll() {
            // 判断条件
            this.visible = window.pageYOffset > this.visibleHeight
            this.scrollTop = window.pageYOffset
        },
        goTop(e) {
            this.interval = setInterval(()=>{
                this.scrollTop = this.scrollTop + (-this.scrollTop)/this.rate
                window.scrollTo(0,this.scrollTop)
                if(this.scrollTop <= 0){
                    window.scrollTo(0,0)
                    clearInterval(this.interval)
                }
            },13)
        }
    }
}
</script>
