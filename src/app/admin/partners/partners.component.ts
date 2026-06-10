import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersService } from '../../core/services/partners.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h1>Parceiros Comerciais</h1>
        <button class="btn-primary">+ Novo Parceiro</button>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nome / Parceiro</th>
              <th>Categoria</th>
              <th>Localização</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let partner of partners()">
              <td>
                <div class="font-medium">{{ partner.tradeName }}</div>
                <div class="text-sm text-gray">{{ partner.companyName }}</div>
              </td>
              <td><span class="badge">{{ partner.category }}</span></td>
              <td>{{ partner.location?.city }} - {{ partner.location?.state }}</td>
              <td>
                <span class="status-dot" [class.active]="partner.active"></span>
                {{ partner.active ? 'Ativo' : 'Inativo' }}
              </td>
              <td>
                <button class="btn-icon" title="Editar">✏️</button>
              </td>
            </tr>
            <tr *ngIf="partners().length === 0">
              <td colspan="5" class="empty-state">Nenhum parceiro comercial cadastrado.</td>
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
    .btn-primary { background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; }
    .btn-primary:hover { background: #059669; }
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    .data-table th { background: #f8fafc; color: #64748b; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; }
    .font-medium { font-weight: 500; color: #1e293b; }
    .text-sm { font-size: 0.875rem; }
    .text-gray { color: #64748b; }
    .badge { background: #e0e7ff; color: #4338ca; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 500; }
    .status-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ef4444; margin-right: 0.5rem; }
    .status-dot.active { background: #10b981; }
    .btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; }
    .empty-state { text-align: center; color: #94a3b8; padding: 2rem !important; }
  `]
})
export class PartnersComponent {
  private partnersService = inject(PartnersService);
  partners = this.partnersService.partners;
}
