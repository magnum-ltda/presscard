import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="data-table skeleton-table">
      <thead>
        <tr>
          <th *ngFor="let c of colsArray">
            <div class="skeleton-box header-box"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of rowsArray">
          <td *ngFor="let c of colsArray">
            <div class="skeleton-box"></div>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #e2e8f0; }
    
    .skeleton-box {
      height: 20px;
      background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 4px;
      width: 100%;
    }

    .header-box {
      height: 16px;
      width: 60%;
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class SkeletonTableComponent {
  @Input() rows: number = 5;
  @Input() columns: number = 5;

  get rowsArray() { return Array(this.rows).fill(0); }
  get colsArray() { return Array(this.columns).fill(0); }
}
