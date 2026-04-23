import { Routes } from "@angular/router";
import { Auth } from "./modules/auth/auth";

export const routes: Routes = [
  {
    path: "",
    component: Auth,
    loadChildren: () => import("./modules/auth/auth.routing"),
    title: "Ubuntu | auth",
  },
  {
    path: "home",
    loadComponent: () => import("./modules/desktop/desktop"),
    title: "Ubuntu | home",
  },
  {
    path: "**",
    loadComponent: () => import("./modules/not-found/notFound"),
    title: "Ubuntu | not found",
  },
];
