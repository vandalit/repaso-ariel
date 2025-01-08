<template>
  <div class="container mt-4">
    <h1 class="text-center">Lista de Cursos</h1>

    <!-- Sección de tarjetas -->
    <div class="row mt-4">
      <!-- Recorremos la lista de cursos del store -->
      <CourseCard
        v-for="curso in courses"
        :key="curso.id"
        :img="curso.img"
        :nombre="curso.nombre"
        :costo="curso.costo"
        :duracion="curso.duracion"
        :cupos="curso.cupos"
        :inscritos="curso.inscritos"
        :completado="curso.completado"
        :fechaRegistro="curso.fecha_registro"
        :descripcion="curso.descripcion"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'HomeView',
  components: {
    CourseCard
  },
  computed: {
    ...mapGetters(['getCourses']),
    courses() {
      // courses vendrá de getCourses, que a su vez proviene del state
      return this.getCourses
    }
  }
}
</script>