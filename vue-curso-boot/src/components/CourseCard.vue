<template>
  <!-- 
    Usamos clases de Bootstrap para acomodar esta card en una grilla:
    col-12 en mobile, col-md-4 en pantallas medianas, y un margin bottom de 4.
  -->
  <div class="col-12 col-md-4 mb-4">
    <div class="card shadow-sm h-100">
      <!-- Imagen del curso -->
      <img
        :src="img"
        class="card-img-top"
        :alt="nombre"
        style="height: 200px; object-fit: cover;"
      />

      <div class="card-body">
        <!-- Título -->
        <h5 class="card-title">{{ nombre }}</h5>

        <!-- Descripción del curso -->
        <p class="card-text mb-2">
          {{ descripcion }}
        </p>

        <!-- Lista de datos relevantes -->
        <ul class="list-unstyled">
          <li>
            <strong>Costo:</strong> {{ costo }}
          </li>
          <li>
            <strong>Duración:</strong> {{ duracion }}
          </li>
          <li>
            <strong>Cupos:</strong> {{ cupos }}
          </li>
          <li>
            <strong>Inscritos:</strong> {{ inscritos }}
          </li>
          <li>
            <strong>Fecha de Registro:</strong> {{ fechaRegistro }}
          </li>
        </ul>

        <!-- Badge para indicar si está completado o en proceso -->
        <div class="mt-2">
          <span v-if="completado" class="badge bg-success">Terminado</span>
          <span v-else class="badge bg-warning text-dark">En proceso</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    // Coinciden con las propiedades de tu JSON
    id: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ''
    },
    nombre: {
      type: String,
      default: ''
    },
    costo: {
      type: Number,
      default: 0
    },
    duracion: {
      type: String,
      default: ''
    },
    cupos: {
      type: Number,
      default: 0
    },
    inscritos: {
      type: Number,
      default: 0
    },
    completado: {
      type: Boolean,
      default: false
    },
    fechaRegistro: {
      type: String,
      default: ''
    },
    descripcion: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Estilos opcionales */
.card {
  border-radius: 8px;
}
</style>
