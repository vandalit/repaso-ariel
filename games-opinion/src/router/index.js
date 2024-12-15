import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Opiniones from '../views/OpinionesView.vue';
import Administracion from '../views/AdministracionView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/opiniones/:gameName?',
    name: 'Opiniones',
    component: Opiniones,
    props: true, // Para habilitar el paso de parámetros dinámicos
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: Administracion,
  },
  {
    path: '/:pathMatch(.*)*', // Ruta 404
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'), // Lazy loading
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
