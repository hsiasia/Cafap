/** 
 * The Vuex file, store data for the cafes 
 * Vuex is useful to store the data from API to use in SPA, status management and save
 * data can be used in many components and pages by Vuex
 */

import CafeAPI from '../api/cafe.js';

export const cafes = {
    // in SPA, load status is important
    // add the status for every data we store
    // status = 0 -> not load yet
    // status = 1 -> loading
    // status = 2 -> load success
    // status = 3 -> load failed

    // the vuex formal setting state, action, mutation, getter
    state: {
        cafes: [],
        cafesLoadStatus: 0,
        cafe: {},
        cafeLoadStatus: 0,
        cafeAddStatus: 0, 
    },
    actions: {
        // each function have commit param, via Vuex import, 
        // and allow us commit mutations
        loadCafes({commit}){
            // commit mutation
            commit('setCafesLoadStatus', 1);

            CafeAPI.getCafes()
                .then(function(response){
                    commit('setCafes', response.data);
                    commit('setCafesLoadStatus', 2);
                })
                .catch(function(){
                    commit('setCafes', []);
                    commit('setCafesLoadStatus', 3);
                });
        },
        loadCafe({commit}, data){
            commit('setCafeLoadStatus', 1);

            CafeAPI.getCafe(data.id)
                .then(function(response){
                    commit('setCafe', response.data);
                    commit('setCafeLoadStatus', 2);
                })
                .catch(function(){
                    commit('setCafe', {});
                    commit('setCafeLoadStatus', 3);
                });
        },
        // ???
        addCafe({commit, state, dispatch}, data){
            commit('setCafeAddStatus', 1);
        
            CafeAPI.postAddNewCafe(data.name, data.city, data.area, data.address, data.postal)
                .then(function(response){
                    commit('setCafeAddStatus', 2);
                    dispatch('loadCafes');
                })
                .catch(function(){
                    commit('setCafeAddStatus', 3);
                });
        }
    },
    mutations: {
        setCafesLoadStatus(state, status){
            state.cafesLoadStatus = status;
        },
        setCafes(state, cafes){
            state.cafes = cafes;
        },
        setCafeLoadStatus(state, status){
            state.cafeLoadStatus = status;
        },
        setCafe(state, cafe){
            state.cafe = cafe;
        },
        setCafeAddStatus(state, status) {
            state.cafeAddStatus = status;
        }
    },
    getters: {
        getCafesLoadStatus(state){
          return state.cafesLoadStatus;
        },
        getCafes(state){
          return state.cafes;
        },
        getCafeLoadStatus(state){
          return state.cafeLoadStatus;
        },
        getCafe(state){
          return state.cafe;
        },
        getCafeAddStatus(state) {
            return state.cafeAddStatus;
        }
    }
}