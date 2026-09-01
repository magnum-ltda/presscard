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
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.scss'
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
