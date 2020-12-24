import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { errorRouter } from "@/router/error.router";
import { loginRouter } from "./login.router";
import { Logger } from "@/modules/common/Logger";

const logger: Logger = new Logger("router");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/error/404"
  },
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
  ...errorRouter,
  ...loginRouter
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  const isLoggedIn: boolean =
    sessionStorage.getItem("loggedIn") === "TRUE" ? true : false;
  const currentView: string = to.name ? to.name : "n/a";
  const requiredLoggedInAccessList: Array<string> = ["About"];
  logger.log(`isLoggedIn: ${isLoggedIn}`);
  logger.log(`currentView: ${currentView}`);
  const inRequiredLoggedInAccessList: string = requiredLoggedInAccessList
    .filter((i: string) => i === currentView)
    .toString();
  if (inRequiredLoggedInAccessList && !isLoggedIn) {
    next({ path: "/error/401" });
  } else {
    next();
  }
});

export default router;
