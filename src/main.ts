import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { ru } from '@formkit/i18n'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

import './assets/main.css'
import theme from './assets/theme'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig({
    plugins: [createMultiStepPlugin()],
    config: { classes: generateClasses(theme) },
    locales: { ru },
    locale: 'ru'
}))

app.mount('#app')
