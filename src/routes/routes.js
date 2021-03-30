import Dashboard from "containers/Dashboard";
import Profile from "containers/Profile";
import Register from "containers/Register";
import Login from "containers/Login";
import Notifications from "containers/Notifications";
import { ROUTE_TYPES } from "constants/index";

var routes = [
  {
    type: ROUTE_TYPES.PROTECTED,
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    type: ROUTE_TYPES.PROTECTED,
    path: "/settings",
    name: "Settings",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    type: ROUTE_TYPES.PROTECTED,
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-bullet-list-67 text-red",
    component: Notifications,
    layout: "/admin",
  },
  {
    type: ROUTE_TYPES.PUBLIC,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    type: ROUTE_TYPES.PUBLIC,
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
