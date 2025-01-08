// src/store/index.js

import { createStore } from 'vuex'

// Si el JSON está en la carpeta public, la ruta es:
const JSON_URL = '/cursos.json'

export default createStore({
  state: () => ({
    courses: []
  }),

  mutations: {
    SET_COURSES(state, cursos) {
      state.courses = cursos
    },
    ADD_COURSE(state, newCourse) {
      state.courses.push(newCourse)
    },
    EDIT_COURSE(state, editedCourse) {
      const index = state.courses.findIndex(c => c.id === editedCourse.id)
      if (index !== -1) {
        state.courses.splice(index, 1, editedCourse)
      }
    },
    DELETE_COURSE(state, courseId) {
      state.courses = state.courses.filter(c => c.id !== courseId)
    }
  },

  actions: {
    /**
     * Carga los cursos desde localStorage si existen,
     * o desde /cursos.json (carpeta public) si aún no hay nada en localStorage.
     */
    async loadCourses({ commit }) {
      const storedData = localStorage.getItem('cursos-data')

      if (storedData) {
        // Si hay data en localStorage, usarla
        commit('SET_COURSES', JSON.parse(storedData))
      } else {
        // Si no hay data en localStorage, cargarla desde el JSON
        try {
          const response = await fetch(JSON_URL)
          const data = await response.json()

          // data.cursos asume que el objeto JSON tiene la propiedad "cursos"
          commit('SET_COURSES', data.cursos)

          // Guardar en localStorage para persistir
          localStorage.setItem('cursos-data', JSON.stringify(data.cursos))
        } catch (error) {
          console.error('Error cargando el archivo JSON:', error)
        }
      }
    },

    addCourse({ commit, state }, newCourse) {
      // Generar ID nuevo tomando el máximo ID existente
      const maxId = state.courses.length
        ? Math.max(...state.courses.map(c => c.id))
        : 0
      newCourse.id = maxId + 1

      commit('ADD_COURSE', newCourse)
      // Actualizar localStorage
      localStorage.setItem('cursos-data', JSON.stringify(state.courses))
    },

    editCourse({ commit, state }, editedCourse) {
      commit('EDIT_COURSE', editedCourse)
      localStorage.setItem('cursos-data', JSON.stringify(state.courses))
    },

    deleteCourse({ commit, state }, courseId) {
      commit('DELETE_COURSE', courseId)
      localStorage.setItem('cursos-data', JSON.stringify(state.courses))
    }
  },

  getters: {
    getCourses(state) {
      return state.courses
    },
    getCourseById: (state) => (id) => {
      return state.courses.find(c => c.id === id)
    }
  }
})