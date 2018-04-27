<template>
<div>
  <TheHeader ></TheHeader>
  <NewsList></NewsList>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import NewsList from '@/components/newsList'
export default {
  components:{
      TheHeader,
      TheFooter,
      NewsList
  },
  
}
</script>
