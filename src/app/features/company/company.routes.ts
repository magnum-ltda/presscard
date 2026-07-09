import { Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    component: CompanyLayoutComponent,
    children: [
      { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
      {
        path: 'funcionarios',
        loadComponent: () => import('./employees/employees-mgmt.component').then(m => m.EmployeesMgmtComponent)
      }
    ]
  }
];
