import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { BASE_API } from '@/common/constants';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        listFilms: [],
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
        getMovies(context, page) {
            return axios(`${BASE_API}${page}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.VUE_APP_KEY,
                    'Content-Type': 'application/json',
                },
            })
            .then((movies) => {
                context.commit('ADD_MOVIES', movies.data.films);
                return movies;
            })
            .catch((error) => {
                return error;
            });
        }
    },
});