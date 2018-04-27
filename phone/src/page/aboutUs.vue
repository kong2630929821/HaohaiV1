<template>
<div>
  <TheHeader ></TheHeader>
  <AboutUsAboutGAIA></AboutUsAboutGAIA>
  <AboutUsOurTeam></AboutUsOurTeam>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import AboutUsAboutGAIA from '@/components/aboutUsAboutGAIA'
import AboutUsOurTeam from '@/components/aboutUsOurTeam'
export default {
  components:{
      TheHeader,
      TheFooter,
      AboutUsAboutGAIA,
      AboutUsOurTeam,
  },
 
}
</script>
