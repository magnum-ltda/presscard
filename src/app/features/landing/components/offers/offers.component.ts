import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from '../../../../shared/components/offer-card/offer-card.component';
import { BenefitsService } from '../../../../core/services/benefits.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  private benefitsService = inject(BenefitsService);
  private authService = inject(AuthService);
  
  benefits = this.benefitsService.benefits;
  user = this.authService.currentUser;
  
  selectedCategory = signal<string | null>(null);

  categories = [
    { id: 'HOTEL', icon: '🏨', label: 'Hotéis' },
    { id: 'RESTAURANT', icon: '🍽️', label: 'Restaurantes' },
    { id: 'CAR_RENTAL', icon: '🚗', label: 'Carros' },
    { id: 'GYM', icon: '🏋️', label: 'Academias' },
    { id: 'STORE', icon: '🛍️', label: 'Lojas' },
    { id: 'SERVICES', icon: '🛠️', label: 'Serviços' },
  ];

  filteredBenefits = computed(() => {
    let all = this.benefits().filter(b => b.active);
    const u = this.user();

    if (u && (u.role === 'SUPER_ADMIN' || u.role === 'ADMIN')) {
      // Administradores do sistema visualizam todos os benefícios
    } else if (u && (u.role === 'EMPLOYEE' || u.role === 'COMPANY_ADMIN')) {
      // Funcionários e admins de empresa visualizam os públicos + os da sua empresa
      all = all.filter(b => b.associatedCompanyId === 'ALL' || b.associatedCompanyId === u.companyId);
    } else {
      // Parceiros, não autenticados ou qualquer outra role: apenas benefícios públicos
      all = all.filter(b => b.associatedCompanyId === 'ALL');
    }

    const cat = this.selectedCategory();
    if (!cat) return all;
    return all.filter(b => b.category === cat);
  });

  selectCategory(categoryId: string | null) {
    this.selectedCategory.set(categoryId);
  }
}
