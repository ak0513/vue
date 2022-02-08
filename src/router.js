import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from './home.vue'
import About from './about.vue'

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/insurance/home', component: Home},
        {path: '/insurance/about', component: About}
    ]
})

export default router