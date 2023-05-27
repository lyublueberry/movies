import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { BASE_API, GENRES_API } from '@/common/constants';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        listFilms: [],
        listGenres: [],
        listLoadedFilms: false,
        listLoadedGenres: false,
    },
    getters: {
        listOfFilms: state => state.listFilms,
        listOfGenres: state => state.listGenres,
        isListFilmsLoaded(state) {
            return state.listLoadedFilms
        },
        isListGenresLoaded(state) {
            return state.listLoadedGenres

        }
    },
    mutations: {
        ADD_GENRES(state, genres) {
            state.listGenres = genres;
        },
        ADD_MOVIES(state, movies) {
            state.listFilms = movies;
        },
        SET_LIST_LOADED_FILMS(state, status) {
            state.listLoadedFilms = status;
        },
        SET_LIST_LOADED_GENRES(state, status ) {
            state.listLoadedGenres = status;
        }
    },
    actions: {
        async getMovies(context, page) {
            context.commit("SET_LIST_LOADED_FILMS", false);
            return axios(`${BASE_API}${page}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.VUE_APP_KEY,
                    'Content-Type': 'application/json',
                },
            })
            .then((movies) => {
                context.commit('ADD_MOVIES', movies.data.films);
                return movies
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                context.commit("SET_LIST_LOADED_FILMS", true); 
            });

        },
        async getGenres(context) {
            context.commit("SET_LIST_LOADED_GENRES", false);
            return axios(GENRES_API, {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.VUE_APP_KEY,
                    'Content-Type': 'application/json',
                },
            })
            .then((genres) => {
                context.commit('ADD_GENRES', genres.data.genres);
                return genres.data;
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                context.commit("SET_LIST_LOADED_GENRES", true); 
            });
        }

    },
});
export default store;