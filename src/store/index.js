import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
import { API, KEY } from "../common/constants";


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
            state.listFilms = movies;
        },
    },
    actions: {
        getMovies({ commit }) {
            return axios(API, {
                method: 'GET',
                headers: {
                    'X-API-KEY': KEY,
                    'Content-Type': 'application/json',
                },
            })
                .then((movies) => {
                    commit('ADD_MOVIES', movies.data.films);
                    return movies.data.films;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    },
});