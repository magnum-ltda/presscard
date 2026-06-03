import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard(['SUPER_ADMIN', 'ADMIN', 'FINANCIAL', 'SUPPORT'])],
    loadChildren: () => import('./admin/admin.routes').then(m => m.adminRoutes)
  },
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./core/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'ofertas/:id',
    loadComponent: () => import('./features/offers/offer-detail/offer-detail.component').then(m => m.OfferDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
