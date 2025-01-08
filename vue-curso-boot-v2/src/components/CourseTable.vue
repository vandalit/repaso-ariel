<template>
  <table class="table table-hover align-middle">
    <thead>
      <tr>
        <th>Curso</th>
        <th>Duración</th>
        <th>Costo</th>
        <th>Cupos</th>
        <th>Inscritos</th>
        <th>Registrado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="curso in courses" :key="curso.id">
        <td>{{ curso.nombre }}</td>
        <td>{{ curso.duracion }}</td>
        <td>{{ curso.costo }}</td>
        <td>{{ curso.cupos }}</td>
        <td>{{ curso.inscritos }}</td>
        <td>{{ curso.fecha_registro }}</td>
        <td>
          <!-- Botón editar -->
          <button
            class="btn btn-warning btn-sm me-1"
            @click="$emit('editCourse', curso)"
          >
            <i class="bi bi-pencil-fill"></i>
          </button>
          <!-- Botón eliminar -->
          <button
            class="btn btn-danger btn-sm"
            @click="$emit('deleteCourse', curso.id)"
          >
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CourseTable',
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style scoped>
/* Estilos extras si lo deseas */
</style>