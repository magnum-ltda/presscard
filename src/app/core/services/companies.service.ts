import { Injectable, signal, inject } from '@angular/core';
import { AssociatedCompany } from '../models/company.model';
import { FirebaseService } from './firebase.service';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  getDocs,
  query
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private firebaseService = inject(FirebaseService);

  private readonly STORAGE_KEY = 'presscard_companies';
  private companiesSignal = signal<AssociatedCompany[]>([]);
  public readonly companies = this.companiesSignal.asReadonly();

  private defaultCompanies: AssociatedCompany[] = [
    {
      id: 'company-acme',
      name: 'ACME Corp',
      cnpj: '12.345.678/0001-99',
      plan: 'Gold',
      active: true
    },
    {
      id: 'company-globex',
      name: 'Globex Corporation',
      cnpj: '98.765.432/0001-11',
      plan: 'Platinum',
      active: true
    },
    {
      id: 'company-stark',
      name: 'Stark Industries',
      cnpj: '45.678.901/0001-22',
      plan: 'Silver',
      active: true
    }
  ];

  constructor() {
    this.initData();
  }

  private initData() {
    if (this.firebaseService.isEnabled) {
      const colRef = collection(this.firebaseService.db, 'companies');
      onSnapshot(colRef, async (snapshot) => {
        let list: AssociatedCompany[] = [];
        snapshot.forEach((doc) => {
          list.push(doc.data() as AssociatedCompany);
        });

        // Se o banco estiver vazio, semeamos os dados iniciais
        if (list.length === 0) {
          for (const c of this.defaultCompanies) {
            await setDoc(doc(this.firebaseService.db, 'companies', c.id), c);
          }
        } else {
          this.companiesSignal.set(list);
        }
      });
    } else {
      // LocalStorage fallback
      const localData = localStorage.getItem(this.STORAGE_KEY);
      if (localData) {
        this.companiesSignal.set(JSON.parse(localData));
      } else {
        this.companiesSignal.set(this.defaultCompanies);
        this.saveToLocal(this.defaultCompanies);
      }
    }
  }

  public async createCompany(company: Omit<AssociatedCompany, 'id'>): Promise<void> {
    const newCompany: AssociatedCompany = {
      ...company,
      id: 'company-' + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };

    if (this.firebaseService.isEnabled) {
      await setDoc(doc(this.firebaseService.db, 'companies', newCompany.id), newCompany);
    } else {
      const current = [...this.companiesSignal(), newCompany];
      this.companiesSignal.set(current);
      this.saveToLocal(current);
    }
  }

  public async updateCompany(id: string, updates: Partial<AssociatedCompany>): Promise<void> {
    const current = this.companiesSignal();
    const index = current.findIndex(c => c.id === id);
    if (index !== -1) {
      const updated = { ...current[index], ...updates };
      if (this.firebaseService.isEnabled) {
        await setDoc(doc(this.firebaseService.db, 'companies', id), updated);
      } else {
        const list = [...current];
        list[index] = updated;
        this.companiesSignal.set(list);
        this.saveToLocal(list);
      }
    }
  }

  public async deleteCompany(id: string): Promise<void> {
    if (this.firebaseService.isEnabled) {
      await deleteDoc(doc(this.firebaseService.db, 'companies', id));
    } else {
      const filtered = this.companiesSignal().filter(c => c.id !== id);
      this.companiesSignal.set(filtered);
      this.saveToLocal(filtered);
    }
  }

  private saveToLocal(data: AssociatedCompany[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
