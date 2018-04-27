<template>
<div>
  <TheHeader></TheHeader>
  <WalletBanner></WalletBanner>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import WalletBanner from '@/components/walletBanner'
export default {
  components:{
      TheHeader,
      TheFooter,
      WalletBanner,
  },
}
</script>
