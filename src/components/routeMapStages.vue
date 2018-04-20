<template>
    <section class="ignore-route-map-stages">
        <RouteMapStage v-for="(stage,index) in $t('routeMapStages.stages')" :key="index" :stage="stage"></RouteMapStage>
    </section>
</template>
<style scoped>
.ignore-route-map-stages{
    margin-top: 70px;
}
</style>
<script>
import RouteMapStage from './routeMapStage'
export default {
  components:{
      RouteMapStage
  }
}
</script>

