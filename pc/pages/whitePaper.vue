　<template>
    <div>
        <iframe :src="'/' + fileName"></iframe>
    </div>
　</template>
<style scoped>
iframe{
    width: 100%;
    height: 100vh;
}
</style>

<script>

export default {
    layout:"common",
    computed:{
        fileName(){
            return  this.$route.query.lang == 'zh-CN' ? 'whitePaper_zh.pdf' : 'whitePaper_en.pdf'
        }
    }
}
</script>