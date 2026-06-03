import { Injectable, signal, inject } from '@angular/core';
import { Employee } from '../models/employee.model';
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
export class EmployeesService {
  private firebaseService = inject(FirebaseService);

  private readonly STORAGE_KEY = 'presscard_employees';
  private employeesSignal = signal<Employee[]>([]);
  public readonly employees = this.employeesSignal.asReadonly();

  private defaultEmployees: Employee[] = [
    {
      id: 'usr-superadmin',
      name: 'Magnum de Oliveira',
      email: 'superadmin@presscard.com',
      role: 'SUPER_ADMIN',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-admin',
      name: 'Clara Silva',
      email: 'admin@presscard.com',
      role: 'ADMIN',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-financial',
      name: 'Bruno Costa',
      email: 'financial@presscard.com',
      role: 'FINANCIAL',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-support',
      name: 'Daniel Santos',
      email: 'support@presscard.com',
      role: 'SUPPORT',
      companyId: 'presscard-corp',
      status: 'ACTIVE'
    },
    {
      id: 'usr-employee-1',
      name: 'João Silva',
      email: 'joao.silva@acme.com',
      role: 'EMPLOYEE',
      companyId: 'company-acme',
      status: 'ACTIVE'
    },
    {
      id: 'usr-partner-1',
      name: 'Gerente Resort Paradiso',
      email: 'gerente@paradiso.com',
      role: 'PARTNER',
      companyId: 'none',
      partnerId: 'partner-resort-paradiso',
      status: 'ACTIVE'
    }
  ];

  constructor() {
    this.initData();
  }

  private initData() {
    if (this.firebaseService.isEnabled) {
      const colRef = collection(this.firebaseService.db, 'employees');
      onSnapshot(colRef, async (snapshot) => {
        let list: Employee[] = [];
        snapshot.forEach((doc) => {
          list.push(doc.data() as Employee);
        });

        if (list.length === 0) {
          for (const emp of this.defaultEmployees) {
            await setDoc(doc(this.firebaseService.db, 'employees', emp.id), emp);
          }
        } else {
          this.employeesSignal.set(list);
        }
      });
    } else {
      const localData = localStorage.getItem(this.STORAGE_KEY);
      if (localData) {
        this.employeesSignal.set(JSON.parse(localData));
      } else {
        this.employeesSignal.set(this.defaultEmployees);
        this.saveToLocal(this.defaultEmployees);
      }
    }
  }

  public async createEmployee(employee: Omit<Employee, 'id'>): Promise<void> {
    const newEmployee: Employee = {
      ...employee,
      id: 'usr-' + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };

    if (this.firebaseService.isEnabled) {
      await setDoc(doc(this.firebaseService.db, 'employees', newEmployee.id), newEmployee);
    } else {
      const current = [...this.employeesSignal(), newEmployee];
      this.employeesSignal.set(current);
      this.saveToLocal(current);
    }
  }

  public async updateEmployee(id: string, updates: Partial<Employee>): Promise<void> {
    const current = this.employeesSignal();
    const index = current.findIndex(e => e.id === id);
    if (index !== -1) {
      const updated = { ...current[index], ...updates };
      if (this.firebaseService.isEnabled) {
        await setDoc(doc(this.firebaseService.db, 'employees', id), updated);
      } else {
        const list = [...current];
        list[index] = updated;
        this.employeesSignal.set(list);
        this.saveToLocal(list);
      }
    }
  }

  public async deleteEmployee(id: string): Promise<void> {
    if (this.firebaseService.isEnabled) {
      await deleteDoc(doc(this.firebaseService.db, 'employees', id));
    } else {
      const filtered = this.employeesSignal().filter(e => e.id !== id);
      this.employeesSignal.set(filtered);
      this.saveToLocal(filtered);
    }
  }

  private saveToLocal(data: Employee[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }
}
