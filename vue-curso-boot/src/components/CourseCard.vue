<template>
    <!-- Cada card se encarga de su propia col -->
    <div class="col-12 col-md-4 mb-4">
      <div class="card shadow-sm h-100">
        <img
          :src="imageUrl"
          class="card-img-top"
          :alt="title"
          style="height: 200px; object-fit: cover;"
        />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
          <!-- Información adicional (costo, slots, etc.) -->
          <ul class="list-unstyled">
            <li>
              <span class="badge bg-primary me-2">Costo</span>
              {{ cost }}
            </li>
            <li>
              <span class="badge bg-success me-2">Cupos</span>
              {{ slots }}
            </li>
            <li>
              <span class="badge bg-info me-2">Inscritos</span>
              {{ inscribed }}
            </li>
            <li>
              <span class="badge bg-secondary me-2">Duración</span>
              {{ duration }}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: 'CourseCard',
props: {
    title: String,
    description: String,
    imageUrl: String,
    cost: Number,
    slots: Number,
    inscribed: Number,
    duration: String
}
}
</script>

<style scoped>
.card-title {
font-weight: 600;
}
</style>
