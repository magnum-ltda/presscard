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
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Benefícios</h1>
        <button class="btn-primary" (click)="openForm()">+ Novo Benefício</button>
      </div>

      <div class="card">
        @if (isLoading()) {
          <app-skeleton-table [columns]="5" [rows]="5"></app-skeleton-table>
        } @else {
          <table class="data-table">
            <thead>
              <tr>
                <th>Benefício / Categoria</th>
                <th>Parceiro / Empresa</th>
                <th>Tipo de Uso</th>
                <th>Comissão (Plat.)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let benefit of benefits()">
                <td>
                  <div class="font-medium">{{ benefit.title }}</div>
                  <div class="text-sm text-gray">{{ getCategoryLabel(benefit.category) }}</div>
                </td>
                <td>
                  <div class="font-medium">{{ getPartnerName(benefit.commercialPartnerId) }}</div>
                  <div class="text-sm text-gray">{{ benefit.associatedCompanyId === 'ALL' ? 'Para Todos' : getCompanyName(benefit.associatedCompanyId) }}</div>
                </td>
                <td><span class="badge outline">{{ benefit.executionType }}</span></td>
                <td>
                  <div class="font-medium" *ngIf="benefit.platformCommission !== undefined">
                    {{ benefit.platformCommission }}%
                  </div>
                  <div class="text-sm text-gray" *ngIf="benefit.platformCommission === undefined">Padrão do Parceiro</div>
                </td>
                <td>
                  <button class="btn-icon" title="Editar" (click)="openForm(benefit)">✏️</button>
                  <button class="btn-icon text-red" title="Excluir" (click)="deleteBenefit(benefit.id)">🗑️</button>
                </td>
              </tr>
              <tr *ngIf="benefits().length === 0">
                <td colspan="5" class="empty-state">Nenhum benefício cadastrado.</td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <!-- Form Modal -->
      <div class="modal-overlay" *ngIf="isModalOpen" (click)="closeForm()">
        <div class="modal-content large" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>{{ isEditing ? 'Editar Benefício' : 'Novo Benefício' }}</h2>
            <button class="close-btn" (click)="closeForm()">✖</button>
          </div>
          
          <form [formGroup]="benefitForm" (ngSubmit)="onSubmit()" class="form-grid">
            
            <div class="form-group">
              <label>Título da Oferta</label>
              <input type="text" formControlName="title" placeholder="Ex: 20% OFF em Diárias" class="form-control" [class.error]="isFieldInvalid('title')">
            </div>

            <div class="form-row">
              <div class="form-group flex-1">
                <label>Parceiro Comercial</label>
                <select formControlName="commercialPartnerId" class="form-control" [class.error]="isFieldInvalid('commercialPartnerId')">
                  <option value="">Selecione o Parceiro...</option>
                  <option *ngFor="let p of partners()" [value]="p.id">{{ p.tradeName }}</option>
                </select>
              </div>

              <div class="form-group flex-1">
                <label>Empresa Associada (Exclusividade)</label>
                <select formControlName="associatedCompanyId" class="form-control">
                  <option value="ALL">Disponível para todas as empresas</option>
                  <option *ngFor="let c of companies()" [value]="c.id">Somente para: {{ c.name }}</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group flex-1">
                <label>Categoria</label>
                <select formControlName="category" class="form-control">
                  <option value="HOTEL">Hotel</option>
                  <option value="RESTAURANT">Restaurante</option>
                  <option value="CAR_RENTAL">Aluguel de Carros</option>
                  <option value="GYM">Academia</option>
                  <option value="STORE">Loja</option>
                  <option value="SERVICES">Serviços</option>
                </select>
              </div>

              <div class="form-group flex-1">
                <label>Como o benefício será usado?</label>
                <select formControlName="executionType" class="form-control">
                  <option value="COUPON">Cupom de Desconto</option>
                  <option value="EXTERNAL_REDIRECT">Link / Redirecionamento</option>
                  <option value="PAYMENT_LINK">Link de Pagamento Seguro</option>
                </select>
              </div>
            </div>

            <div class="form-row" *ngIf="benefitForm.get('executionType')?.value === 'COUPON'">
              <div class="form-group flex-1">
                <label>Tipo de Cupom</label>
                <select formControlName="couponType" class="form-control">
                  <option value="AUTOMATIC">Gerar Código Automático</option>
                  <option value="FIXED">Código Fixo / Específico</option>
                </select>
              </div>
              <div class="form-group flex-1" *ngIf="benefitForm.get('couponType')?.value === 'FIXED'">
                <label>Código Fixo do Cupom</label>
                <input type="text" formControlName="fixedCouponCode" class="form-control" placeholder="Ex: PROMO50">
              </div>
            </div>

            <h3 class="section-title">Valores e Comissões</h3>
            <div class="location-group">
              <div class="form-row">
                <div class="form-group flex-1">
                  <label>Desconto Total (%)</label>
                  <app-currency-percentage-input formControlName="discountPercentage" mode="PERCENTAGE" [class.error]="isFieldInvalid('discountPercentage')"></app-currency-percentage-input>
                </div>
                <div class="form-group flex-1">
                  <label>Desconto do Usuário (%)</label>
                  <app-currency-percentage-input formControlName="employeeDiscount" mode="PERCENTAGE" [class.error]="isFieldInvalid('employeeDiscount')"></app-currency-percentage-input>
                </div>
                <div class="form-group flex-1">
                  <label>Comissão da Plataforma (%)</label>
                  <app-currency-percentage-input formControlName="platformCommission" mode="PERCENTAGE" [class.error]="isFieldInvalid('platformCommission')"></app-currency-percentage-input>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group flex-1">
                <label>Validade da Oferta</label>
                <input type="text" formControlName="validity" class="form-control" mask="00/00/0000" placeholder="DD/MM/AAAA" [dropSpecialCharacters]="false">
              </div>
              <div class="form-group flex-1">
                <label>Limite de Usos (por funcionário)</label>
                <input type="number" formControlName="usageLimit" class="form-control" placeholder="Deixe em branco para ilimitado">
              </div>
            </div>

            <div class="form-group">
              <label>Descrição do Benefício</label>
              <textarea formControlName="description" rows="2" class="form-control"></textarea>
            </div>

            <div class="form-group">
              <label>Regras de Uso (Termos)</label>
              <textarea formControlName="rules" rows="2" class="form-control"></textarea>
            </div>

            <div class="form-group checkbox-group" style="margin-top: 1rem;">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="active">
                Benefício Ativo e Visível
              </label>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn-secondary" (click)="closeForm()">Cancelar</button>
              <button type="submit" class="btn-primary" [disabled]="benefitForm.invalid || isSaving">
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
    .btn-primary { background: #f59e0b; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #d97706; }
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
    .badge.outline { background: transparent; border: 1px solid #94a3b8; color: #64748b; }
    
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
      max-height: 90vh; overflow-y: auto;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      transform: translateY(0); animation: slideUp 0.3s ease-out;
    }
    .modal-content.large { max-width: 700px; }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; background: white; z-index: 10; }
    .modal-header h2 { margin: 0; font-size: 1.25rem; color: #1e293b; }
    .close-btn { background: none; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer; }
    
    .form-grid { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .form-row { display: flex; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .flex-1 { flex: 1; }
    
    .form-group label { font-size: 0.875rem; font-weight: 500; color: #475569; }
    .form-control { width: 100%; box-sizing: border-box; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; outline: none; transition: 0.2s; }
    .form-control:focus { border-color: #f59e0b; box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1); }
    .form-control.error { border-color: #ef4444; }
    textarea.form-control { resize: vertical; }
    
    .section-title { margin: 1rem 0 0 0; font-size: 1rem; color: #334155; padding-bottom: 0.5rem; border-bottom: 1px solid #e2e8f0; }
    .location-group { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px; }
    
    .checkbox-group { margin-top: 0.5rem; }
    .checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none; }
    
    .modal-footer { margin-top: 1rem; display: flex; justify-content: flex-end; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
  `]
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
