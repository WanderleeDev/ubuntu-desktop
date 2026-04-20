import { Routes } from "@angular/router";
import { AuthComponent } from "./modules/auth/auth.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    loadChildren: () => import("./modules/auth/auth.routing"),
    title: "Ubuntu | auth",
  },
  {
    path: "home",
    loadComponent: () => import("./modules/desktop/desktop.component"),
    title: "Ubuntu | home",
  },
  {
    path: "**",
    loadComponent: () => import("./modules/not-found/notFound.component"),
    title: "Ubuntu | not found",
  },
];
