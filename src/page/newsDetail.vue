<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
  <NewsDetailBody></NewsDetailBody>
  
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import NewsDetailBody from '@/components/newsDetailBody'

export default {
  components:{
      TheHeader,
      TheFooter,
      NewsDetailBody,
  },
  data(){
    return {
      headerBg:'header-bg-2'
    }
  },
}
</script>
