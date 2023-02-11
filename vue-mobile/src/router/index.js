import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue'),
}]

export default routes