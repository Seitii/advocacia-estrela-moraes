import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/NavBar/Navbar.vue'),
    children: [
      { 
        path: '/', component: () => import('pages/Advocacia.vue')
      },
      { 
        path: '/artigos', component: () => import('pages/Artigos.vue')
      },
      { 
        path: '/escritorio', component: () => import('pages/Escritorio.vue')
      },
      { 
        path: '/experiencias', component: () => import('pages/Experiencias.vue')
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
