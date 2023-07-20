import { createRouter, createWebHistory } from "vue-router";
import Portal from "../views/portal/index.vue"
import SchoolData from "../views/school-data/index.vue"
import Overview from "../views/overview/index.vue"

const routes = [
    {
        path: '/',
        name: 'Portal',
        component: Portal
    },

    {
        path: '/school-data',
        name: 'SchoolData',
        component: SchoolData
    },

    {
        path: '/overview',
        name: 'Overview',
        component: Overview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router