import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { PartnersService } from '../../core/services/partners.service';
import { SkeletonTableComponent } from '../../shared/components/skeleton-table/skeleton-table.component';
import { CommercialPartner } from '../../core/models/partner.model';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { NgxMaskDirective } from 'ngx-mask';
import { CurrencyPercentageInputComponent } from '../../shared/components/currency-percentage-input/currency-percentage-input.component';

// Custom phone validator that accepts formatted or unformatted numbers (10-11 digits)
function phoneValidator(control: AbstractControl): { [key: string]: any } | null {
  const raw = control.value ?? '';
  const digits = raw.toString().replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11 ? null : { invalidPhone: true };
}

// Custom CEP validator that ignores mask separators (e.g. "11000-000" → 8 digits)
function cepValidator(control: AbstractControl): { [key: string]: any } | null {
  const raw = control.value ?? '';
  const digits = raw.toString().replace(/\D/g, '');
  return digits.length === 8 ? null : { invalidCep: true };
}


@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, SkeletonTableComponent, ReactiveFormsModule, NgxMaskDirective, CurrencyPercentageInputComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
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
  /**
   * Holds error message for CEP lookup failures.
   */
  cepError: string = '';
  currentPartnerId: string | null = null;

  partnerForm: FormGroup = this.fb.group({
    companyName: ['', Validators.required],
    tradeName: ['', Validators.required],
    category: ['HOTEL', Validators.required],
    description: ['', Validators.required],
    contact: ['', [Validators.required, phoneValidator]],
    whatsapp: ['', [Validators.minLength(10), Validators.maxLength(11)]],
    externalLink: ['', Validators.pattern(/^https?:\/\/.+$/)],
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
      zipCode: ['', [Validators.required, cepValidator]],
      latitude: [0],
      longitude: [0],
      googleMapsLink: ['', Validators.pattern(/^https?:\/\/(www\.)?(google\.[a-z.]+\/maps|maps\.app\.goo\.gl|maps\.google\.[a-z.]+).*/)]
    })
  });

  openForm(partner?: CommercialPartner) {
    this.isEditing = !!partner;
    if (partner) {
      this.currentPartnerId = partner.id;
      this.partnerForm.patchValue(partner);
      this.partnerForm.updateValueAndValidity();
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

  formatPhone(value: string): string {
    const digits = (value ?? '').replace(/\D/g, '');
    if (digits.length === 11) {
      return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    if (digits.length === 10) {
      return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return value;
  }

  async searchCep() {
    let cep = this.partnerForm.get('location.zipCode')?.value;
    this.cepError = '';
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
        // Clear any previous CEP errors
        this.partnerForm.get('location.zipCode')?.setErrors(null);
        this.cepError = '';
      } else {
        // CEP not found
        this.partnerForm.get('location.zipCode')?.setErrors({ invalidCep: true });
        this.cepError = 'CEP não encontrado.';
      }
    } catch (e) {
      console.error('Erro ao buscar CEP', e);
      this.partnerForm.get('location.zipCode')?.setErrors({ invalidCep: true });
      this.cepError = 'Erro ao buscar CEP.';
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
