import { Injectable, signal, inject } from '@angular/core';
import { CommercialPartner } from '../models/partner.model';
import { FirebaseService } from './firebase.service';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot 
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private firebaseService = inject(FirebaseService);

  private readonly STORAGE_KEY = 'presscard_partners';
  private partnersSignal = signal<CommercialPartner[]>([]);
  public readonly partners = this.partnersSignal.asReadonly();
  private loadingSignal = signal<boolean>(true);
  public readonly isLoading = this.loadingSignal.asReadonly();

  private defaultPartners: CommercialPartner[] = [
    {
      id: 'partner-resort-paradiso',
      companyName: 'Paradiso Resort S.A.',
      tradeName: 'Resort de Praia Paradiso',
      category: 'HOTEL',
      description: 'Experimente o luxo na beira da praia com piscinas infinitas, spa de classe mundial e gastronomia sofisticada.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      contact: '(21) 98888-7777',
      externalLink: 'https://www.booking.com',
      executionType: 'COUPON',
      commissionType: 'PERCENTAGE',
      commissionValue: 3,
      active: true,
      location: {
        address: 'Av. Atlântica',
        number: '1702',
        district: 'Copacabana',
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brasil',
        zipCode: '22021-001',
        latitude: -22.9068,
        longitude: -43.1729,
        googleMapsLink: 'https://maps.google.com'
      }
    },
    {
      id: 'partner-grand-hotel',
      companyName: 'Hospedagens Urbanas Ltda',
      tradeName: 'Grand Hotel Urbano SP',
      category: 'HOTEL',
      description: 'Conforto no coração financeiro de São Paulo. Perfeito para viagens corporativas e lazer de curta duração.',
      imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      contact: '(11) 97777-6666',
      externalLink: 'https://www.hotels.com',
      executionType: 'EXTERNAL_REDIRECT',
      commissionType: 'PERCENTAGE',
      commissionValue: 5,
      active: true,
      location: {
        address: 'Av. Paulista',
        number: '900',
        district: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        zipCode: '01310-100',
        latitude: -23.5505,
        longitude: -46.6333,
        googleMapsLink: 'https://maps.google.com'
      }
    },
    {
      id: 'partner-premium-autoclass',
      companyName: 'Locações Premium de Veículos Ltda',
      tradeName: 'Locadora Premium AutoClass',
      category: 'CAR_RENTAL',
      description: 'Veículos modernos, SUVs, esportivos e sedãs de luxo com assistência 24h e seguro total incluso para membros.',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      contact: '(11) 96666-5555',
      externalLink: 'https://www.localiza.com',
      executionType: 'PAYMENT_LINK',
      commissionType: 'PERCENTAGE',
      commissionValue: 4,
      active: true,
      location: {
        address: 'Rua da Consolação',
        number: '247',
        district: 'Consolação',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        zipCode: '01301-000',
        latitude: -23.5621,
        longitude: -46.6558,
        googleMapsLink: 'https://maps.google.com'
      }
    },
    {
      id: 'partner-smartfit',
      companyName: 'Smart Fit Academias S.A.',
      tradeName: 'Smart Fit',
      category: 'GYM',
      description: 'A maior rede de academias da América Latina. Musculação, cardio e aulas coletivas com planos especiais.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      contact: '(11) 95555-4444',
      externalLink: 'https://www.smartfit.com.br',
      executionType: 'COUPON',
      commissionType: 'PERCENTAGE',
      commissionValue: 5,
      active: true,
      location: {
        address: 'Alameda Lorena',
        number: '800',
        district: 'Jardins',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        zipCode: '01424-001',
        latitude: -23.5658,
        longitude: -46.6625,
        googleMapsLink: 'https://maps.google.com'
      }
    }
  ];

  constructor() {
    this.initData();
  }

  private initData() {
    if (this.firebaseService.isEnabled) {
      const colRef = collection(this.firebaseService.db, 'partners');
      onSnapshot(colRef, async (snapshot) => {
        let list: CommercialPartner[] = [];
        snapshot.forEach((doc) => {
          list.push(doc.data() as CommercialPartner);
        });

        if (list.length === 0) {
          for (const p of this.defaultPartners) {
            await setDoc(doc(this.firebaseService.db, 'partners', p.id), p);
          }
        } else {
          this.partnersSignal.set(list);
        }
        this.loadingSignal.set(false);
      });
    } else {
      const localData = localStorage.getItem(this.STORAGE_KEY);
      if (localData) {
        this.partnersSignal.set(JSON.parse(localData));
      } else {
        this.partnersSignal.set(this.defaultPartners);
        this.saveToLocal(this.defaultPartners);
      }
      this.loadingSignal.set(false);
    }
  }

  public async createPartner(partner: Omit<CommercialPartner, 'id'>): Promise<void> {
    const newPartner: CommercialPartner = {
      ...partner,
      id: 'partner-' + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };

    if (this.firebaseService.isEnabled) {
      await setDoc(doc(this.firebaseService.db, 'partners', newPartner.id), newPartner);
    } else {
      const current = [...this.partnersSignal(), newPartner];
      this.partnersSignal.set(current);
      this.saveToLocal(current);
    }
  }

  public async updatePartner(id: string, updates: Partial<CommercialPartner>): Promise<void> {
    const current = this.partnersSignal();
    const index = current.findIndex(p => p.id === id);
    if (index !== -1) {
      const updated = { ...current[index], ...updates };
      if (this.firebaseService.isEnabled) {
        await setDoc(doc(this.firebaseService.db, 'partners', id), updated);
      } else {
        const list = [...current];
        list[index] = updated;
        this.partnersSignal.set(list);
        this.saveToLocal(list);
      }
    }
  }

  public async deletePartner(id: string): Promise<void> {
    if (this.firebaseService.isEnabled) {
      await deleteDoc(doc(this.firebaseService.db, 'partners', id));
    } else {
      const filtered = this.partnersSignal().filter(p => p.id !== id);
      this.partnersSignal.set(filtered);
      this.saveToLocal(filtered);
    }
  }

  private saveToLocal(data: CommercialPartner[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
