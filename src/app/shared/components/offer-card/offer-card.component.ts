import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { Offer } from '../../../core/services/offers.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatRippleModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() offer!: Offer;

  private whatsappService = inject(WhatsappService);

  onVerOferta(): void {
    const msg = `Olá! Gostaria de aproveitar a oferta "${this.offer.title}".`;
    this.whatsappService.openWhatsApp(msg);
  }
}
