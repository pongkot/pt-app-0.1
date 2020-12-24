import { Route, RouteConfig } from "vue-router";
import Login from "@/views/Login.vue";

export const loginRouter: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: (route: Route) => ({ token: route.query.token })
  }
];
