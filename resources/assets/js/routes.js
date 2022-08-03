/**
 * Contains all of the frontend routes for the application (Vue Router)
 */

// Imports Vue and VueRouter to extend with the routes.
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Cafes from './pages/Cafes.vue';
import NewCafe from './pages/NewCafe.vue';
import Cafe from './pages/Cafe.vue';
import Layout from './pages/Layout.vue';

// Extends Vue to use Vue Router
// Vue.use( VueRouter )

const routes= [
    {
        // root route
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '/home',
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
        ]
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
    // {
    //     path: '/cafes',
    //     name: 'cafes',
    //     component: Cafes
    // },
    // {
    //     path: '/cafes/new',
    //     name: 'newcafe',
    //     component: NewCafe
    // },
    // {
    //     // dynamic route
    //     path: '/cafes/:id',
    //     name: 'cafe',
    //     component: Cafe
    // }
];

// Makes a new VueRouter that we will use to run all of the routes for the app.
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export default new VueRouter({})
export default router;