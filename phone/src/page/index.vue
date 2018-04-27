<template>
<div>
  <TheHeader ></TheHeader>
  <IndexBanner></IndexBanner>
  <IndexWhatIsGAIA ></IndexWhatIsGAIA>
  <IndexAdvantages ></IndexAdvantages>
  <IndexApplication></IndexApplication>
  <IndexGAIAWallet></IndexGAIAWallet>
  <BackToTop></BackToTop>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import IndexBanner from '@/components/indexBanner'
import IndexWhatIsGAIA from '@/components/indexWhatIsGAIA'
import IndexAdvantages from '@/components/indexAdvantages'
import IndexApplication from '@/components/indexApplication'
import IndexGAIAWallet from '@/components/indexGAIAWallet'
import BackToTop from '@/components/backToTop'
export default {
  components:{
      TheHeader,
      TheFooter,
      IndexBanner,
      IndexWhatIsGAIA,
      IndexAdvantages,
      IndexApplication,
      IndexGAIAWallet,
      BackToTop,
  },

 
}
</script>
