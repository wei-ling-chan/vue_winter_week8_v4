import { createPinia } from 'pinia'
import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'
import './assets/scss/all.scss'

const app = createApp(App)
const pinia = createPinia()
app.use(VCalendar, {})
app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
