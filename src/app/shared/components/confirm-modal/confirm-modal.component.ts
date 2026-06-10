import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../../../core/services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="config()" (click)="cancel()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-icon" [class.destructive]="config()?.isDestructive">
          {{ config()?.isDestructive ? '⚠️' : '❓' }}
        </div>
        <h2 class="title">{{ config()?.title }}</h2>
        <p class="message">{{ config()?.message }}</p>
        
        <div class="modal-actions">
          <button class="btn-cancel" (click)="cancel()">
            {{ config()?.cancelText || 'Cancelar' }}
          </button>
          <button class="btn-confirm" [class.destructive]="config()?.isDestructive" (click)="confirm()">
            {{ config()?.confirmText || 'Confirmar' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center; z-index: 9999;
    }
    .modal-content {
      background: white; border-radius: 16px; width: 100%; max-width: 400px;
      padding: 2rem; text-align: center;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
      animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes popIn { 
      0% { transform: scale(0.9); opacity: 0; } 
      100% { transform: scale(1); opacity: 1; } 
    }
    
    .modal-icon { font-size: 3rem; margin-bottom: 1rem; }
    .title { margin: 0 0 0.5rem 0; font-size: 1.25rem; color: #1e293b; }
    .message { margin: 0 0 2rem 0; color: #475569; font-size: 0.95rem; line-height: 1.5; }
    
    .modal-actions { display: flex; gap: 1rem; }
    .modal-actions button { flex: 1; padding: 0.75rem; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
    
    .btn-cancel { background: #f1f5f9; color: #475569; }
    .btn-cancel:hover { background: #e2e8f0; }
    
    .btn-confirm { background: #3b82f6; color: white; }
    .btn-confirm:hover { background: #2563eb; }
    .btn-confirm.destructive { background: #ef4444; }
    .btn-confirm.destructive:hover { background: #dc2626; }
  `]
})
export class ConfirmModalComponent {
  private confirmService = inject(ConfirmDialogService);
  config = this.confirmService.config;

  confirm() { this.confirmService.respond(true); }
  cancel() { this.confirmService.respond(false); }
}
