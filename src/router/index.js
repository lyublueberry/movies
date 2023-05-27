import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = [
  {
    path: '/',
    name: 'movies.list',
    component: () => import("@/pages/MoviesList.vue")
  },
  {
    path: '/genres',
    name: 'cinema.genres.list',
    component: () => import("@/pages/CinemaGenresList.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: route
});

export default router;