import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PartnersService } from '../../core/services/partners.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { CommercialPartner } from '../../core/models/partner.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule, NgxMaskDirective],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Parceiros Comerciais</h1>
        <button class="btn-primary" (click)="openForm()">+ Novo Parceiro</button>
      </div>

      <div class="card">
        @if (isLoading()) {
          <app-skeleton-table [columns]="6" [rows]="5"></app-skeleton-table>
        } @else {
          <table class="data-table">
            <thead>
              <tr>
                <th>Parceiro</th>
                <th>Categoria</th>
                <th>Localização</th>
                <th>Contato</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let partner of partners()">
                <td>
                  <div class="font-medium">{{ partner.tradeName }}</div>
                  <div class="text-sm text-gray">{{ partner.companyName }}</div>
                </td>
                <td><span class="badge">{{ partner.category }}</span></td>
                <td>{{ partner.location.city }} - {{ partner.location.state }}</td>
                <td>{{ partner.contact }}</td>
                <td>
                  <span class="status-dot" [class.active]="partner.active"></span>
                  {{ partner.active ? 'Ativo' : 'Inativo' }}
                </td>
                <td>
                  <button class="btn-icon" title="Editar" (click)="openForm(partner)">✏️</button>
                  <button class="btn-icon text-red" title="Excluir" (click)="deletePartner(partner.id)">🗑️</button>
                </td>
              </tr>
              <tr *ngIf="partners().length === 0">
                <td colspan="6" class="empty-state">Nenhum parceiro encontrado.</td>
              </tr>
            </tbody>
          </table>
        }
      </div>

      <!-- Form Modal -->
      <div class="modal-overlay" *ngIf="isModalOpen" (click)="closeForm()">
        <div class="modal-content large" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>{{ isEditing ? 'Editar Parceiro' : 'Novo Parceiro' }}</h2>
            <button class="close-btn" (click)="closeForm()">✖</button>
          </div>
          
          <form [formGroup]="partnerForm" (ngSubmit)="onSubmit()" class="form-grid">
            
            <div class="form-row">
              <div class="form-group flex-2">
                <label>Razão Social</label>
                <input type="text" formControlName="companyName" class="form-control" [class.error]="isFieldInvalid('companyName')">
              </div>
              <div class="form-group flex-2">
                <label>Nome Fantasia</label>
                <input type="text" formControlName="tradeName" class="form-control" [class.error]="isFieldInvalid('tradeName')">
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
                  <option value="PHARMACY">Farmácia</option>
                  <option value="CINEMA">Cinema</option>
                  <option value="EDUCATION">Educação</option>
                  <option value="STORE">Loja</option>
                  <option value="SERVICES">Serviços</option>
                </select>
              </div>
              <div class="form-group flex-1">
                <label>Telefone</label>
                <input type="text" formControlName="contact" class="form-control" [class.error]="isFieldInvalid('contact')">
              </div>
              <div class="form-group flex-1">
                <label>WhatsApp</label>
                <input type="text" formControlName="whatsapp" mask="(00) 00000-0000" placeholder="(00) 00000-0000" class="form-control" [class.error]="isFieldInvalid('whatsapp')">
              </div>
            </div>

            <div class="form-group">
              <label>Link Externo</label>
              <input type="text" formControlName="externalLink" placeholder="https://www.exemplo.com.br" class="form-control">
            </div>

            <div class="form-row">
              <div class="form-group flex-1">
                <label>Tipo de Execução</label>
                <select formControlName="executionType" class="form-control">
                  <option value="COUPON">Cupom</option>
                  <option value="EXTERNAL_REDIRECT">Redirecionamento Externo</option>
                  <option value="PAYMENT_LINK">Link de Pagamento</option>
                  <option value="API_INTEGRATION">Integração API</option>
                  <option value="MANUAL_VALIDATION">Validação Manual</option>
                </select>
              </div>
              <div class="form-group flex-1">
                <label>Tipo de Comissão</label>
                <select formControlName="commissionType" class="form-control">
                  <option value="PERCENTAGE">Porcentagem (%)</option>
                  <option value="FIXED">Valor Fixo (R$)</option>
                </select>
              </div>
              <div class="form-group flex-1">
                <label>Valor da Comissão</label>
                <input type="number" formControlName="commissionValue" class="form-control" [class.error]="isFieldInvalid('commissionValue')">
              </div>
            </div>

            <div class="form-group">
              <label>Descrição</label>
              <textarea formControlName="description" rows="2" class="form-control" [class.error]="isFieldInvalid('description')"></textarea>
            </div>

            <h3 class="section-title">Localização</h3>
            <div formGroupName="location" class="location-group">
              <div class="form-row">
                <div class="form-group flex-1" style="position: relative;">
                  <label>CEP</label>
                  <div style="display: flex; gap: 0.5rem;">
                    <input type="text" formControlName="zipCode" mask="00000-000" class="form-control" style="flex: 1;" (blur)="searchCep()" [class.error]="isFieldInvalid('location.zipCode')">
                    <button type="button" class="btn-secondary" (click)="searchCep()" style="padding: 0.5rem;" title="Buscar CEP">🔍</button>
                  </div>
                </div>
                <div class="form-group flex-2">
                  <label>Endereço</label>
                  <input type="text" formControlName="address" class="form-control">
                </div>
                <div class="form-group flex-1">
                  <label>Número</label>
                  <input type="text" formControlName="number" class="form-control">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group flex-1">
                  <label>Bairro</label>
                  <input type="text" formControlName="district" class="form-control">
                </div>
                <div class="form-group flex-1">
                  <label>Cidade</label>
                  <input type="text" formControlName="city" class="form-control">
                </div>
                <div class="form-group flex-1">
                  <label>Estado (UF)</label>
                  <input type="text" formControlName="state" class="form-control" maxlength="2">
                </div>
              </div>

              <div class="form-group">
                <label>Link do Google Maps</label>
                <input type="text" formControlName="googleMapsLink" placeholder="https://maps.google.com/..." class="form-control">
              </div>
            </div>

            <div class="form-group checkbox-group" style="margin-top: 1rem;">
              <label class="checkbox-label">
                <input type="checkbox" formControlName="active">
                Parceiro Ativo na Plataforma
              </label>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn-secondary" (click)="closeForm()">Cancelar</button>
              <button type="submit" class="btn-primary" [disabled]="partnerForm.invalid || isSaving">
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
    .btn-primary { background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #059669; }
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
      max-height: 90vh; overflow-y: auto;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
      transform: translateY(0); animation: slideUp 0.3s ease-out;
    }
    .modal-content.large { max-width: 800px; }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; background: white; z-index: 10; }
    .modal-header h2 { margin: 0; font-size: 1.25rem; color: #1e293b; }
    .close-btn { background: none; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer; }
    
    .form-grid { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .form-row { display: flex; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .flex-1 { flex: 1; }
    .flex-2 { flex: 2; }
    
    .form-group label { font-size: 0.875rem; font-weight: 500; color: #475569; }
    .form-control { padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; outline: none; transition: 0.2s; }
    .form-control:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1); }
    .form-control.error { border-color: #ef4444; }
    textarea.form-control { resize: vertical; }
    
    .section-title { margin: 1rem 0 0 0; font-size: 1rem; color: #334155; padding-bottom: 0.5rem; border-bottom: 1px solid #e2e8f0; }
    .location-group { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px; }
    
    .checkbox-group { margin-top: 0.5rem; }
    .checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none; }
    
    .modal-footer { margin-top: 1rem; display: flex; justify-content: flex-end; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
  `]
})
export class PartnersComponent {
  private partnersService = inject(PartnersService);
  private confirmDialog = inject(ConfirmDialogService);
  private fb = inject(FormBuilder);

  partners = this.partnersService.partners;
  isLoading = this.partnersService.isLoading;

  isModalOpen = false;
  isEditing = false;
  isSaving = false;
  currentPartnerId: string | null = null;

  partnerForm: FormGroup = this.fb.group({
    companyName: ['', Validators.required],
    tradeName: ['', Validators.required],
    category: ['HOTEL', Validators.required],
    description: ['', Validators.required],
    contact: ['', Validators.required],
    whatsapp: ['', [Validators.minLength(10), Validators.maxLength(11)]],
    externalLink: [''],
    executionType: ['COUPON', Validators.required],
    commissionType: ['PERCENTAGE', Validators.required],
    commissionValue: [0, Validators.required],
    active: [true],
    imageUrl: [''],
    images: [[]],
    location: this.fb.group({
      address: ['', Validators.required],
      number: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['Brasil'],
      zipCode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      latitude: [0],
      longitude: [0],
      googleMapsLink: ['']
    })
  });

  openForm(partner?: CommercialPartner) {
    this.isEditing = !!partner;
    if (partner) {
      this.currentPartnerId = partner.id;
      this.partnerForm.patchValue(partner);
    } else {
      this.currentPartnerId = null;
      this.partnerForm.reset({
        category: 'HOTEL',
        executionType: 'COUPON',
        commissionType: 'PERCENTAGE',
        commissionValue: 0,
        active: true,
        images: [],
        location: { country: 'Brasil', latitude: 0, longitude: 0 }
      });
    }
    this.isModalOpen = true;
  }

  closeForm() {
    this.isModalOpen = false;
  }

  isFieldInvalid(field: string): boolean {
    const control = this.partnerForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async searchCep() {
    let cep = this.partnerForm.get('location.zipCode')?.value;
    if (!cep) return;
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        this.partnerForm.patchValue({
          location: {
            address: data.logradouro,
            district: data.bairro,
            city: data.localidade,
            state: data.uf
          }
        });
      }
    } catch (e) {
      console.error('Erro ao buscar CEP', e);
    }
  }

  async onSubmit() {
    if (this.partnerForm.invalid) {
      this.partnerForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.partnerForm.value;

    try {
      if (this.isEditing && this.currentPartnerId) {
        await this.partnersService.updatePartner(this.currentPartnerId, formData);
      } else {
        await this.partnersService.createPartner(formData);
      }
      this.closeForm();
    } catch (e) {
      console.error('Erro ao salvar parceiro', e);
    } finally {
      this.isSaving = false;
    }
  }

  async deletePartner(id: string) {
    const confirmed = await this.confirmDialog.confirm({
      title: 'Excluir Parceiro',
      message: 'Tem certeza que deseja excluir este parceiro comercial? Todas as ofertas vinculadas poderão ser afetadas.',
      confirmText: 'Excluir Parceiro',
      isDestructive: true
    });

    if (confirmed) {
      await this.partnersService.deletePartner(id);
    }
  }
}
