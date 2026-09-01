import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../core/services/employees.service';
import { CompaniesService } from '../../core/services/companies.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { Employee } from '../../core/models/employee.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { AuthService } from '../../core/auth/auth.service';
import { computed } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  private employeesService = inject(EmployeesService);
  private companiesService = inject(CompaniesService);
  private confirmDialog = inject(ConfirmDialogService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  employees = computed(() => this.employeesService.employees().filter(e => e.role !== 'SUPER_ADMIN'));
  companies = this.companiesService.companies;
  isLoading = this.employeesService.isLoading;
  userRole = this.authService.userRole;

  isModalOpen = false;
  isEditing = false;
  isSaving = false;
  currentEmployeeId: string | null = null;

  employeeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['EMPLOYEE', Validators.required],
    companyId: [''],
    whatsapp: ['', [Validators.minLength(10), Validators.maxLength(11)]],
    status: ['ACTIVE', Validators.required]
  });

  getRoleLabel(role: string): string {
    const roles: Record<string, string> = {
      'SUPER_ADMIN': 'Super Admin',
      'ADMIN': 'Administrador',
      'COMPANY_ADMIN': 'Admin Empresa',
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
    if (formData.role !== 'EMPLOYEE' && formData.role !== 'COMPANY_ADMIN') {
      formData.companyId = '';
    }

    // Se não for funcionário, limpa o whatsapp
    if (formData.role !== 'EMPLOYEE') {
      formData.whatsapp = '';
    }

    // Se for funcionário ou admin da empresa, companyId é obrigatório
    if ((formData.role === 'EMPLOYEE' || formData.role === 'COMPANY_ADMIN') && !formData.companyId) {
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
    } catch (e: any) {
      console.error('Erro ao salvar funcionário', e);
      alert(e.message || 'Ocorreu um erro ao salvar o funcionário.');
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
