<template>
  <div>
    <IndexBanner></IndexBanner>
    <IndexWhatIsGAIA ></IndexWhatIsGAIA>
    <IndexAdvantages ></IndexAdvantages>
    <IndexApplication></IndexApplication>
    <IndexGAIAWallet></IndexGAIAWallet>
    <BackToTop></BackToTop>
  </div>
  </template>
  <script>
  import IndexBanner from '../components/indexBanner'
  import IndexWhatIsGAIA from '../components/indexWhatIsGAIA'
  import IndexAdvantages from '../components/indexAdvantages'
  import IndexApplication from '../components/indexApplication'
  import IndexGAIAWallet from '../components/indexGAIAWallet'
  import BackToTop from '../components/backToTop'
  export default {
    components:{
        IndexBanner,
        IndexWhatIsGAIA,
        IndexAdvantages,
        IndexApplication,
        IndexGAIAWallet,
        BackToTop
    },
  
   
  }
  </script>
  