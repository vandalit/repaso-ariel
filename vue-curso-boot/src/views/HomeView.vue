<template>
  <div>
    <h1>Lista de Cursos</h1>
    <button @click="loadCourses">Cargar Cursos</button>
    <ul>
      <li v-for="course in courses" :key="course.id">
        {{ course.title }} - Cupos: {{ course.slots }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    courses() {
      return this.$store.getters.getCourses
    }
  },
  methods: {
    loadCourses() {
      this.$store.dispatch('fetchCourses')
    }
  }
}
</script>
