import type { RouteRecordRaw } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import WelcomePage from "./pages/WelcomePage.vue";



export const loginRoutes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome'},
    { path: '/login', component: LoginPage, name: 'users.login'},
    { path: '/welcome', component: WelcomePage, name: 'users.welcome'}
];