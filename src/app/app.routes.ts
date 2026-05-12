import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
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
