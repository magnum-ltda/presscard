import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsService } from '../../../core/services/coupons.service';
import { AuthService } from '../../../core/auth/auth.service';
import { Coupon } from '../../../core/models/coupon.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  private couponsService = inject(CouponsService);
  private authService = inject(AuthService);

  coupons = signal<Coupon[]>([]);

  ngOnInit() {
    this.loadHistory();
  }

  async loadHistory() {
    const user = this.authService.currentUser();
    if (user && user.role === 'PARTNER' && user.partnerId) {
      const history = await this.couponsService.getCouponsByPartner(user.partnerId);
      this.coupons.set(history);
    }
  }
}
