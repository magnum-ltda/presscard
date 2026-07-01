import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CouponsService } from '../../../core/services/coupons.service';
import { AuthService } from '../../../core/auth/auth.service';
import { Coupon } from '../../../core/models/coupon.model';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="validator-container">
      <div class="validator-card">
        <h2>Validar Cupom</h2>
        <p class="subtitle">Digite o código apresentado pelo cliente para validar a oferta.</p>
        
        <div class="input-group">
          <input type="text" [(ngModel)]="couponCode" placeholder="Ex: PRSC-X1Y2Z3" class="code-input" (keyup.enter)="validate()">
          <button class="validate-btn" (click)="validate()" [disabled]="!couponCode || isChecking()">
            {{ isChecking() ? 'Verificando...' : 'Validar' }}
          </button>
        </div>

        <div class="result-message" *ngIf="resultMessage()" [ngClass]="resultType()">
          <div class="icon">{{ resultType() === 'success' ? '✅' : '❌' }}</div>
          <div class="text">
            <strong>{{ resultType() === 'success' ? 'Sucesso!' : 'Atenção!' }}</strong>
            <p>{{ resultMessage() }}</p>
          </div>
        </div>

        <div class="coupon-details" *ngIf="validatedCoupon()">
          <h3>Detalhes do Cupom</h3>
          <p><strong>Cliente:</strong> {{ validatedCoupon()?.employeeName }}</p>
          <p><strong>Benefício:</strong> {{ validatedCoupon()?.benefitTitle }}</p>
          <p><strong>Data de Geração:</strong> {{ validatedCoupon()?.createdAt | date:'dd/MM/yyyy HH:mm' }}</p>
          <p *ngIf="validatedCoupon()?.validatedAt"><strong>Data de Validação:</strong> {{ validatedCoupon()?.validatedAt | date:'dd/MM/yyyy HH:mm' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .validator-container { display: flex; justify-content: center; align-items: flex-start; min-height: 100%; padding-top: 2rem; }
    .validator-card { background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); width: 100%; max-width: 500px; }
    h2 { margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.5rem; }
    .subtitle { color: #64748b; margin-bottom: 2rem; }
    
    .input-group { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .code-input { flex: 1; font-size: 1.25rem; padding: 1rem; border: 2px solid #cbd5e1; border-radius: 8px; text-transform: uppercase; letter-spacing: 2px; text-align: center; outline: none; transition: 0.2s; }
    .code-input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1); }
    .validate-btn { background: #16a34a; color: white; border: none; border-radius: 8px; padding: 0 1.5rem; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
    .validate-btn:hover:not(:disabled) { background: #15803d; }
    .validate-btn:disabled { opacity: 0.7; cursor: not-allowed; }

    .result-message { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
    .result-message .icon { font-size: 1.5rem; }
    .result-message p { margin: 0; }
    .result-message.success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
    .result-message.error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; }

    .coupon-details { background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; }
    .coupon-details h3 { margin: 0 0 1rem 0; color: #334155; font-size: 1.1rem; }
    .coupon-details p { margin: 0.5rem 0; color: #475569; }

    @media (max-width: 640px) {
      .input-group { flex-direction: column; }
      .validate-btn { padding: 1rem; }
    }
  `]
})
export class ValidatorComponent {
  private couponsService = inject(CouponsService);
  private authService = inject(AuthService);

  couponCode = '';
  isChecking = signal(false);
  resultMessage = signal<string | null>(null);
  resultType = signal<'success' | 'error' | null>(null);
  validatedCoupon = signal<Coupon | null>(null);

  async validate() {
    if (!this.couponCode.trim()) return;
    
    const user = this.authService.currentUser();
    if (!user || user.role !== 'PARTNER') return;

    this.isChecking.set(true);
    this.resultMessage.set(null);
    this.validatedCoupon.set(null);

    const code = this.couponCode.trim().toUpperCase();
    const result = await this.couponsService.validateCoupon(code, user.partnerId || '');

    if (result.success) {
      this.resultType.set('success');
      this.resultMessage.set(result.message);
      this.validatedCoupon.set(result.coupon || null);
      this.couponCode = ''; // Clear after success
    } else {
      this.resultType.set('error');
      this.resultMessage.set(result.message);
      if (result.coupon) {
        this.validatedCoupon.set(result.coupon); // Show details even if already used
      }
    }

    this.isChecking.set(false);
  }
}
