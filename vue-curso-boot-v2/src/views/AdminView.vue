<template>
  <div class="container my-4">
    <h1 class="text-center">Administración de Cursos</h1>

    <!-- Botón para abrir modal de agregar curso -->
    <div class="text-center mt-3 mb-3">
      <button
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalAddCourse"
      >
        AGREGAR CURSO
      </button>
    </div>

    <!-- Tabla con la lista de cursos -->
    <CourseTable
      :courses="courses"
      @deleteCourse="deleteCourse"
      @editCourse="editCourse"
    />

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

    <!-- Modal para agregar curso -->
    <AddCourseForm
      id="modalAddCourse"
      @save="addCourse"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CourseTable from '@/components/CourseTable.vue'
import AddCourseForm from '@/components/AddCourseForm.vue'

export default {
  name: 'AdminView',
  components: {
    CourseTable,
    AddCourseForm
  },
  computed: {
    ...mapGetters(['getCourses']),
    courses() {
      return this.getCourses
    }
  },
  methods: {
    ...mapActions(['addCourse', 'editCourse', 'deleteCourse'])
  }
}
</script>



<style scoped>
.alert-purple {
  background-color: #9C27B0; /* Morado principal */
  color: #fff;
}
</style>