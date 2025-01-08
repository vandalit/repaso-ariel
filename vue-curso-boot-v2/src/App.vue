<template>
  <div id="app" class="bg-light">
    <AppNavbar />

    <header>
      <h1 class="text-center p-4 text-primary">Bienvenido a Cursos AlfaWeb</h1>
    </header>

    <main class="container mt-4">
      <p>Contenido inicial de la aplicación</p>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>


<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>


<style>
/* Opcional: Estilos locales o globales */
</style>