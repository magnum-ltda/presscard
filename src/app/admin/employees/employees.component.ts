import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../core/services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Funcionários</h1>
        <button class="btn-primary">+ Novo Funcionário</button>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nome / E-mail</th>
              <th>Empresa Associada</th>
              <th>Perfil (Role)</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let employee of employees()">
              <td>
                <div class="font-medium">{{ employee.name }}</div>
                <div class="text-sm text-gray">{{ employee.email }}</div>
              </td>
              <td><span class="badge gray">{{ employee.companyId }}</span></td>
              <td><span class="badge" [ngClass]="employee.role.toLowerCase()">{{ employee.role }}</span></td>
              <td>
                <span class="status-dot" [class.active]="employee.status === 'ACTIVE'"></span>
                {{ employee.status === 'ACTIVE' ? 'Ativo' : 'Inativo' }}
              </td>
              <td>
                <button class="btn-icon" title="Editar">✏️</button>
              </td>
            </tr>
            <tr *ngIf="employees().length === 0">
              <td colspan="5" class="empty-state">Nenhum funcionário cadastrado.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .admin-page { display: flex; flex-direction: column; gap: 1.5rem; }
    .page-header { display: flex; justify-content: space-between; align-items: center; }
    .page-header h1 { margin: 0; font-size: 1.5rem; color: #1e293b; }
    .btn-primary { background: #6366f1; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; }
    .btn-primary:hover { background: #4f46e5; }
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    .data-table th { background: #f8fafc; color: #64748b; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; }
    .font-medium { font-weight: 500; color: #1e293b; }
    .text-sm { font-size: 0.875rem; }
    .text-gray { color: #64748b; }
    .badge { padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .badge.gray { background: #f1f5f9; color: #475569; }
    .badge.super_admin, .badge.admin { background: #fee2e2; color: #ef4444; }
    .badge.employee { background: #dbeafe; color: #3b82f6; }
    .badge.partner { background: #d1fae5; color: #10b981; }
    .badge.financial, .badge.support { background: #ede9fe; color: #8b5cf6; }
    .status-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ef4444; margin-right: 0.5rem; }
    .status-dot.active { background: #10b981; }
    .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; }
    .empty-state { text-align: center; color: #94a3b8; padding: 2rem !important; }
  `]
})
export class EmployeesComponent {
  private employeesService = inject(EmployeesService);
  employees = this.employeesService.employees;
}
