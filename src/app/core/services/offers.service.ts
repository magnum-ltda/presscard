import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private mockOffers: Offer[] = [
    {
      id: 1,
      title: 'Resort de Praia Paradiso',
      description: 'Experimente o luxo com nosso parceiro na beira da praia. Desfrute de piscinas infinitas, spa de classe mundial e gastronomia sofisticada. Tenha até 30% de desconto em diárias exclusivas para membros Presscard.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      latitude: -22.9068,
      longitude: -43.1729,
      address: 'Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ',
      type: 'hotel',
      externalUrl: 'https://www.booking.com',
      discountBadge: 'Até 30% OFF'
    },
    {
      id: 2,
      title: 'Grand Hotel Urbano SP',
      description: 'Viajando a negócios ou a passeio? Hospede-se com conforto no coração da cidade com tarifas que cabem no seu bolso. Café da manhã incluso e wi-fi de alta velocidade em todos os quartos.',
      imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      latitude: -23.5505,
      longitude: -46.6333,
      address: 'Av. Paulista, 900 - Bela Vista, São Paulo - SP',
      type: 'hotel',
      externalUrl: 'https://www.hotels.com',
      discountBadge: 'Benefício Exclusivo'
    },
    {
      id: 3,
      title: 'Locadora Premium AutoClass',
      description: 'Explore novos destinos com liberdade e conforto. Frota renovada com SUVs, sedãs e compactos. Aproveite descontos incríveis no aluguel e proteções premium com seguro total incluso.',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      latitude: -23.5621,
      longitude: -46.6558,
      address: 'Rua da Consolação, 247 - Consolação, São Paulo - SP',
      type: 'carro',
      externalUrl: 'https://www.localiza.com',
      discountBadge: '15% OFF'
    },
    {
      id: 4,
      title: 'Pousada Charme Serra Verde',
      description: 'Uma experiência única nas montanhas. Café colonial, trilhas guiadas e natureza exuberante. O refúgio perfeito para quem busca descanso e reconexão com a natureza.',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      latitude: -22.4168,
      longitude: -45.4497,
      address: 'Estrada do Mirante, 500 - Campos do Jordão - SP',
      type: 'hotel',
      externalUrl: 'https://www.airbnb.com.br',
      discountBadge: '20% OFF'
    },
    {
      id: 5,
      title: 'FlexCar Aluguel Econômico',
      description: 'Ideal para viagens curtas e longas. Carros econômicos com baixo consumo e manutenção em dia. Retirada e devolução em múltiplos pontos com app exclusivo para membros.',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      latitude: -23.4352,
      longitude: -46.4737,
      address: 'Terminal do Tietê, Gate A - São Paulo - SP',
      type: 'carro',
      externalUrl: 'https://www.unidas.com.br',
      discountBadge: '10% OFF'
    }
  ];

  constructor() {}

  getOffers(): Observable<Offer[]> {
    return of(this.mockOffers);
  }

  getOfferById(id: number): Observable<Offer | undefined> {
    return of(this.mockOffers.find(o => o.id === id));
  }

  searchOffers(query: string): Observable<Offer[]> {
    const q = query.toLowerCase().trim();
    if (!q) return of(this.mockOffers);
    return of(this.mockOffers.filter(o =>
      o.title.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.address.toLowerCase().includes(q) ||
      o.type.toLowerCase().includes(q)
    ));
  }
}
