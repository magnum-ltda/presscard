import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container" [style.height]="height">
      <div class="spinner" [style.width.px]="size" [style.height.px]="size"></div>
      <span class="message" *ngIf="message">{{ message }}</span>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;
    }

    .spinner {
      border: 3px solid rgba(59, 130, 246, 0.1);
      border-left-color: #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .message {
      color: #64748b;
      font-size: 0.9rem;
      font-weight: 500;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class SpinnerComponent {
  @Input() size: number = 40;
  @Input() height: string = '200px';
  @Input() message: string = 'Carregando...';
}
