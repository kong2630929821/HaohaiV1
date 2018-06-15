　<template>
    <div>
      <iframe width="100%" height="500" scrolling="no"
    :src="'/static/web/viewer.html?file=../' + openFile()"></iframe>
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
    methods:{
      openFile:function(){
        return  this.$i18n.locale === 'zh-CN' ? 'whitePaper_zh.pdf' : 'whitePaper_en.pdf'
      },
    },
}
</script>