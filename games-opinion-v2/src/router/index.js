import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/', // Página de inicio
    name: 'Home',
    component: () => import('../views/HomeView.vue'), // Lazy loaded
  },
  {
    path: '/opiniones/:gameName?', // Ruta dinámica para opiniones
    name: 'Opiniones',
    component: () => import('../views/OpinionesView.vue'),
    props: true,
  },
  {
    path: '/administracion', // Página de administración
    name: 'Administracion',
    component: () => import('../views/AdministracionView.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // Ruta para errores 404
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
