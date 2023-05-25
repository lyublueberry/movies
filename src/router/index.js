import Vue from "vue";
import VueRouter from "vue-router";
import CinemaGenresList from "@/pages/CinemaGenresList.vue";
import MoviesList from "@/pages/MoviesList";

Vue.use(VueRouter);

const route = [
  {
    path: '/',
    name: 'MoviesList',
    component: MoviesList
  },
  {
    path: '/cinema',
    name: 'CinemaHallList',
    component: CinemaGenresList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: route
});

export default router;