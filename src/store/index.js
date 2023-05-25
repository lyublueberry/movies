import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        listFilms: []
    },
    getters: {
        listOfFilms(state) {
            return state.listFilms;
        },
    },
    mutations: {
        ADD_MOVIES(state, movies) {
            state.listFilms = movies.films
        },
    },
    actions: {
        getMovies({ commit }) {
            return axios('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'd14d1636-00af-4209-9f23-d8221bf90580',
                    'Content-Type': 'application/json',
                },
            })
                .then((movies) => {
                    commit('ADD_MOVIES', movies.data);
                    return movies.data;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    },
});