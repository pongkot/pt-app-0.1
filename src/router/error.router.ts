import { Route, RouteConfig } from "vue-router";
import router from ".";
import Error from "../views/Error.vue";

export const errorRouter: Array<RouteConfig> = [
  {
    path: "/error",
    name: "ErrorIndex",
    component: () => {
      router.push("/error/404");
    }
  },
  {
    path: "/error/:statusCode",
    name: "ErrorWithCode",
    component: Error,
    props: (route: Route) => ({
      statusCode: route.params.statusCode
    })
  }
];
