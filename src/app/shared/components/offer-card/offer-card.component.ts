import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { Offer } from '../../../core/models/offer.model';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatRippleModule, RouterModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() offer!: Offer;

  private whatsappService = inject(WhatsappService);
  private router = inject(Router);

  onVerOferta(): void {
    this.router.navigate(['/ofertas', this.offer.id]);
  }
}
