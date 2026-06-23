import { Component, Input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { Benefit } from '../../../core/models/benefit.model';
import { PartnersService } from '../../../core/services/partners.service';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatRippleModule, RouterModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() benefit!: Benefit;

  private partnersService = inject(PartnersService);
  private router = inject(Router);

  partner = computed(() => {
    return this.partnersService.partners().find(p => p.id === this.benefit?.commercialPartnerId);
  });

  onVerOferta(): void {
    if (this.benefit) {
      this.router.navigate(['/ofertas', this.benefit.id]);
    }
  }
}
