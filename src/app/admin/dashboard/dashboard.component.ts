import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseService } from '../../core/services/firebase.service';
import { CompaniesService } from '../../core/services/companies.service';
import { PartnersService } from '../../core/services/partners.service';
import { EmployeesService } from '../../core/services/employees.service';
import { CouponsService } from '../../core/services/coupons.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  companiesService = inject(CompaniesService);
  partnersService = inject(PartnersService);
  employeesService = inject(EmployeesService);
  private couponsService = inject(CouponsService);
  private firebaseService = inject(FirebaseService);

  validatedCouponsCount = signal(0);
  isSeeding = false;

  ngOnInit() {
    this.loadCouponsMetrics();
  }

  async loadCouponsMetrics() {
    const allCoupons = await this.couponsService.getAllCoupons();
    const validated = allCoupons.filter(c => c.status === 'VALIDATED').length;
    this.validatedCouponsCount.set(validated);
  }

  async seedData() {
    this.isSeeding = true;
    try {
      if (!this.firebaseService.isEnabled) {
        alert('Firebase desativado. Use os dados mockados.');
        return;
      }
      const db = this.firebaseService.db;

      // 1. Empresa ACME
      await setDoc(doc(db, 'companies', 'company-acme'), {
        id: 'company-acme',
        name: 'ACME Corp (Teste)',
        cnpj: '12.345.678/0001-99',
        plan: 'Gold',
        active: true,
        createdAt: new Date().toISOString()
      });

      // 2. Parceiro Resort Paradiso
      await setDoc(doc(db, 'partners', 'partner-resort-paradiso'), {
        id: 'partner-resort-paradiso',
        tradeName: 'Resort Paradiso (Teste)',
        companyName: 'Resort Paradiso SA',
        category: 'HOTEL',
        description: 'Um resort incrível para testar a aplicação.',
        images: [],
        contact: '11999999999',
        externalLink: 'https://paradiso.com',
        executionType: 'COUPON',
        commissionType: 'PERCENTAGE',
        commissionValue: 10,
        active: true,
        location: {
          address: 'Av. Beira Mar',
          number: '100',
          district: 'Praia',
          city: 'Litoral',
          state: 'SP',
          country: 'BR',
          zipCode: '11000-000',
          latitude: -23.9,
          longitude: -46.3
        },
        createdAt: new Date().toISOString()
      });

      // 3. Benefício
      await setDoc(doc(db, 'benefits', 'benefit-teste-1'), {
        id: 'benefit-teste-1',
        title: '30% OFF na Hospedagem',
        description: 'Desconto de teste gerado pelo painel.',
        category: 'HOTEL',
        associatedCompanyId: 'ALL', 
        commercialPartnerId: 'partner-resort-paradiso',
        discountPercentage: 30,
        employeeDiscount: 25,
        platformCommission: 5,
        rules: 'Apresente o cupom na recepção.',
        executionType: 'COUPON',
        couponType: 'AUTOMATIC',
        active: true,
        createdAt: new Date().toISOString()
      });

      // 4. Funcionário
      await setDoc(doc(db, 'employees', 'usr-employee-1'), {
        id: 'usr-employee-1',
        name: 'João Silva (Funcionário)',
        email: 'joao.silva@acme.com',
        role: 'EMPLOYEE',
        companyId: 'company-acme',
        status: 'ACTIVE',
        createdAt: new Date().toISOString()
      });

      // 5. Funcionário Parceiro (Lojista)
      await setDoc(doc(db, 'employees', 'usr-partner-1'), {
        id: 'usr-partner-1',
        name: 'Gerente Resort Paradiso',
        email: 'gerente@paradiso.com',
        role: 'PARTNER',
        companyId: 'none',
        partnerId: 'partner-resort-paradiso',
        status: 'ACTIVE',
        createdAt: new Date().toISOString()
      });

      alert('Carga completa de testes injetada com sucesso! (Empresa, Parceiro, Benefício e Usuários)');
    } catch (e: any) {
      console.error(e);
      alert('Erro ao gerar dados de teste: ' + e.message);
    } finally {
      this.isSeeding = false;
    }
  }
}
