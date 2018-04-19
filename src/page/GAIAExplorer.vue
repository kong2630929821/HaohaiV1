<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
  <GAIAExplorerSearchBox></GAIAExplorerSearchBox>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import GAIAExplorerSearchBox from '@/components/GAIAExplorerSearchBox'
export default {
  components:{
      TheHeader,
      TheFooter,
      GAIAExplorerSearchBox,
  },
  data(){
    return {
      headerBg:'header-bg-2'
    }
  },
}
</script>
