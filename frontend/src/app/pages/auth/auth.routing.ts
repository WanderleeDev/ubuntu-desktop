import { Routes } from '@angular/router';

const AUTH_ROUTES: Routes = [
  {  
    path: '',
    loadComponent: () => import('./views/entry-page/entry-page.component')
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.component')
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register/register.component')
  }
];

export default AUTH_ROUTES;
