<template>
    <table class="table table-hover align-middle">
        <thead>
            <tr>
                <th>Curso</th>
                <th>Cupos</th>
                <th>Inscritos</th>
                <th>Duración</th>
                <th>Costo</th>
                <th>Terminado</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(course, index) in courses" :key="index">
                <td>{{ course.title }}</td>
                <td>{{ course.slots }}</td>
                <td>{{ course.inscribed }}</td>
                <td>{{ course.duration }}</td>
                <td><span class="badge bg-success">{{ currencyFormat(course.cost) }}</span></td>
                <td>
                    <span class="badge" :class="course.finished ? 'bg-secondary' : 'bg-warning text-dark'">
                        {{ course.finished ? 'Sí' : 'No' }}
                    </span>
                </td>
                <td>{{ formatDate(course.date) }}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn btn-danger btn-sm">
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
    },
    methods: {
        currencyFormat(value) {
            return '$' + new Intl.NumberFormat('es-CL').format(value)
        },
        formatDate(dateString) {
            // Simple formateo de fecha (puedes usar moment.js o dayjs)
            if (!dateString) return ''
            const date = new Date(dateString)
            return date.toLocaleDateString('es-CL', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        }
    }
}
</script>

<style scoped>
/* Estilos extras si lo deseas */
</style>