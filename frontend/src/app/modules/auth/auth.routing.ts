import { Routes } from "@angular/router";

const AUTH_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./presentation/views/entry-page/entry-page.component"),
  },
  {
    path: "login",
    loadComponent: () => import("./presentation/views/login/login.component"),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./presentation/views/register/register.component"),
  },
];

export default AUTH_ROUTES;
