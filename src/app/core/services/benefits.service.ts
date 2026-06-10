import { Injectable, signal, inject } from '@angular/core';
import { Benefit } from '../models/benefit.model';
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
export class BenefitsService {
  private firebaseService = inject(FirebaseService);

  private readonly STORAGE_KEY = 'presscard_benefits';
  private benefitsSignal = signal<Benefit[]>([]);
  public readonly benefits = this.benefitsSignal.asReadonly();

  private defaultBenefits: Benefit[] = [
    {
      id: 'benefit-resort',
      title: 'Estadia Exclusiva Resort Paradiso',
      description: 'Tenha diárias com desconto e café da manhã premium incluso. Válido para reservas em qualquer período do ano com check-in antecipado cortesia.',
      category: 'HOTEL',
      associatedCompanyId: 'company-acme', // Somente para ACME Corp
      commercialPartnerId: 'partner-resort-paradiso',
      discountPercentage: 18,
      employeeDiscount: 15,
      platformCommission: 3,
      rules: 'Apresentar o cupom gerado na recepção do hotel ou via e-mail corporativo no momento da reserva.',
      validity: '2027-12-31',
      usageLimit: 3,
      executionType: 'COUPON',
      active: true
    },
    {
      id: 'benefit-grand-hotel',
      title: 'Desconto Executivo SP - Grand Hotel',
      description: 'Hospede-se no coração corporativo de São Paulo. Tarifas preferenciais com até 20% de abatimento para viagens rápidas ou finais de semana.',
      category: 'HOTEL',
      associatedCompanyId: 'ALL', // Para todos
      commercialPartnerId: 'partner-grand-hotel',
      discountPercentage: 20,
      employeeDiscount: 15,
      platformCommission: 5,
      rules: 'Redirecionamento automático. As tarifas reduzidas já estarão ativadas no link do parceiro.',
      validity: '2027-06-30',
      usageLimit: undefined,
      executionType: 'EXTERNAL_REDIRECT',
      active: true
    },
    {
      id: 'benefit-premium-autoclass',
      title: 'Aluguel SUV AutoClass',
      description: 'Desconto exclusivo em toda a frota de SUVs e Sedãs de luxo da AutoClass. Ideal para viagens confortáveis em família ou negócios.',
      category: 'CAR_RENTAL',
      associatedCompanyId: 'ALL', // Para todos
      commercialPartnerId: 'partner-premium-autoclass',
      discountPercentage: 15,
      employeeDiscount: 12,
      platformCommission: 3,
      rules: 'O pagamento deve ser realizado através do link seguro gerado na plataforma para validação do desconto.',
      validity: '2026-12-31',
      usageLimit: undefined,
      executionType: 'PAYMENT_LINK',
      active: true
    },
    {
      id: 'benefit-smartfit',
      title: 'Smart Fit Plano Black Especial',
      description: 'Isenção de taxa de adesão e 20% de desconto nas mensalidades do plano Black Smart Fit para manter a saúde corporativa em dia.',
      category: 'GYM',
      associatedCompanyId: 'company-acme', // ACME
      commercialPartnerId: 'partner-smartfit',
      discountPercentage: 20,
      employeeDiscount: 15,
      platformCommission: 5,
      rules: 'Resgate o cupom e utilize o código promocional no site ou totem de cadastro do estabelecimento.',
      validity: '2027-12-31',
      usageLimit: 1,
      executionType: 'COUPON',
      active: true
    }
  ];

  constructor() {
    this.initData();
  }

  private initData() {
    if (this.firebaseService.isEnabled) {
      const colRef = collection(this.firebaseService.db, 'benefits');
      onSnapshot(colRef, async (snapshot) => {
        let list: Benefit[] = [];
        snapshot.forEach((doc) => {
          list.push(doc.data() as Benefit);
        });

        if (list.length === 0) {
          for (const b of this.defaultBenefits) {
            await setDoc(doc(this.firebaseService.db, 'benefits', b.id), b);
          }
        } else {
          this.benefitsSignal.set(list);
        }
      });
    } else {
      const localData = localStorage.getItem(this.STORAGE_KEY);
      if (localData) {
        this.benefitsSignal.set(JSON.parse(localData));
      } else {
        this.benefitsSignal.set(this.defaultBenefits);
        this.saveToLocal(this.defaultBenefits);
      }
    }
  }

  public async createBenefit(benefit: Omit<Benefit, 'id'>): Promise<void> {
    const newBenefit: Benefit = {
      ...benefit,
      id: 'benefit-' + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };

    if (this.firebaseService.isEnabled) {
      await setDoc(doc(this.firebaseService.db, 'benefits', newBenefit.id), newBenefit);
    } else {
      const current = [...this.benefitsSignal(), newBenefit];
      this.benefitsSignal.set(current);
      this.saveToLocal(current);
    }
  }

  public async updateBenefit(id: string, updates: Partial<Benefit>): Promise<void> {
    const current = this.benefitsSignal();
    const index = current.findIndex(b => b.id === id);
    if (index !== -1) {
      const updated = { ...current[index], ...updates };
      if (this.firebaseService.isEnabled) {
        await setDoc(doc(this.firebaseService.db, 'benefits', id), updated);
      } else {
        const list = [...current];
        list[index] = updated;
        this.benefitsSignal.set(list);
        this.saveToLocal(list);
      }
    }
  }

  public async deleteBenefit(id: string): Promise<void> {
    if (this.firebaseService.isEnabled) {
      await deleteDoc(doc(this.firebaseService.db, 'benefits', id));
    } else {
      const filtered = this.benefitsSignal().filter(b => b.id !== id);
      this.benefitsSignal.set(filtered);
      this.saveToLocal(filtered);
    }
  }

  private saveToLocal(data: Benefit[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
