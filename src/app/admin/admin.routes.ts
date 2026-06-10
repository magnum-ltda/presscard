import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'empresas',
        loadComponent: () => import('./companies/companies.component').then(m => m.CompaniesComponent)
      },
      {
        path: 'parceiros',
        loadComponent: () => import('./partners/partners.component').then(m => m.PartnersComponent)
      },
      {
        path: 'funcionarios',
        loadComponent: () => import('./employees/employees.component').then(m => m.EmployeesComponent)
      },
      {
        path: 'beneficios',
        loadComponent: () => import('./benefits/benefits-mgmt.component').then(m => m.BenefitsMgmtComponent)
      }
    ]
  }
];
