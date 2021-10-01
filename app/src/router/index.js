import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "News",
    component: () => import('../components/views/News.vue'),
  },
  {
    path: "/currency",
    name: "Currency",
    component: () => import('../components/views/Currency.vue'),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import('../components/views/Todos.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;