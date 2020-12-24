import { RouteConfig } from "vue-router";
import Logout from "@/views/Logout.vue";

export const logoutRouter: Array<RouteConfig> = [
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];
