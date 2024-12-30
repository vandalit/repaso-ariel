<template>
  <div class="container my-4">
    <h1 class="text-center">Administración</h1>

    <!-- Botón para agregar curso (abre modal) -->
    <div class="text-center mt-3 mb-3">
      <button
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCourseForm"
      >
        AGREGAR CURSO
      </button>
    </div>

    <!-- Tabla de cursos -->
    <CourseTable :courses="courses" />

    <!-- Bloques informativos (alertas) -->
    <div class="mt-4">
      <div class="alert alert-purple text-white" role="alert">
        Cantidad total de alumnos permitidos: {{ totalSlots }} alumnos.
      </div>
      <div class="alert alert-info" role="alert">
        Cantidad total de alumnos inscritos: {{ totalInscribed }} alumnos.
      </div>
      <div class="alert alert-danger" role="alert">
        Cantidad total de cupos restantes: {{ totalRemaining }} alumnos.
      </div>
    </div>

    <!-- Modal para agregar/editar curso -->
    <AddCourseForm
      :course="selectedCourse"
      id="modalCourseForm"
      @save="handleSave"
    />
  </div>
</template>

<script>
import CourseTable from '@/components/CourseTable.vue'
import AddCourseForm from '@/components/AddCourseForm.vue'

export default {
  name: 'AdminView', // O 'AdminPanelView'
  components: {
    CourseTable,
    AddCourseForm
  },
  data() {
    return {
      courses: [
        {
          title: 'JavaScript Avanzado',
          slots: 20,
          inscribed: 10,
          duration: '2 meses',
          cost: 30000,
          finished: false,
          date: '2024-02-10'
        },
        // ... más cursos
      ],
      selectedCourse: null // Para cuando queramos editar
    }
  },
  computed: {
    totalSlots() {
      return this.courses.reduce((acc, c) => acc + c.slots, 0)
    },
    totalInscribed() {
      return this.courses.reduce((acc, c) => acc + c.inscribed, 0)
    },
    totalRemaining() {
      return this.totalSlots - this.totalInscribed
    }
  },
  methods: {
    handleSave(newCourse) {
      // Lógica para guardar/agregar un curso
      // p.ejemplo: this.courses.push(newCourse)
      alert('Guardado con éxito!')
    }
  }
}
</script>

<style scoped>
.alert-purple {
  background-color: #9C27B0; /* Morado principal */
  color: #fff;
}
</style>
