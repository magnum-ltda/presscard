import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../../../core/services/employees.service';
import { AuthService } from '../../../core/auth/auth.service';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employees-mgmt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="header-actions">
      <div>
        <h1 class="page-title">Quadro de Funcionários</h1>
        <p class="page-subtitle">Gerencie os acessos dos seus colaboradores à plataforma de benefícios.</p>
      </div>
      <button class="btn-primary" (click)="openModal()">
        <span>+ Novo Funcionário</span>
      </button>
    </div>

    <!-- Table -->
    <div class="card">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th class="text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="employees().length === 0">
              <td colspan="4" class="text-center empty-state">Nenhum funcionário cadastrado.</td>
            </tr>
            <tr *ngFor="let emp of employees()">
              <td>
                <div class="user-cell">
                  <div class="avatar-sm">{{ emp.name.charAt(0) }}</div>
                  <span class="fw-500">{{ emp.name }}</span>
                </div>
              </td>
              <td>{{ emp.email }}</td>
              <td>
                <span class="badge" [ngClass]="emp.status === 'ACTIVE' ? 'badge-success' : 'badge-danger'">
                  {{ emp.status === 'ACTIVE' ? 'Ativo' : 'Inativo' }}
                </span>
              </td>
              <td class="text-right">
                <div class="actions">
                  <button class="btn-icon" title="Editar" (click)="openModal(emp)">✏️</button>
                  <button class="btn-icon" [title]="emp.status === 'ACTIVE' ? 'Desativar' : 'Ativar'" 
                          (click)="toggleStatus(emp)">
                    {{ emp.status === 'ACTIVE' ? '🚫' : '✅' }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-backdrop" *ngIf="isModalOpen()">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ editingId() ? 'Editar Funcionário' : 'Novo Funcionário' }}</h3>
          <button class="close-btn" (click)="closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Nome Completo</label>
            <input type="text" class="form-control" [(ngModel)]="formData.name" placeholder="Ex: Maria Santos">
          </div>
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" class="form-control" [(ngModel)]="formData.email" placeholder="maria@empresa.com">
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="closeModal()">Cancelar</button>
          <button class="btn-primary" (click)="saveEmployee()" [disabled]="!isFormValid()">
            {{ editingId() ? 'Salvar Alterações' : 'Cadastrar' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header-actions { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
    .page-title { margin: 0 0 0.5rem 0; font-size: 1.5rem; color: #0f172a; font-weight: 600; }
    .page-subtitle { margin: 0; color: #64748b; font-size: 0.95rem; }
    
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
    .table-responsive { width: 100%; overflow-x: auto; }
    .table { width: 100%; border-collapse: collapse; text-align: left; }
    .table th { background: #f8fafc; padding: 1rem 1.5rem; font-weight: 600; color: #475569; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; }
    .table td { padding: 1rem 1.5rem; border-bottom: 1px solid #e2e8f0; vertical-align: middle; color: #334155; }
    .table tr:last-child td { border-bottom: none; }
    
    .user-cell { display: flex; align-items: center; gap: 0.75rem; }
    .avatar-sm { width: 32px; height: 32px; border-radius: 50%; background: #e0e7ff; color: #4338ca; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.9rem; }
    .fw-500 { font-weight: 500; }
    
    .badge { padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; }
    .badge-success { background: #dcfce7; color: #166534; }
    .badge-danger { background: #fee2e2; color: #991b1b; }
    
    .actions { display: flex; gap: 0.5rem; justify-content: flex-end; }
    .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; opacity: 0.7; transition: 0.2s; padding: 0.25rem; }
    .btn-icon:hover { opacity: 1; transform: scale(1.1); }
    .text-right { text-align: right; }
    .text-center { text-align: center; }
    .empty-state { padding: 3rem !important; color: #94a3b8 !important; }
    
    .btn-primary { background: #2563eb; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #1d4ed8; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    
    .btn-secondary { background: white; color: #475569; border: 1px solid #cbd5e1; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-secondary:hover { background: #f8fafc; }
    
    /* Modal Styles */
    .modal-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem; }
    .modal { background: white; border-radius: 12px; width: 100%; max-width: 500px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); animation: modalIn 0.2s ease-out; }
    @keyframes modalIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    
    .modal-header { padding: 1.5rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
    .modal-header h3 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #0f172a; }
    .close-btn { background: none; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer; padding: 0; }
    .close-btn:hover { color: #0f172a; }
    
    .modal-body { padding: 1.5rem; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-weight: 500; margin-bottom: 0.5rem; color: #334155; font-size: 0.9rem; }
    .form-control { width: 100%; padding: 0.75rem 1rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; font-family: inherit; transition: 0.2s; box-sizing: border-box; }
    .form-control:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
    
    .modal-footer { padding: 1.25rem 1.5rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 0.75rem; background: #f8fafc; border-radius: 0 0 12px 12px; }
  `]
})
export class EmployeesMgmtComponent {
  private employeesService = inject(EmployeesService);
  private authService = inject(AuthService);

  isModalOpen = signal(false);
  editingId = signal<string | null>(null);
  
  formData = {
    name: '',
    email: ''
  };

  // Filter employees belonging to the logged COMPANY_ADMIN
  employees = computed(() => {
    const user = this.authService.currentUser();
    if (!user || user.role !== 'COMPANY_ADMIN') return [];
    const all = this.employeesService.employees();
    return all.filter(e => e.companyId === user.companyId && e.role === 'EMPLOYEE');
  });

  openModal(emp?: Employee) {
    if (emp) {
      this.editingId.set(emp.id);
      this.formData = { name: emp.name, email: emp.email };
    } else {
      this.editingId.set(null);
      this.formData = { name: '', email: '' };
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  isFormValid(): boolean {
    return this.formData.name.trim().length > 0 && this.formData.email.trim().length > 0;
  }

  async saveEmployee() {
    if (!this.isFormValid()) return;
    
    const user = this.authService.currentUser();
    if (!user || user.role !== 'COMPANY_ADMIN') return;

    if (this.editingId()) {
      await this.employeesService.updateEmployee(this.editingId()!, {
        name: this.formData.name.trim(),
        email: this.formData.email.trim()
      });
    } else {
      await this.employeesService.createEmployee({
        name: this.formData.name.trim(),
        email: this.formData.email.trim(),
        role: 'EMPLOYEE',
        companyId: user.companyId,
        status: 'ACTIVE'
      });
    }
    this.closeModal();
  }

  async toggleStatus(emp: Employee) {
    const newStatus = emp.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    if (confirm(`Tem certeza que deseja ${newStatus === 'ACTIVE' ? 'ativar' : 'desativar'} o acesso de ${emp.name}?`)) {
      await this.employeesService.updateEmployee(emp.id, { status: newStatus });
    }
  }
}
