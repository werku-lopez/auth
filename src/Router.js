import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponents.vue";
import AuthComponent from "./components/AuthComponent.vue";
import AlumnoComponent from "./components/AlumnosComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/auth", component: AuthComponent },
    { path: "/alumnos", component: AlumnoComponent },
]

const route = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default route;