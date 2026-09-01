import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BenefitsService } from '../../core/services/benefits.service';
import { CompaniesService } from '../../core/services/companies.service';
import { PartnersService } from '../../core/services/partners.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { Benefit } from '../../core/models/benefit.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { NgxMaskDirective } from 'ngx-mask';
import { CurrencyPercentageInputComponent } from '../../shared/components/currency-percentage-input/currency-percentage-input.component';

@Component({
  selector: 'app-benefits-mgmt',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule, NgxMaskDirective, CurrencyPercentageInputComponent],
  templateUrl: './benefits-mgmt.component.html',
  styleUrl: './benefits-mgmt.component.scss'
})
export class BenefitsMgmtComponent {
  private benefitsService = inject(BenefitsService);
  private companiesService = inject(CompaniesService);
  private partnersService = inject(PartnersService);
  private confirmDialog = inject(ConfirmDialogService);
  private fb = inject(FormBuilder);

  benefits = this.benefitsService.benefits;
  companies = this.companiesService.companies;
  partners = this.partnersService.partners;
  isLoading = this.benefitsService.isLoading;

  isModalOpen = false;
  isEditing = false;
  isSaving = false;
  currentBenefitId: string | null = null;

  benefitForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['HOTEL', Validators.required],
    associatedCompanyId: ['ALL', Validators.required],
    commercialPartnerId: ['', Validators.required],
    discountPercentage: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    employeeDiscount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    platformCommission: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    rules: ['', Validators.required],
    validity: [''],
    usageLimit: [null],
    executionType: ['COUPON', Validators.required],
    couponType: ['AUTOMATIC'],
    fixedCouponCode: [''],
    active: [true]
  });

  getCategoryLabel(category: string): string {
    const cats: Record<string, string> = {
      'HOTEL': 'Hotel', 'RESTAURANT': 'Restaurante', 'CAR_RENTAL': 'Aluguel de Carros',
      'GYM': 'Academia', 'PHARMACY': 'Farmácia', 'CINEMA': 'Cinema',
      'EDUCATION': 'Educação', 'STORE': 'Loja', 'SERVICES': 'Serviços'
    };
    return cats[category] || category;
  }

  getPartnerName(partnerId: string): string {
    const partner = this.partners().find(p => p.id === partnerId);
    return partner ? partner.tradeName : partnerId;
  }

  getCompanyName(companyId: string): string {
    const company = this.companies().find(c => c.id === companyId);
    return company ? company.name : companyId;
  }

  /** Converte de YYYY-MM-DD (ISO/backend) para DD/MM/YYYY (exibição BR) */
  private isoToBr(isoDate: string | undefined | null): string {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  }

  /** Converte de DD/MM/YYYY (exibição BR) para YYYY-MM-DD (ISO/backend) */
  private brToIso(brDate: string | undefined | null): string {
    if (!brDate || brDate.length < 10) return '';
    const [day, month, year] = brDate.split('/');
    return `${year}-${month}-${day}`;
  }

  openForm(benefit?: Benefit) {
    this.isEditing = !!benefit;
    if (benefit) {
      this.currentBenefitId = benefit.id;
      this.benefitForm.patchValue({
        ...benefit,
        validity: this.isoToBr(benefit.validity)
      });
    } else {
      this.currentBenefitId = null;
      this.benefitForm.reset({ 
        category: 'HOTEL', 
        associatedCompanyId: 'ALL', 
        executionType: 'COUPON',
        couponType: 'AUTOMATIC',
        fixedCouponCode: '',
        discountPercentage: 0,
        employeeDiscount: 0,
        platformCommission: 0,
        active: true 
      });
    }
    this.isModalOpen = true;
  }

  closeForm() {
    this.isModalOpen = false;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.benefitForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit() {
    if (this.benefitForm.invalid) {
      this.benefitForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.benefitForm.value };
    
    formData.usageLimit = formData.usageLimit ? Number(formData.usageLimit) : undefined;
    formData.validity = this.brToIso(formData.validity);

    this.isSaving = true;

    try {
      if (this.isEditing && this.currentBenefitId) {
        await this.benefitsService.updateBenefit(this.currentBenefitId, formData);
      } else {
        await this.benefitsService.createBenefit(formData);
      }
      this.closeForm();
    } catch (e) {
      console.error('Erro ao salvar benefício', e);
    } finally {
      this.isSaving = false;
    }
  }

  async deleteBenefit(id: string) {
    const confirmed = await this.confirmDialog.confirm({
      title: 'Excluir Benefício',
      message: 'Tem certeza que deseja excluir esta regra de benefício? Esta ação não afetará compras já realizadas.',
      confirmText: 'Excluir',
      isDestructive: true
    });
    
    if (confirmed) {
      await this.benefitsService.deleteBenefit(id);
    }
  }
}
