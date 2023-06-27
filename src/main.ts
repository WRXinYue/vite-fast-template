// i18n
import { createI18n } from 'vue-i18n'

// vue router
import App from './App.vue'
import router from '~/router/index'

// pinia
import store from '~/store'

import '~/assets/styles/index.scss'

const i18n = createI18n({
  locale: 'en',
})

const app = createApp(App)

app.use(router).use(store)

app.use(i18n)

app.mount('#app')
