import { Route, RouteConfig } from "vue-router";
import Error from "../views/Error.vue";

export const errorRouter: Array<RouteConfig> = [
  {
    path: "/error/:statusCode",
    name: "Error",
    component: Error,
    props: (route: Route) => ({
      statusCode: route.params.statusCode
    })
  }
];
