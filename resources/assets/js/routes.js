/**
 *-------------------------------------------------------------------------------
 * routes.js
 *-------------------------------------------------------------------------------
 * Contains all of the routes for the application (Vue Router)
 */

 /**
 * Imports Vue and VueRouter to extend with the routes.
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Cafes from './pages/Cafes.vue';
import NewCafe from './pages/NewCafe.vue';
import Cafe from './pages/Cafe.vue';

/**
 * Extends Vue to use Vue Router
 */
// Vue.use( VueRouter )

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 *
 * component: render vue component 
 * 
 */
//  export default new VueRouter({
const routes= [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cafes',
        name: 'cafes',
        component: Cafes
    },
    {
        path: '/cafes/new',
        name: 'newcafe',
        component: NewCafe
    },
    {
        // dynamic route
        path: '/cafes/:id',
        name: 'cafe',
        component: Cafe
    }
];
// });

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;