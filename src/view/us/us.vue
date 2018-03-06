<template>
  <section>
    <header class="header-h1"></header>
    <main>
      <header class="header-h2">
        <section class="mask"></section>
        <imgs src="bg_5.jpg" class="header-h2-bg"></imgs>
        <main class="header-main">
          <h1 class="header-main-h1">联系我们</h1>
          <p class="header-main-p">我们随时准备回答您可能遇到的任何问题</p>
        </main>
      </header>
      <main class="block" style="padding-bottom:150px;">
        <main class="block-main">
          <section class="block-form">
            <h1 class="block-header">消息</h1>
            <section class="form-col">
              <section class="form-area">
                <label for="">名字
                  <span>*</span>
                </label>
                <input type="text">
              </section>
              <section class="form-area">
                <label for="">姓氏
                  <span>*</span>
                </label>
                <input type="text">
              </section>
            </section>
            <section class="form-col">
              <section class="form-area">
                <label for="">电子邮箱
                  <span>*</span>
                  <input type="text">
                </label>
              </section>
            </section>
            <section class="form-col">
              <section class="form-area">
                <label for="">
                  组织
                  <span>*</span>
                  <input type="text">
                </label>
              </section>
            </section>
            <section class="form-col">
              <section class="form-area">
                <label for="">信息</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </section>
            </section>
          </section>
          <aside>
            <h1 class="block-header">如何购买FBC</h1>
            <p class="block-p">对于有兴趣购买FBC的个人，请参阅如何<router-link style="color:#00B6FF" to="buy">购买FBC</router-link></p>
            <h1 class="block-header" style="margin-top:26px">支持</h1>
            <p class="block-p">请通过fairblock@gmail.com与我们联系</p>
          </aside>

        </main>
        <button class="btn btn-i">发送消息</button>
        <aside class="btn-aside">通过提供上述信息，您同意FairBlock使用条款和隐私政策。</aside>
      </main>
      <!-- <section class="hr"></section>
      <main class="block footer-container" style="height:363px;margin-top:0">
        <section>
          <section class="footer-header">
            <imgs src="email.png" style="margin-right:6px"></imgs>
            <h1 class="footer-h1">邮箱</h1>
          </section>
          <p class="footer-p">FairBlock@ripple.com</p>
        </section>

        <section>
          <section class="footer-header">
            <imgs src="telephone-8.png" style="margin-right:6px"></imgs>
            <h1 class="footer-h1">电话</h1>
          </section>
          <p class="footer-p">+46(0) 000 000 0000</p>
        </section>

        <section>
          <section class="footer-header">
            <imgs src="placeholder.png" style="margin-right:6px"></imgs>
            <h1 class="footer-h1">地址</h1>
          </section>
          <p class="footer-p">FairBlock@ripple.com</p>
        </section>
      </main> -->
    </main>
  </section>
</template>

<script>
  export default {
    name: 'us',
    mounted() {
      window.scrollTo(0, 0)
    }
  }

</script>

<style scoped>
  header.header-h1 {
    height: 180px;
    background-color: #003874;
  }

  .mask {
    background-color: #003874;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  header.header-h2 {
    position: relative;
    height: 390px;
    overflow: hidden;
  }

  .header-h2-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    transform: translateY(-300px);
  }


  .header-main {
    margin: 0 auto;
    margin-top: 123px;
    width: 900px;
  }

  .header-main-h1 {
    font-size: 36px;
    line-height: 50px;
    color: #EEEEEE;
    text-align: center;
    margin-bottom: 30px;
  }

  .header-main-p {
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
  }



  @media screen and (min-width:1401px) {
    .block {
      margin: 0 auto;
      margin-top: 60px;
      min-height: 300px;
      width: 1000px;
    }
  }

  @media screen and (max-width: 1400px) {
    .block {
      margin: 0 auto;
      margin-top: 60px;
      min-height: 300px;
      padding:0 12px;
    }
  }

  .block-header {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333333;
  }


  input {
    margin-top: 10px;
    border: 1px solid #CCCCCC;
    height: 35px;
    border-radius: 4px;
    outline: none;
    padding: 0 0.6em;
    font-size: 16px;
    color: rgb(80, 80, 80);
    width: 100%;
  }

  input:not(:last-child) {
    margin-right: 50px;
  }

  textarea {
    margin-top: 10px;
    border: 1px solid #CCCCCC;
    height: 230px;
    border-radius: 4px;
    outline: none;
    padding: 0.6em 0.6em;
    font-size: 16px;
    color: rgb(80, 80, 80);
    width: 100%;
    resize:none;
  }


  .btn-i {
    background-color: #00B6FF;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    padding: 0 3em;
    display: block;
  }

  .btn-aside {
    margin-top: 35px;
    font-size: 16px;
    color: #333333;
  }


  .block-main {
    display: flex;
  }

  .block-form {
    flex: 2 0 auto;
  }

  .block-form label {
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    display: block;
  }

  .block-p {
    font-size: 16px;
    line-height: 22px;
    color: #333333;
  }

  .block-form label span {
    color: red;
  }

  .form-col {
    display: flex;
    margin-bottom: 20px;
  }

  .form-area {
    margin-right: 50px;
    width: 100%;
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #D8D8D8;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-header {
    display: flex;
    align-items: center;
  }

  .footer-h1 {
    display: inline-block;
    font-size: 24px;
    color: #323232;
    margin: 0;
  }

  .footer-p {
    margin-top: 10px;
    color: #666666;
    font-size: 16px;
    line-height: 18px;
  }

</style>
