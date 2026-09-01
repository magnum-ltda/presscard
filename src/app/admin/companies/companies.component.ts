import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompaniesService } from '../../core/services/companies.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { AssociatedCompany } from '../../core/models/company.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
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
    cnpj: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18)]],
    plan: ['Silver', Validators.required],
    active: [true]
  });

  openForm(company?: AssociatedCompany) {
    this.isEditing = !!company;
    if (company) {
      this.currentCompanyId = company.id;
      const rawCnpj = company.cnpj ? company.cnpj.replace(/\D/g, '') : '';
      this.companyForm.patchValue({
        ...company,
        cnpj: rawCnpj
      });
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
