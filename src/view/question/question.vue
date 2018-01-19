<template>
  <section>
    <header></header>
    <main>
      <section class="block">
        <h1 class="title">常见问题</h1>
        <main class="container">
          <section v-for="(item,index) of questions">
            <h1 class="q-title">{{item.title}}</h1>
            <section class="text" v-html="item.content"></section>
          </section>
        </main>
      </section>
    </main>
  </section>
</template>

<script>
  import questions from './questions.json';
  export default {
    name: 'questions',
    data() {
      return {
        questions
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    }
  }

</script>

<style scoped>
  header {
    height: 180px;
    background-color: #003874;
  }

  main {
    min-height: 300px;
  }

  .block {
    margin-top: 120px;
  }

  .title {
    text-align: center;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 110px;
  }

  .q-title {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 10px;
    position: relative;
  }

  .q-title::before {
    position: absolute;
    top: 6px;
    left: -20px;
    width: 6px;
    height: 6px;
    background-color: black;
    content: "";
  }

  .text {
    font-size: 16px;
    line-height: 18px;
  }

</style>
