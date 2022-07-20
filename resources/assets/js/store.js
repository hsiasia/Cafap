/**
 *-------------------------------------------------------------------------------
 * store.js
 *-------------------------------------------------------------------------------
 * starting point of our Vuex which consists of a parent module and multiple child modules, this file contains the parent module, and we will import all child modules into this file  
 */
// store the data from API to use in SPA, and Vuex is useful here (status management and save)
// so data can be used in many components and pages
// Vuex is a new data store method

/**
 * Adds the promise polyfill for IE 11
 */
// require('es6-promise').polyfill();
import { polyfill } from 'es6-promise';

 /**
 * Import Vue and Vuex
 */
// import Vue from 'vue/dist/vue.esm-bundler';
import Vuex from 'vuex'

/**
 * Initializes Vuex on Vue.
 */
// Vue.use( Vuex )

/**
 * Imports all of the modules used in the application to build the data store.
 */
 import { cafes } from './modules/cafes.js'

/**
 * Export the Vuex (data storer).
 */
 export default new Vuex.Store({
    modules: {
        cafes
    }
});