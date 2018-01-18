import Vue from 'vue';

import imgs from '../components/basic/imgs';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
const comList = [
    imgs,
]

const registerGlobalCom = ()=>{
    comList.forEach((com)=>{
        Vue.component(com.name,com);
    })

    Vue.use(VueAwesomeSwiper)
}

export default registerGlobalCom;