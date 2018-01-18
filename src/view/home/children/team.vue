<template>
  <section>
    <header class="header">
      <h1>团队</h1>
      <p>一个有经验的团队，来自财务和技术</p>
    </header>
    <main class="card-container">
        <team-card></team-card>
        <team-card></team-card>
        <team-card></team-card>
        <team-card></team-card>
    </main>
    <footer>
        <section class="control">
            <section class="switch">
                <imgs @click="changeIndex('pre')" src="next"></imgs>
                <section class="switch-cyc"></section>
                <imgs @click="changeIndex('next')" style="transform:scaleX(-1)"  src="next"></imgs>
            </section>
            <section class="honour">
                <h1 class="group">核心团队</h1>
                <h1 class="position">顾问</h1>
            </section>
            <section class="page-container">
                <span class="page">1/6</span>
                <div class="progress-container">
                    <div class="progress"></div>
                </div>
            </section>
        </section>
    </footer>
  </section>
</template>

<script>
  import TeamCard from './teamcard.vue';

  export default {
    name: 'home-team',
    components:{
        TeamCard
    },
    data(){
        return {
            teamActiveIndex:0
        }
    },
    methods:{
        changeIndex(direction){

        }
    }
  }

</script>

<style scoped>
  /* header */

  .header {
    height: 407px;
  }

  .header h1 {
    font-weight: 600;
    color: #333333;
    font-size: 42px;
    line-height: 59px;
    text-align: center;
    margin-bottom: 6px;
    margin-top: 180px;
  }

  .header p {
    font-weight: 300;
    color: #666666;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  
  .card-container {
    display: flex;
    justify-content: space-between;
  }
  
  footer {
      height:353px;
  }

  .control {
      padding-top:133px;
      height:50px;
      display:flex;
      align-items: center;
      justify-content: center;
  }

  .switch {
      margin-right:32px;
      display:flex;
      align-items: center;
  }
  

  .switch-cyc {
      margin:0 16.7px;
      width:16px;
      height:16px;
      border-radius: 16px;
      background-color: #5A84D3;
  }

  .honour {
      display:flex;
      margin-right:149px;
  }

  .group {
      font-size:24px;
      line-height: 33px;
      color:#111111;
  }

  .position {
      font-size:24px;
      line-height: 33px;
      color:#999999;
      margin-left:26px;
  }

  .page-container{
      display:flex;
      align-items: center;
  }

  .page {
      color:#627792;
      font-size:16px;
      line-height: 22px;
      margin-right:17px;
  }

  .progress-container {
      width:740px;
      height:4px;
      background-color: #E5E9EF;
  }

  .progress {
      height:100%;
      width:116px;
      background-color:#5A84D3;
  }

</style>
