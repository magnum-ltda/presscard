import { Injectable, signal } from '@angular/core';

export interface ConfirmDialogConfig {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private configSignal = signal<ConfirmDialogConfig | null>(null);
  public readonly config = this.configSignal.asReadonly();
  
  private resolveFn: ((value: boolean) => void) | null = null;

  public confirm(config: ConfirmDialogConfig): Promise<boolean> {
    this.configSignal.set(config);
    return new Promise(resolve => {
      this.resolveFn = resolve;
    });
  }

  public respond(result: boolean) {
    if (this.resolveFn) {
      this.resolveFn(result);
      this.resolveFn = null;
    }
    this.configSignal.set(null);
  }
}
