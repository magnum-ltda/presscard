import { Component } from '@angular/core';
import { WhatsappButtonComponent } from '../../../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [WhatsappButtonComponent],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {}
