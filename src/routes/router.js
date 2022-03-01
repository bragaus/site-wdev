import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import VideosPage from '@/pages/VideosPage';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/videos',
        component: VideosPage
    }    
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;