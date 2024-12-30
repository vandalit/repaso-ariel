<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <!-- Botón hamburguesa (icono) -->
      <button class="btn text-white me-3">
        <i class="bi bi-list" style="font-size: 1.5rem;"></i>
      </button>

      <!-- Título o logo -->
      <a class="navbar-brand" href="#">
        Cursos AlfaWeb
      </a>

      <!-- Iconos a la derecha -->
      <div class="ms-auto d-flex align-items-center">
        <a href="#" class="text-white me-3">
          <i class="bi bi-house-door-fill" style="font-size:1.5rem;"></i>
        </a>
        <a href="#" class="text-white">
          <i class="bi bi-gear-fill" style="font-size:1.5rem;"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
/* Estilos propios si los necesitas */
</style>
