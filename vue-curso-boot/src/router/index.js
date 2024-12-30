import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
    // Opcional: ruta para 404
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: NotFoundView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
