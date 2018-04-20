<template>
<div>
  <TheHeader :headerBg="headerBg"></TheHeader>
  <RouteMapBanner></RouteMapBanner>
  <RouteMapStages></RouteMapStages>
  <TheFooter></TheFooter>
</div>
</template>
<script>
import TheHeader from '@/components/theHeader'
import TheFooter from '@/components/theFooter'
import RouteMapBanner from '@/components/routeMapBanner'
import RouteMapStages from '@/components/routeMapStages'
export default {
  components:{
      TheHeader,
      TheFooter,
      RouteMapBanner,
      RouteMapStages,
  },
  data(){
    return {
      headerBg:'header-bg-2'
    }
  },
}
</script>
