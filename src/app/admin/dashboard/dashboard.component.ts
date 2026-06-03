import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
            <span class="value">0</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-green">
            <i>🤝</i>
          </div>
          <div class="metric-info">
            <span class="label">Parceiros Ativos</span>
            <span class="value">0</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-purple">
            <i>👥</i>
          </div>
          <div class="metric-info">
            <span class="label">Funcionários</span>
            <span class="value">0</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="icon-wrapper bg-orange">
            <i>🎟️</i>
          </div>
          <div class="metric-info">
            <span class="label">Cupons Validados</span>
            <span class="value">0</span>
          </div>
        </div>
      </div>
      
      <div class="recent-activity">
        <h2>Atividades Recentes</h2>
        <div class="empty-state">
          Nenhuma atividade registrada no momento.
        </div>
      </div>
    </div>
  `,
  styles: [`
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
export class DashboardComponent {
}
