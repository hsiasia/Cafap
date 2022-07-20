// window._ = require('lodash');
// import '../sass/app.scss';
import _ from 'lodash';
window._ = _;

try {
    window.$ = window.jQuery = require('jquery');

    require('foundation-sites');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

//  window.axios = require('axios');
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// import Vue from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './routes.js'
import store from './store.js'
// vue mount to app element, ready for Vue Router, Vuex (vue2)
// new Vue({
//     router
// }).$mount('#app');

// create and mount root component
const app = createApp({});
// use() let app use router
app.use(router);
app.use(store);
app.mount('#app');