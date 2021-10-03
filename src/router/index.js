import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import DrawGame from '../components/DrawGame.vue'
import GiftList from '../components/get_giftList.vue'
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/DrawGame',
    component: DrawGame
}, {
    path: '/GiftList',
    component: GiftList
}, {
    path: '/:pathMath(.*)*',
    redirect: '/'
}, ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router