import {createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Contact from '../Contact.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/about',
        name: 'about',
        component: About
    },{
        path: '/contact',
        name: 'contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;