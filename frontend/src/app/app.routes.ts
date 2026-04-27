import { Routes } from "@angular/router";
import { Auth } from "./modules/auth/presentation/auth";
import { AppManagerStore } from "./modules/desktop/infrastructure/app-manager.store";

export const routes: Routes = [
  {
    path: "",
    component: Auth,
    loadChildren: () => import("./modules/auth/auth.routing"),
    title: "Ubuntu | auth",
  },
  {
    path: "home",
    loadComponent: () => import("./modules/desktop/presentation/desktop"),
    providers: [AppManagerStore],
    title: "Ubuntu | home",
  },
  {
    path: "**",
    loadComponent: () => import("./modules/not-found/notFound"),
    title: "Ubuntu | not found",
  },
];
