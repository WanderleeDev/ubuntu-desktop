import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    loadChildren: () => import('./pages/auth/auth.routing')
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notFound/notFound.component')
  }
];
