<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
  <IndexBanner></IndexBanner>
  <IndexWhatIsGAIA :whatIsGAIAShow="whatIsGAIAShow"></IndexWhatIsGAIA>
  <IndexAdvantages :advantageShow0="advantageShow0" :advantageShow1="advantageShow1" :advantageShow2="advantageShow2"></IndexAdvantages>
  <IndexApplication></IndexApplication>
  <IndexGAIAWallet></IndexGAIAWallet>
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
export default {
  components:{
      TheHeader,
      TheFooter,
      IndexBanner,
      IndexWhatIsGAIA,
      IndexAdvantages,
      IndexApplication,
      IndexGAIAWallet,
  },
  data(){
    return {
      whatIsGAIAShow:false,
      advantageShow0:false,
      advantageShow1:false,
      advantageShow2:false,
      headerBg:'header-bg-1'
    }
  },
  mounted(){
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods:{
    handleScroll () {
      let wH = window.innerHeight;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let whatIsGAIAOffsetTop = document.querySelector('#what-is-gaia').offsetTop;
      let advantageCardOffsetTop0 = document.querySelector('#advantages-card-0').offsetTop;
      let advantageCardOffsetTop1 = document.querySelector('#advantages-card-1').offsetTop;
      let advantageCardOffsetTop2 = document.querySelector('#advantages-card-2').offsetTop;
      if (scrollTop > whatIsGAIAOffsetTop - wH) {
        this.whatIsGAIAShow = true
      }
      if (scrollTop > advantageCardOffsetTop0 - wH/2) {
        this.advantageShow0 = true
      }
      if (scrollTop > advantageCardOffsetTop1 - wH/2) {
        this.advantageShow1 = true
      }
      if (scrollTop > advantageCardOffsetTop2 - wH/2) {
        this.advantageShow2 = true
      }
      if(scrollTop > wH){
        this.headerBg = 'header-bg-2';
      }else{
        this.headerBg = 'header-bg-1';
      }
    },
  }
}
</script>
