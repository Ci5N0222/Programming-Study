import { createWebHistory, createRouter } from "vue-router";
import BoardList from "./components/BoardList.vue";
import MainHome from "./components/MainHome.vue";
import BoardDetail from "./components/BoardDetail.vue";
import ErrorPage from "./components/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/board",
    component: BoardList,
  },
  {
    path: "/board/:id",
    component: BoardDetail
  },
  {
    path : "/:anything(.*)",
    component: ErrorPage

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 