import Vue from "vue";
import VueRouter from "vue-router";
import CinemaHallList from "@/pages/CinemaHallList";
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
    component: CinemaHallList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: route
});

export default router;