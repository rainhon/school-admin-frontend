import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: "/school-apply",
    name: "school-apply",
    component: () => import("@/views/SchoolApply.vue")
  },
  {
    path: "/",
    name: 'home',
    component: () => import("@/views/Home.vue")
  }
];

const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes,
});

export default router;