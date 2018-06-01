import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/common/lang/zh'
import en from '@/common/lang/en'

Vue.use(VueI18n)

export default new VueI18n({
    locale:'en-US',
    messages:{
        'zh-CN': zh,
        'en-US': en
    }
})