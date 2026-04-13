import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Offer {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  discountBadge?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  constructor() { }

  public getOffers(): Observable<Offer[]> {
    const mockOffers: Offer[] = [
      {
        id: 1,
        title: 'Resort de Praia',
        description: 'Experimente o luxo com nosso parceiro na beira da praia. Tenha até 30% de desconto em diárias exclusivas.',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        discountBadge: 'Até 30% OFF'
      },
      {
        id: 2,
        title: 'Hotel Urbano',
        description: 'Viajando a negócios ou a passeio? Hospede-se com conforto no coração da cidade com tarifas que cabem no seu bolso.',
        imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
        discountBadge: 'Benefício Exclusivo'
      },
      {
        id: 3,
        title: 'Locação de Veículos',
        description: 'Explore novos destinos com liberdade. Aproveite descontos incríveis no aluguel e proteções premium com nossa frota.',
        imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        discountBadge: '15% OFF'
      }
    ];

    return of(mockOffers);
  }
}
