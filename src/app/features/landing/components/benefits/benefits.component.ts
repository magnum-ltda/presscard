import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  benefits = [
    { icon: 'payments', title: 'Economia Real', description: 'Tenha acesso a preços que as plataformas comuns não te mostram.' },
    { icon: 'laptop_mac', title: 'Facilidade de Acesso', description: 'Uma interface simples e direta para você encontrar o que precisa.' },
    { icon: 'military_tech', title: 'Curadoria de Oportunidades', description: 'Nossa equipe seleciona as melhores ofertas do mercado diariamente.' },
    { icon: 'headset_mic', title: 'Suporte Personalizado', description: 'Atendimento direto sempre que você precisar de ajuda.' }
  ];
}
