import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../../../core/services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent {
  private confirmService = inject(ConfirmDialogService);
  config = this.confirmService.config;

  confirm() { this.confirmService.respond(true); }
  cancel() { this.confirmService.respond(false); }
}
