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
app.mount('#app')
