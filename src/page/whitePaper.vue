　<template>
    <div>
  　　<iframe src="../../static/README.pdf"></iframe>
    </div>
　</template>
<style scoped>
iframe{
    width: 100%;
    height: 100vh;
}
</style>

<script>
import VuePdf from 'vue-pdf'

export default {
  　components: {
        VuePdf
  　}
}
</script>