<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <form @submit.prevent="saveCourse">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            {{ course ? 'EDITAR CURSO' : 'AGREGAR CURSO' }}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
  
                    <div class="modal-body">
                        <!-- Nombre -->
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="formData.title" required />
                        </div>
                        <!-- Cupos -->
                        <div class="mb-3">
                            <label class="form-label">Cupos</label>
                            <input type="number" class="form-control" v-model.number="formData.slots" min="1" />
                        </div>
                        <!-- Inscritos -->
                        <div class="mb-3">
                            <label class="form-label">Inscritos</label>
                            <input type="number" class="form-control" v-model.number="formData.inscribed" min="0" />
                        </div>
                        <!-- Costo, Fecha, etc. -->
                        <!-- ... Siguientes campos según mockup -->
                    </div>
  
                    <div class="modal-footer">
                        <button class="btn btn-success" type="submit">
                            {{ course ? 'GUARDAR CAMBIOS' : 'AGREGAR' }}
                        </button>
                        <button class="btn btn-warning" type="button" @click="resetForm">
                            LIMPIAR FORMULARIO
                        </button>
                        <button class="btn btn-danger" type="button" data-bs-dismiss="modal">
                            CANCELAR
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddCourseForm',
    props: {
        id: {
            type: String,
            default: 'modalCourseForm'
        },
        course: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            formData: {
                title: '',
                slots: 0,
                inscribed: 0,
                // etc.
            }
        }
    },
    watch: {
        course: {
            immediate: true,
            handler(newVal) {
                // Si "course" tiene datos, los cargamos, sino limpiamos
                if (newVal) {
                    this.formData = { ...newVal }
                } else {
                    this.resetForm()
                }
            }
        }
    },
    methods: {
        saveCourse() {
            // Emitimos evento "save" con los datos
            this.$emit('save', this.formData)
  
            // Cerrar el modal (forma simple usando el Data API)
            const modal = document.getElementById(this.id)
            const modalInstance = window.bootstrap.Modal.getInstance(modal)
            modalInstance.hide()
        },
        resetForm() {
            this.formData = {
                title: '',
                slots: 0,
                inscribed: 0
                // etc.
            }
        }
    }
  }
  </script>
  
  <style scoped>
  .modal-title {
    font-weight: 600;
  }
  </style>