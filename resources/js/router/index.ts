import { createRouter, createWebHistory } from "vue-router";
import { loginRoutes } from "../domains/users/routes";



export const router = createRouter({
    history: createWebHistory(),
    routes: [...loginRoutes],
});

