import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsService } from '../../core/services/benefits.service';

@Component({
  selector: 'app-benefits-mgmt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Gestão de Benefícios</h1>
        <button class="btn-primary">+ Novo Benefício</button>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>Título / Categoria</th>
              <th>Parceiro</th>
              <th>Tipo Execução</th>
              <th>Comissão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let benefit of benefits()">
              <td>
                <div class="font-medium">{{ benefit.title }}</div>
                <div class="text-sm text-gray">{{ benefit.category }}</div>
              </td>
              <td><span class="badge gray">{{ benefit.commercialPartnerId }}</span></td>
              <td><span class="badge outline">{{ benefit.executionType }}</span></td>
              <td>
                <div class="font-medium" *ngIf="benefit.platformCommission !== undefined">
                  {{ benefit.platformCommission }}%
                </div>
                <div class="text-sm text-gray" *ngIf="benefit.platformCommission === undefined">Padrão do Parceiro</div>
              </td>
              <td>
                <button class="btn-icon" title="Editar">✏️</button>
              </td>
            </tr>
            <tr *ngIf="benefits().length === 0">
              <td colspan="5" class="empty-state">Nenhum benefício cadastrado.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .admin-page { display: flex; flex-direction: column; gap: 1.5rem; }
    .page-header { display: flex; justify-content: space-between; align-items: center; }
    .page-header h1 { margin: 0; font-size: 1.5rem; color: #1e293b; }
    .btn-primary { background: #f59e0b; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; }
    .btn-primary:hover { background: #d97706; }
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    .data-table th { background: #f8fafc; color: #64748b; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; }
    .font-medium { font-weight: 500; color: #1e293b; }
    .text-sm { font-size: 0.875rem; }
    .text-gray { color: #64748b; }
    .badge { padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .badge.gray { background: #f1f5f9; color: #475569; }
    .badge.outline { background: transparent; border: 1px solid #94a3b8; color: #64748b; }
    .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; }
    .empty-state { text-align: center; color: #94a3b8; padding: 2rem !important; }
  `]
})
export class BenefitsMgmtComponent {
  private benefitsService = inject(BenefitsService);
  benefits = this.benefitsService.benefits;
}
