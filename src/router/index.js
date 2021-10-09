import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "News",
    component: () => import("../components/views/News.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../components/views/Todos.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../components/views/Registration.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
