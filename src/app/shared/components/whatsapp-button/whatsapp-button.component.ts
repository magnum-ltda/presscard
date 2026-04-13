import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  @Input() label: string = 'Fale no WhatsApp';
  @Input() openMessage: string = 'Olá! Gostaria de uma cotação/informação no Presscard.';
  @Input() raised: boolean = true;

  private whatsappService = inject(WhatsappService);

  onClick(): void {
    this.whatsappService.openWhatsApp(this.openMessage);
  }
}
