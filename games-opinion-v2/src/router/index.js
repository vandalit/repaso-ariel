import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OpinionesView from '../views/OpinionesView.vue';
import AdministracionView from '../views/AdministracionView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/opiniones/:gameName?',
    name: 'Opiniones',
    component: OpinionesView,
    props: true,
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: AdministracionView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
