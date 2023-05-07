import AuthLayout from "@/layout/AuthLayout.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import {createRouter, createWebHistory} from "vue-router";
import store from "@/store";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import LoginPage from "@/pages/auth/LoginPage.vue";

const routes = [
    {
        path: '/auth',
        component: LoginPage,
        meta: {layout: 'auth', auth: false}
    },
    {
        path: '/register',
        component: RegisterPage,
        meta: { auth: false}
    },
    {
        path: '/',
        component: DefaultLayout,
        meta: {auth: true}
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
    }
);

router.beforeEach((to, from, next) => {
    const isAuth = store.state.isAuth;
    const requiredAuth = to.matched.some(record => record.meta.auth);

    if(requiredAuth && !isAuth){
        return next('/auth')
    }
    next()

})

export default router;