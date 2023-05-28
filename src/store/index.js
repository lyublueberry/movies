import Vue from 'vue';
import Vuex from 'vuex';
import { BASE_API } from '@/common/constants';
import getApiData  from '@/common/helpers';
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
        getMovies(context, page) {
            context.commit("SET_LIST_LOADED_FILMS", false);
            const response = getApiData(BASE_API, '2.2', 'films', 'top?type=TOP_250_BEST_FILMS&page=', page);
            console.log(response);
            response
            .then((movies) => {
                console.log(movies);
                context.commit('ADD_MOVIES', movies.films);
                return movies
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                context.commit("SET_LIST_LOADED_FILMS", true); 
            });
        },
        getGenres(context) {
            context.commit("SET_LIST_LOADED_GENRES", false);
            const response = getApiData(BASE_API, '2.2', 'films', 'filters', '');
            console.log(response);
            response
            .then((genres) => {
                console.log(genres);
                context.commit('ADD_GENRES', genres.genres);
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