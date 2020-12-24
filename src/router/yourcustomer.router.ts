import { RouteConfig } from "vue-router";
import YourCustomer from "@/views/YourCustomer.vue";

export const yourCustomerRouter: Array<RouteConfig> = [
  {
    path: "/your-customer",
    name: "YourCustomer",
    component: YourCustomer
  }
];
