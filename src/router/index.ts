import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/router/config";

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from) => {
    // to.path = '/login'
    return true
})
export default router
