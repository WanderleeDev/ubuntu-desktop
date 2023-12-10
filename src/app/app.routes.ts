import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.component')
  },
  {
    path: '**',
    loadComponent: () => import('./Pages/notFound/notFound.component')
  }
];
