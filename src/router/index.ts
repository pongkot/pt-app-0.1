import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import { errorRouter } from "@/router/error.router";
import { loginRouter } from "./login.router";
import { Logger } from "@/modules/common/Logger";
import { logoutRouter } from "@/router/logout.router";
import { configRouter } from "@/router/config.router";
import { yourCustomerRouter } from "@/router/yourcustomer.router";

const logger: Logger = new Logger("router");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/error/404"
  },
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue")
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
  ...loginRouter,
  ...logoutRouter,
  ...yourCustomerRouter
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  const isLoggedIn: boolean = sessionStorage.getItem("loggedIn") === "TRUE"; // TODO refactor to simple
  const currentView: string = to.name ? to.name : "n/a"; // TODO refactor to simple

  logger.log(`isLoggedIn: ${isLoggedIn}`);
  logger.log(`currentView: ${currentView}`);

  const inRequiredLoggedInAccessList: string = configRouter.viewRequiredLoggedIn
    .filter((i: string) => i === currentView)
    .toString();

  if (inRequiredLoggedInAccessList && !isLoggedIn) {
    next({ path: "/error/401" });
  } else {
    next();
  }
});

export default router;
