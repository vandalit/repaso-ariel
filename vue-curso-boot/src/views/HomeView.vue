<template>
    <div class="container mt-4">
      <h1 class="text-center">Lista de Cursos</h1>
  
      <!-- Row con tarjetas de cursos -->
      <div class="row mt-4">
        <!-- Ejemplo: generamos un array de cursos en data() o lo recibimos por props -->
        <CourseCard
          v-for="(curso, index) in courses"
          :key="index"
          :title="curso.title"
          :description="curso.description"
          :image-url="curso.imageUrl"
          :cost="curso.cost"
          :slots="curso.slots"
          :duration="curso.duration"
          :inscribed="curso.inscribed"
        />
      </div>
    </div>
</template>
  
<script>
import CourseCard from '@/components/CourseCard.vue'

export default {
name: 'HomeView', // O 'HomePageView'
components: {
    CourseCard,
},
data() {
    return {
    courses: [
        {
        title: 'JavaScript Avanzado',
        description: 'Curso enfocado en ES6+ con buenas prácticas.',
        imageUrl: 'https://i.blogs.es/545cf8/es6/450_1000.jpg',
        cost: 30000,
        slots: 20,
        inscribed: 10,
        duration: '2 meses'
        },
        {
        title: 'React Básico',
        description: 'Introducción a React Hooks y JSX.',
        imageUrl: 'https://miro.medium.com/max/1200/1*c8n5d39HbBN2IGK-lMh-Pg.png',
        cost: 40000,
        slots: 15,
        inscribed: 8,
        duration: '1.5 meses'
        }
        // ... (Agrega los cursos que necesites)
    ]
    }
}
}
</script>

<style scoped>
h1 {
margin-top: 1rem;
color: #3c096c; /* Ejemplo de un morado oscuro */
}
</style>
