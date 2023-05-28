import Vue from 'vue';
import Vuex from 'vuex';

import { getAllFilms, getAllGenres } from '@/common/helpers';

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
            const response = getAllFilms('TOP_250_BEST_FILMS', page);
            response
            .then((movies) => {
                context.commit('ADD_MOVIES', movies.films);
                return movies
            })
            .catch((error) => {
                console.error(error);
                return error;
            })
            .finally(() => {
                context.commit("SET_LIST_LOADED_FILMS", true); 
            });
        },
        getGenres(context) {
            context.commit("SET_LIST_LOADED_GENRES", false);
            const response = getAllGenres();
            response
            .then((genres) => {
                context.commit('ADD_GENRES', genres.genres);
                return genres.data;
            })
            .catch((error) => {
                console.error(error);
                return error;
            })
            .finally(() => {
                context.commit("SET_LIST_LOADED_GENRES", true); 
            });
        }

    },
});
export default store;