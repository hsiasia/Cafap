/**
 * starting point of our Vuex 
 * this file contains the parent module, and we will import all child modules into this file
 */

// Adds the promise polyfill for IE 11
// require('es6-promise').polyfill();
import { polyfill } from 'es6-promise';

// Import Vue and Vuex
// import Vue from 'vue/dist/vue.esm-bundler';
import Vuex from 'vuex'

// Initializes Vuex on Vue.
// Vue.use( Vuex )

// Imports all of the modules used in the application to build the data store.
import { cafes } from './modules/cafes.js'

// Export the Vuex (data storer).
export default new Vuex.Store({
    modules: {
        cafes
    }
});