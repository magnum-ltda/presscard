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
  templateUrl: './employees-mgmt.component.html',
  styleUrl: './employees-mgmt.component.scss'
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
