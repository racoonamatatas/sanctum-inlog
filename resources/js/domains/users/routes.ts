import type { RouteRecordRaw } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import App from "../../App.vue";


export const loginRoutes: RouteRecordRaw[] = [
    { path: '/login', component: LoginPage, name: 'users.login'},
    { path: '/welcome', component: App, name: 'app.welcome'}
];