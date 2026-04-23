import { Routes } from "@angular/router";

const AUTH_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./presentation/views/entry-page/entry-page"),
  },
  {
    path: "login",
    loadComponent: () => import("./presentation/views/login/login"),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./presentation/views/register/register"),
  },
];

export default AUTH_ROUTES;
