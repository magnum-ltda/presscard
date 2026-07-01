import { Routes } from '@angular/router';
import { PartnerLayoutComponent } from './partner-layout/partner-layout.component';
import { ValidatorComponent } from './validator/validator.component';
import { HistoryComponent } from './history/history.component';

export const PARTNER_ROUTES: Routes = [
  {
    path: '',
    component: PartnerLayoutComponent,
    children: [
      { path: '', redirectTo: 'validador', pathMatch: 'full' },
      { path: 'validador', component: ValidatorComponent },
      { path: 'historico', component: HistoryComponent }
    ]
  }
];
