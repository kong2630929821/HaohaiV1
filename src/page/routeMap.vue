<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
export default {
  components:{
      TheHeader,
      TheFooter,
  },
  data(){
    return {
      headerBg:'header-bg-2'
    }
  },
}
</script>
