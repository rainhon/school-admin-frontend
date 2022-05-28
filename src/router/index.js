import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
  {
    path: "/school-apply",
    name: "school-apply",
    component: () => import("@/views/SchoolApply.vue"),
    meta: {
        withoutAuth: true
    }
  },
  {
    path: "/",
    name: 'home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
        withoutAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.withoutAuth)) {
        next();
    } else {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        }
    }
});

export default router;