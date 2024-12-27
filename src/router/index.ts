import { createRouter, createWebHistory } from 'vue-router'



const routes = [
        {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../components/SignUp.vue')
    },
    {
        path: '/login',
        name: 'LogIn',
        component: () => import('../components/LogIn.vue')
    },
    {
        path: '/',
        redirect: '/signup'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
