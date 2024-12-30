<template>
  <div id="app" class="bg-light">
    <NavBar />

    <header>
      <h1 class="text-center p-4 text-primary">Bienvenido a Cursos AlfaWeb</h1>
    </header>

    <main class="container mt-4">
      <p>Contenido inicial de la aplicación</p>
    </main>
    <Footer />
  </div>
</template>


<script>
import NavBar from './components/AppNavbar.vue'
import Footer from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>


<style>
/* Opcional: Estilos locales o globales */
</style>
