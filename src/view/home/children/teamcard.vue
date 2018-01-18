<template>
  <section class="card">
    <figure></figure>
    <h1>职位</h1>
    <p>姓名：这是一段介绍一个基于真实身份的去中心化社交网络，用户可以通过Timeline发布博客，图片</p>
  </section>
</template>

<script>
  export default {
    name: 'team-card'
  }

</script>


<style scoped>
  /* card区域 */

  .card {
    flex: 1 1 auto;
    height: 500px;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    padding: 0 31px;
  }

  .card:not(:last-child) {
    margin-right: 7px;
  }

  .card:hover {
    border: 1px solid #00B6FF;
  }

  figure {
      height:210px;
      width:210px;
      border-radius:210px;
      background-color: rgb(196, 196, 196);
      margin:80px auto 30px auto;
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: #3A478F;
    text-align: center;
    margin-bottom:20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #666666;
    text-align: center;
  }

</style>
