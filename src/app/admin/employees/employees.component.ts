import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../core/services/employees.service';
import { CompaniesService } from '../../core/services/companies.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { Employee } from '../../core/models/employee.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Funcionários</h1>
        <button class="btn-primary" (click)="openForm()">+ Novo Funcionário</button>
      </div>

      <div class="card">
        @if (isLoading()) {
          <app-skeleton-table [columns]="5" [rows]="5"></app-skeleton-table>
        } @else {
          <table class="data-table">
            <thead>
              <tr>
                <th>Nome / E-mail</th>
                <th>Vínculo (Empresa)</th>
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
                <td>
                  <span class="badge gray" *ngIf="employee.companyId">{{ getCompanyName(employee.companyId) }}</span>
                  <span class="text-sm text-gray" *ngIf="!employee.companyId">Sistema Interno</span>
                </td>
                <td><span class="badge" [ngClass]="employee.role.toLowerCase()">{{ getRoleLabel(employee.role) }}</span></td>
                <td>
                  <span class="status-dot" [class.active]="employee.status === 'ACTIVE'"></span>
                  {{ employee.status === 'ACTIVE' ? 'Ativo' : 'Inativo' }}
                </td>
                <td>
                  <button class="btn-icon" title="Editar" (click)="openForm(employee)">✏️</button>
                  <button class="btn-icon text-red" title="Excluir" (click)="deleteEmployee(employee.id)">🗑️</button>
                </td>
              </tr>
              <tr *ngIf="employees().length === 0">
                <td colspan="5" class="empty-state">Nenhum funcionário encontrado.</td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <!-- Form Modal -->
      <div class="modal-overlay" *ngIf="isModalOpen" (click)="closeForm()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>{{ isEditing ? 'Editar Funcionário' : 'Novo Funcionário' }}</h2>
            <button class="close-btn" (click)="closeForm()">✖</button>
          </div>
          
          <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()" class="form-grid">
            
            <div class="form-group">
              <label>Nome Completo</label>
              <input type="text" formControlName="name" class="form-control" [class.error]="isFieldInvalid('name')">
              <span class="error-msg" *ngIf="isFieldInvalid('name')">Nome é obrigatório</span>
            </div>

            <div class="form-group">
              <label>E-mail</label>
              <input type="email" formControlName="email" class="form-control" [class.error]="isFieldInvalid('email')">
              <span class="error-msg" *ngIf="isFieldInvalid('email')">E-mail válido é obrigatório</span>
            </div>

            <div class="form-row">
              <div class="form-group flex-1">
                <label>Perfil (Role)</label>
                <select formControlName="role" class="form-control">
                  <option value="EMPLOYEE">Funcionário</option>
                  <option value="ADMIN">Administrador</option>
                  <option value="FINANCIAL">Financeiro</option>
                  <option value="SUPPORT">Suporte</option>
                  <option value="PARTNER">Parceiro Comercial</option>
                  <option value="SUPER_ADMIN">Super Admin</option>
                </select>
              </div>

              <div class="form-group flex-1">
                <label>Status</label>
                <select formControlName="status" class="form-control">
                  <option value="ACTIVE">Ativo</option>
                  <option value="INACTIVE">Inativo</option>
                </select>
              </div>
            </div>

            <div class="form-group" *ngIf="employeeForm.get('role')?.value === 'EMPLOYEE' || employeeForm.get('role')?.value === 'ADMIN'">
              <label>Vínculo (Empresa Associada)</label>
              <select formControlName="companyId" class="form-control" [class.error]="isFieldInvalid('companyId')">
                <option value="">Selecione uma empresa...</option>
                <option *ngFor="let c of companies()" [value]="c.id">{{ c.name }}</option>
              </select>
            </div>

            <div class="form-group" *ngIf="employeeForm.get('role')?.value === 'EMPLOYEE'">
              <label>WhatsApp do Funcionário</label>
              <input type="text" formControlName="whatsapp" class="form-control" placeholder="(00) 00000-0000">
            </div>

            <div class="modal-footer">
              <button type="button" class="btn-secondary" (click)="closeForm()">Cancelar</button>
              <button type="submit" class="btn-primary" [disabled]="employeeForm.invalid || isSaving">
                {{ isSaving ? 'Salvando...' : 'Salvar' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-page { display: flex; flex-direction: column; gap: 1.5rem; position: relative; }
    .page-header { display: flex; justify-content: space-between; align-items: center; }
    .page-header h1 { margin: 0; font-size: 1.5rem; color: #1e293b; }
    .btn-primary { background: #6366f1; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #4f46e5; }
    .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
    .btn-secondary { background: #f1f5f9; color: #475569; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-secondary:hover { background: #e2e8f0; }
    
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
    .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 0.25rem; border-radius: 4px; transition: 0.2s; }
    .btn-icon:hover { background: #f1f5f9; }
    .text-red { color: #ef4444; }
    .empty-state { text-align: center; color: #94a3b8; padding: 2rem !important; }

    /* Modal Styles */
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center; z-index: 100;
    }
    .modal-content {
      background: white; border-radius: 16px; width: 100%; max-width: 500px;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      transform: translateY(0); animation: slideUp 0.3s ease-out;
    }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; }
    .modal-header h2 { margin: 0; font-size: 1.25rem; color: #1e293b; }
    .close-btn { background: none; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer; }
    
    .form-grid { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .form-row { display: flex; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .flex-1 { flex: 1; }
    .flex-2 { flex: 2; }
    
    .form-group label { font-size: 0.875rem; font-weight: 500; color: #475569; }
    .form-control { padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; outline: none; transition: 0.2s; }
    .form-control:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1); }
    .form-control.error { border-color: #ef4444; }
    .error-msg { color: #ef4444; font-size: 0.75rem; margin-top: -0.25rem; }
    
    .modal-footer { margin-top: 1rem; display: flex; justify-content: flex-end; gap: 1rem; }
  `]
})
export class EmployeesComponent {
  private employeesService = inject(EmployeesService);
  private companiesService = inject(CompaniesService);
  private confirmDialog = inject(ConfirmDialogService);
  private fb = inject(FormBuilder);

  employees = this.employeesService.employees;
  companies = this.companiesService.companies;
  isLoading = this.employeesService.isLoading;

  isModalOpen = false;
  isEditing = false;
  isSaving = false;
  currentEmployeeId: string | null = null;

  employeeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['EMPLOYEE', Validators.required],
    companyId: [''],
    whatsapp: [''],
    status: ['ACTIVE', Validators.required]
  });

  getRoleLabel(role: string): string {
    const roles: Record<string, string> = {
      'SUPER_ADMIN': 'Super Admin',
      'ADMIN': 'Administrador',
      'FINANCIAL': 'Financeiro',
      'SUPPORT': 'Suporte',
      'EMPLOYEE': 'Funcionário',
      'PARTNER': 'Parceiro'
    };
    return roles[role] || role;
  }

  getCompanyName(companyId: string): string {
    const company = this.companies().find(c => c.id === companyId);
    return company ? company.name : companyId;
  }

  openForm(employee?: Employee) {
    this.isEditing = !!employee;
    if (employee) {
      this.currentEmployeeId = employee.id;
      this.employeeForm.patchValue(employee);
    } else {
      this.currentEmployeeId = null;
      this.employeeForm.reset({ role: 'EMPLOYEE', status: 'ACTIVE', companyId: '', whatsapp: '' });
    }
    this.isModalOpen = true;
  }

  closeForm() {
    this.isModalOpen = false;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.employeeForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const formData = this.employeeForm.value;
    
    // Se não for funcionário ou admin de empresa, limpa a companyId
    if (formData.role !== 'EMPLOYEE' && formData.role !== 'ADMIN') {
      formData.companyId = '';
    }

    // Se não for funcionário, limpa o whatsapp
    if (formData.role !== 'EMPLOYEE') {
      formData.whatsapp = '';
    }

    // Se for funcionário, companyId é obrigatório
    if ((formData.role === 'EMPLOYEE' || formData.role === 'ADMIN') && !formData.companyId) {
      this.employeeForm.get('companyId')?.setErrors({ required: true });
      return;
    }

    this.isSaving = true;

    try {
      if (this.isEditing && this.currentEmployeeId) {
        await this.employeesService.updateEmployee(this.currentEmployeeId, formData);
      } else {
        await this.employeesService.createEmployee(formData);
      }
      this.closeForm();
    } catch (e) {
      console.error('Erro ao salvar funcionário', e);
    } finally {
      this.isSaving = false;
    }
  }

  async deleteEmployee(id: string) {
    const confirmed = await this.confirmDialog.confirm({
      title: 'Desvincular Funcionário',
      message: 'Tem certeza que deseja excluir/desvincular este funcionário da plataforma?',
      confirmText: 'Excluir',
      isDestructive: true
    });
    
    if (confirmed) {
      await this.employeesService.deleteEmployee(id);
    }
  }
}
