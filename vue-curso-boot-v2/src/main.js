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

// Crear app Vue
const app = createApp(App)

// Cargar cursos ANTES de montar la aplicación (opcional)
store.dispatch('loadCourses').then(() => {
  app.use(store)
  app.use(router)
  app.mount('#app')
})