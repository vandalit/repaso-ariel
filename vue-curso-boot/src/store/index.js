import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      courses: [],
      user: null,
      // ... lo que necesites
    }
  },
  mutations: {
    SET_COURSES(state, payload) {
      state.courses = payload
    },
    SET_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    fetchCourses({ commit }) {
      // Aquí llamarías a una API o realizarías lógica asíncrona
      const mockData = [
        { id: 1, title: 'JavaScript Avanzado', slots: 20 },
        { id: 2, title: 'React Básico', slots: 15 }
      ]
      commit('SET_COURSES', mockData)
    },
    loginUser({ commit }, userData) {
      // Simulación de login
      commit('SET_USER', userData)
    }
  },
  getters: {
    getCourses(state) {
      return state.courses
    },
    getUser(state) {
      return state.user
    }
  }
})
