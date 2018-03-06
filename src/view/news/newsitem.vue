<template>
  <section class="item" >
    <section class="content">
      <header>
        <h1>{{this.obj.title}}</h1>
        <aside>
          <span>{{timeStr}}</span> |
          <span>{{typeStr}}</span>
        </aside>
      </header>
      <main>
        <p>{{this.obj.desc}}
          <span>/ [...]</span>
        </p>
      </main>
    </section>
  </section>
</template>

<script>

  export default {
    name: 'news-item',
    props: ['obj'],
    computed: {
      timeStr() {
        return this.obj.time.toLocaleString("UTC", {
          hour12: false
        })
      },
      typeStr() {
        return this.obj.type.join(',')
      }
    },
    methods: {
 
    }
  }

</script>

<style scoped>
  .item {
    padding: 40px;
    border-bottom: 1px solid #DDDDDD;
    cursor: pointer;
  }

  .item:hover {
    background-color: #F4F4F5;
  }

  .content {
    width: 900px;
    margin: 0 auto;
  }

  h1 {
    font-size: 32px;
    color: #666666;
    font-weight: 600;
  }

  aside {
    margin-top: 20px;
    color: #666666;
    line-height: 27px;
    font-size: 18px;
  }

  p {
    margin-top: 14px;
    font-size: 18px;
    color: #666666;
    line-height: 30px;
    font-weight: 300;
  }

</style>
