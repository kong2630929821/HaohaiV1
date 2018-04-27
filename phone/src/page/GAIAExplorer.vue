<template>
<div>
  <TheHeader ></TheHeader>
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

}
</script>
