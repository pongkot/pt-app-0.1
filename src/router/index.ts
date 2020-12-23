import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { errorRouter } from "@/router/error.router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  ...errorRouter
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  const isViewAbout: boolean = to.name === "About";
  const isViewIndex: boolean = to.name === "Home";

  if (isViewAbout) {
    next({ path: "/error/401" });
  } else {
    next();
  }

  if (isViewIndex) {
    next({ path: "/error/404" });
  } else {
    next();
  }
});

export default router;
