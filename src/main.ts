import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from "./layouts/DefaultLayout.vue"

const app = createApp(App)

app.use(router)
app.component('DefaultLayout', DefaultLayout)
console.log(app)

app.mount('#app')
