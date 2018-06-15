import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '~/common/lang/zh'
import en from '~/common/lang/en'

Vue.use(VueI18n)

export default ({ app }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.i18n = new VueI18n({
        locale:'en-US',
        messages:{
            'zh-CN': zh,
            'en-US': en
        }
    })
  
}