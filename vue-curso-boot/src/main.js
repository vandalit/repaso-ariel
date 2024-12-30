import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Importar opcionalmente Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Importar Bootstrap Icons (opcional)
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).mount('#app')
