<template>
    <section class="card">
        <figure class="figure" :style="figureStyle">
        </figure>
        <section class="face" :style="photoStyle"></section>
        <section class="main">
            <h1>Eva River</h1>
            <h3>Fitness amuse</h3>
            <button class="btn btn-o btn-center btn-area">sign up now</button>
        </section>
    </section>
</template>

<script>
    export default {
        name:'landscape-card',
        data(){
            return {
                figureStyle:{
                    'background-image':'url(/src/res/tempbg.jpg)',
                    'background-size':'auto 100%'
                },
                photoStyle:{
                    'background-image':'url(/src/res/tempbg.jpg)',
                    'background-size':'auto 100%'
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        height:550px;
        width:350px;
        background-color: #fff;
        border-radius:5px;
        overflow: hidden;
        margin:0 15px;
        box-shadow: 0px 1px 3px #bbbbbb83;
    }

    .figure{
        width:100%;
        height:230px;
    }

    .face{
        width:120px;
        height:120px;
        border-radius: 100px;
        margin:0 auto;
        transform: translateY(-60px);
    }

    /* 正文 */
    .main {
        transform:translateY(-20px);
    }

    .main h1 {
        font-size:24px;
        text-align: center;
    }

    .main h3 {
        font-size:16px;
        text-align: center;
        color:#bbbbbb;
    }

    .btn-area {
        margin-top:60px;
    }
</style>