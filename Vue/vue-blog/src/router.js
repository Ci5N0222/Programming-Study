import { createWebHistory, createRouter } from "vue-router";
import BoardList from "./components/BoardList.vue";
import MainHome from "./components/MainHome.vue";

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/list",
    component: BoardList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 