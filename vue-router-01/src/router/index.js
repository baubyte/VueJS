import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Productos from '../views/productos/Index.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About //() => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    /**Rutas con Parámetros */
    {
        path: '/users/:id',
        name: 'users',
        component: Users
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    /**Reiteración de Rutas */
    {
        path: '/registrarse',
        redirect: '/signup'
    },
    {
        path: '/productos',
        name: 'productos',
        component: Productos
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router