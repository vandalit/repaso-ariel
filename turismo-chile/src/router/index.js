import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetalleView from '../views/DetalleView.vue';
import ContactoView from '../views/ContactoView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: DetalleView,
    props: true
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactoView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
