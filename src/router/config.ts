export const routes = [
    // 路由重定向
{
    path: '/',
    redirect: '/home',
},
{
    path: '/home',
    // component: Home
    component: () => import("@/App.vue")
},
]