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
  template: `
    <div class="dashboard-container">
      <h1 class="page-title">Dashboard Overview</h1>
      
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="icon-wrapper bg-blue">
            <i>🏢</i>
          </div>
          <div class="metric-info">
            <span class="label">Total Empresas</span>
            <span class="value">{{ companiesService.companies().length }}</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-green">
            <i>🤝</i>
          </div>
          <div class="metric-info">
            <span class="label">Parceiros Ativos</span>
            <span class="value">{{ partnersService.partners().length }}</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-purple">
            <i>👥</i>
          </div>
          <div class="metric-info">
            <span class="label">Funcionários</span>
            <span class="value">{{ employeesService.employees().length }}</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-orange">
            <i>🎟️</i>
          </div>
          <div class="metric-info">
            <span class="label">Cupons Validados</span>
            <span class="value">{{ validatedCouponsCount() }}</span>
          </div>
        </div>
      </div>
      
      <div class="recent-activity">
        <h2>Atividades Recentes</h2>
        <div class="empty-state">
          Nenhuma atividade registrada no momento.
        </div>
        <div style="margin-top: 2rem; text-align: center;">
          <button class="btn-primary" (click)="seedData()" [disabled]="isSeeding">
            {{ isSeeding ? 'Gerando dados...' : 'Gerar Dados de Teste' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn-primary { background: #f59e0b; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: 0.2s; font-size: 1rem; }
    .btn-primary:hover:not(:disabled) { background: #d97706; }
    .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .page-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
    }

    .metric-card {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
    }

    .icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      
      &.bg-blue { background: #eff6ff; color: #3b82f6; }
      &.bg-green { background: #f0fdf4; color: #10b981; }
      &.bg-purple { background: #f5f3ff; color: #8b5cf6; }
      &.bg-orange { background: #fff7ed; color: #f97316; }
    }

    .metric-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .label {
        font-size: 0.875rem;
        color: #64748b;
        font-weight: 500;
      }

      .value {
        font-size: 1.75rem;
        font-weight: 700;
        color: #0f172a;
      }
    }

    .recent-activity {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;

      h2 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0 0 1rem 0;
      }
    }

    .empty-state {
      padding: 3rem;
      text-align: center;
      color: #94a3b8;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px dashed #cbd5e1;
    }
  `]
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
