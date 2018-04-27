<template>
    <section class="route-map-stages">
        <RouteMapStage 
            v-for="(stage,index) in $t('routeMapStages.stages')" 
            :key="index" :stage="stage" 
            :folded="curUnfolded === index ? true : false"
            :index="index"
            :lastIndex = "lastIndex"
            v-on:clickRouteMap="clickRouteMap">
        </RouteMapStage>
    </section>
</template>
<style scoped>
.route-map-stages{
    padding: 40px 8px 0 8px;
    margin-bottom: 50px;
}
</style>
<script>
import RouteMapStage from './routeMapStage'
export default {
  components:{
      RouteMapStage
  },
  data(){
      return {
          lastIndex:-1,//上一次展开item
          curUnfolded:-1
      }
  },
  methods:{
      clickRouteMap(index){
          if(this.curUnfolded === index){
              this.curUnfolded = -1;
          }else{
              this.curUnfolded = index;
          }
          this.lastIndex = index
      }
  }
}
</script>

