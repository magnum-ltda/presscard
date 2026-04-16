import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
  steps = [
    { number: 1, title: 'Acesso às Oportunidades', color: 'navy' },
    { number: 2, title: 'Escolha Conforme Necessidade', color: 'gold' },
    { number: 3, title: 'Utilização Prática', color: 'gold-dark' }
  ];
}
