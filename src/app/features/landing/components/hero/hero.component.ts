import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappButtonComponent } from '../../../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, WhatsappButtonComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {}
