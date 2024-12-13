import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '../store';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
  },
  {
    path: '/rakete',
    name: 'rakete',
    component: () => import('../views/RocketeView.vue'),
  },
  {
    path: '/wettbewerb',
    name: 'wettbewerb',
    component: () => import('../views/CompetitionView.vue'),
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/sponsoring',
    name: 'sponsoring',
    component: () => import('../views/SponsorView.vue'),
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('../views/ImprintView.vue'),
  },
  {
    path: '/datenschutzerklaerung',
    name: 'datenschutzerklaerung',
    component: () => import('../views/PrivacyPolicyView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //if (to.name === 'wettbewerb') {
  //  store.dispatch('showConfirmation', {
  //    confirmCallback: () => {
  //      window.location.href = 'https://www.euroc.pt';
  //      next();
  //    },
  //    cancelCallback: () => {
  //      next(false);
  //    },
  //  });
  //  return;
  //}
  next();
});

export default router;
