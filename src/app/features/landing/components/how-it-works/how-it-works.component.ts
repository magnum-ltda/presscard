import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {
  steps = [
    { number: 1, title: 'Acesso às Oportunidades', text: 'Você entra no portal ou entra em contato conosco informando sua necessidade.' },
    { number: 2, title: 'Escolha Conforme Necessidade', text: 'Analisamos o que você busca e oferecemos as melhores cotações com desconto.' },
    { number: 3, title: 'Utilização Prática', text: 'Você reserva com garantia e aproveita sua viagem ou benefício!' }
  ];
}
