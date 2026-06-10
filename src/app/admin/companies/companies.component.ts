import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompaniesService } from '../../core/services/companies.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { AssociatedCompany } from '../../core/models/company.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Empresas Associadas</h1>
        <button class="btn-primary" (click)="openForm()">+ Nova Empresa</button>
      </div>

      <div class="card">
        @if (isLoading()) {
          <app-skeleton-table [columns]="5" [rows]="5"></app-skeleton-table>
        } @else {
          <table class="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Plano</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let company of companies()">
                <td>{{ company.name }}</td>
                <td>{{ company.cnpj }}</td>
                <td><span class="badge">{{ company.plan }}</span></td>
                <td>
                  <span class="status-dot" [class.active]="company.active"></span>
                  {{ company.active ? 'Ativo' : 'Inativo' }}
                </td>
                <td>
                  <button class="btn-icon" title="Editar" (click)="openForm(company)">✏️</button>
                  <button class="btn-icon text-red" title="Excluir" (click)="deleteCompany(company.id)">🗑️</button>
                </td>
              </tr>
              <tr *ngIf="companies().length === 0">
                <td colspan="5" class="empty-state">Nenhuma empresa encontrada.</td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <!-- Form Modal -->
      <div class="modal-overlay" *ngIf="isModalOpen" (click)="closeForm()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>{{ isEditing ? 'Editar Empresa' : 'Nova Empresa' }}</h2>
            <button class="close-btn" (click)="closeForm()">✖</button>
          </div>
          
          <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" class="form-grid">
            <div class="form-group">
              <label>Nome da Empresa</label>
              <input type="text" formControlName="name" placeholder="Ex: ACME Corp" class="form-control" [class.error]="isFieldInvalid('name')">
              <span class="error-msg" *ngIf="isFieldInvalid('name')">Nome é obrigatório</span>
            </div>
            
            <div class="form-group">
              <label>CNPJ</label>
              <input type="text" formControlName="cnpj" placeholder="00.000.000/0000-00" class="form-control" [class.error]="isFieldInvalid('cnpj')">
              <span class="error-msg" *ngIf="isFieldInvalid('cnpj')">CNPJ é obrigatório</span>
            </div>

            <div class="form-group">
              <label>Plano</label>
              <select formControlName="plan" class="form-control">
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="active">
                Empresa Ativa na Plataforma
              </label>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn-secondary" (click)="closeForm()">Cancelar</button>
              <button type="submit" class="btn-primary" [disabled]="companyForm.invalid || isSaving">
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
    .btn-primary { background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #2563eb; }
    .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
    .btn-secondary { background: #f1f5f9; color: #475569; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-secondary:hover { background: #e2e8f0; }
    
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    .data-table th { background: #f8fafc; color: #64748b; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; }
    .badge { background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; }
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
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .form-group label { font-size: 0.875rem; font-weight: 500; color: #475569; }
    .form-control { padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; outline: none; transition: 0.2s; }
    .form-control:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
    .form-control.error { border-color: #ef4444; }
    .error-msg { color: #ef4444; font-size: 0.75rem; }
    
    .checkbox-group { margin-top: 0.5rem; }
    .checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none; }
    
    .modal-footer { margin-top: 1rem; display: flex; justify-content: flex-end; gap: 1rem; }
  `]
})
export class CompaniesComponent {
  private companiesService = inject(CompaniesService);
  private confirmDialog = inject(ConfirmDialogService);
  private fb = inject(FormBuilder);

  companies = this.companiesService.companies;
  isLoading = this.companiesService.isLoading;

  isModalOpen = false;
  isEditing = false;
  isSaving = false;
  currentCompanyId: string | null = null;

  companyForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    cnpj: ['', Validators.required],
    plan: ['Silver', Validators.required],
    active: [true]
  });

  openForm(company?: AssociatedCompany) {
    this.isEditing = !!company;
    if (company) {
      this.currentCompanyId = company.id;
      this.companyForm.patchValue(company);
    } else {
      this.currentCompanyId = null;
      this.companyForm.reset({ plan: 'Silver', active: true });
    }
    this.isModalOpen = true;
  }

  closeForm() {
    this.isModalOpen = false;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.companyForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit() {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.companyForm.value;

    try {
      if (this.isEditing && this.currentCompanyId) {
        await this.companiesService.updateCompany(this.currentCompanyId, formData);
      } else {
        await this.companiesService.createCompany(formData);
      }
      this.closeForm();
    } catch (e) {
      console.error('Erro ao salvar empresa', e);
    } finally {
      this.isSaving = false;
    }
  }

  async deleteCompany(id: string) {
    const confirmed = await this.confirmDialog.confirm({
      title: 'Excluir Empresa',
      message: 'Tem certeza que deseja excluir esta empresa? Esta ação não pode ser desfeita.',
      confirmText: 'Excluir',
      isDestructive: true
    });
    
    if (confirmed) {
      await this.companiesService.deleteCompany(id);
    }
  }
}
