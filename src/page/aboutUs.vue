<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
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
  data(){
    return {
      headerBg:'header-bg-2'
    }
  },
}
</script>
