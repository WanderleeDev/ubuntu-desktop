import { Routes } from "@angular/router";
import { AuthComponent } from "./pages/auth/auth.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    loadChildren: () => import("./pages/auth/auth.routing"),
    title: "Ubuntu | auth",
  },
  {
    path: "home",
    loadComponent: () => import("./pages/home/home.component"),
    title: "Ubuntu | home",
  },
  {
    path: "**",
    loadComponent: () => import("./pages/notFound/notFound.component"),
    title: "Ubuntu | not found",
  },
];
