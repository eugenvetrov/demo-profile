import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { mainStore, mainStoreKey } from './stores/main'

const app = createApp(App)
app.use(router)
app.use(mainStore, mainStoreKey)
app.component('DefaultLayout', DefaultLayout)

app.config.errorHandler = (err, instance, info) => {
    console.error(err, info, instance)
}

app.config.warnHandler = (msg, instance, trace) => {
    console.error(msg, instance, trace)
}

app.mount('#app')
