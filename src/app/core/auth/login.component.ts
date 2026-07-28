import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="glass-panel">
        <div class="header">
          <h1>Clube de Benefícios</h1>
          <p>Acesso Restrito ao Sistema</p>
        </div>
        
        <form class="login-form" (ngSubmit)="onLogin()">
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" name="email" [(ngModel)]="email" required placeholder="seu@email.com">
          </div>
          
          <div class="form-group">
            <label>Senha</label>
            <input type="password" name="password" [(ngModel)]="password" required placeholder="••••••••">
            <a class="forgot-password" (click)="openRecoveryModal()">Esqueceu sua senha?</a>
          </div>
          
          <div class="error-msg" *ngIf="errorMsg()">
            {{ errorMsg() }}
          </div>
          
          <button type="submit" class="submit-btn" [disabled]="isLoading()">
            <span *ngIf="!isLoading()">Entrar</span>
            <span *ngIf="isLoading()">Carregando...</span>
          </button>
        </form>
      </div>

      <!-- Recovery Modal -->
      <div class="modal-overlay" *ngIf="isRecoverModalOpen()">
        <div class="modal-content glass-panel" style="padding: 2.5rem; max-width: 400px; box-shadow: 0 30px 60px rgba(0,0,0,0.6);">
          <div class="header" style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem;">Recuperar Senha</h2>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Digite seu e-mail para receber o link de recuperação.</p>
          </div>
          
          <form class="login-form" (ngSubmit)="onRecoverPassword()">
            <div class="form-group">
              <label>E-mail cadastrado</label>
              <input type="email" name="recoverEmail" [(ngModel)]="recoverEmail" required placeholder="seu@email.com">
            </div>
            
            <div class="error-msg" *ngIf="recoverErrorMsg()">{{ recoverErrorMsg() }}</div>
            <div class="success-msg" *ngIf="recoverSuccessMsg()">{{ recoverSuccessMsg() }}</div>
            
            <div class="modal-actions">
              <button type="button" class="btn-secondary" (click)="closeRecoveryModal()">Cancelar</button>
              <button type="submit" class="submit-btn" [disabled]="isRecovering() || recoverSuccessMsg()">
                <span *ngIf="!isRecovering()">Enviar Link</span>
                <span *ngIf="isRecovering()">Enviando...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a1c2c 0%, #4a192c 100%); font-family: 'Inter', sans-serif; padding: 2rem; }
    .glass-panel { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 3rem; width: 100%; max-width: 450px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
    .header { text-align: center; margin-bottom: 2rem; color: white; }
    .header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; background: linear-gradient(to right, #fff, #a5a5a5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .header p { color: #a0aec0; font-size: 1rem; }
    
    .login-form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    .form-group label { color: #e2e8f0; font-size: 0.9rem; font-weight: 500; }
    .form-group input { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 0.75rem 1rem; border-radius: 8px; font-size: 1rem; outline: none; transition: 0.2s; }
    .form-group input:focus { border-color: #ec4899; background: rgba(255,255,255,0.15); }
    .form-group input::placeholder { color: rgba(255,255,255,0.3); }
    
    .forgot-password { color: #cbd5e1; font-size: 0.85rem; text-align: right; cursor: pointer; text-decoration: underline; transition: 0.2s; }
    .forgot-password:hover { color: #f8fafc; }

    .error-msg { background: rgba(239, 68, 68, 0.1); color: #fca5a5; padding: 0.75rem; border-radius: 8px; font-size: 0.9rem; text-align: center; border: 1px solid rgba(239, 68, 68, 0.2); }
    .success-msg { background: rgba(16, 185, 129, 0.1); color: #6ee7b7; padding: 0.75rem; border-radius: 8px; font-size: 0.9rem; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2); }
    
    .submit-btn { background: linear-gradient(135deg, #ec4899 0%, #e11d48 100%); color: white; border: none; padding: 0.875rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3); }
    .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(225, 29, 72, 0.4); }
    .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 100; }
    .modal-actions { display: flex; gap: 1rem; margin-top: 1rem; }
    .modal-actions > button { flex: 1; }
    .btn-secondary { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 0.875rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
    .btn-secondary:hover { background: rgba(255,255,255,0.2); }
  `]
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email = '';
  password = '';
  isLoading = signal(false);
  errorMsg = signal('');

  // Password Recovery State
  isRecoverModalOpen = signal(false);
  recoverEmail = '';
  isRecovering = signal(false);
  recoverErrorMsg = signal('');
  recoverSuccessMsg = signal('');

  openRecoveryModal() {
    this.isRecoverModalOpen.set(true);
    this.recoverEmail = this.email; // Auto-fill if typed
    this.recoverErrorMsg.set('');
    this.recoverSuccessMsg.set('');
  }

  closeRecoveryModal() {
    this.isRecoverModalOpen.set(false);
  }

  async onRecoverPassword() {
    this.recoverErrorMsg.set('');
    this.recoverSuccessMsg.set('');
    
    if (!this.recoverEmail) {
      this.recoverErrorMsg.set('Por favor, informe seu e-mail.');
      return;
    }

    this.isRecovering.set(true);
    const success = await this.authService.recoverPassword(this.recoverEmail);
    
    if (success) {
      this.recoverSuccessMsg.set('E-mail de recuperação enviado! Verifique sua caixa de entrada.');
      setTimeout(() => this.closeRecoveryModal(), 4000);
    } else {
      this.recoverErrorMsg.set('Falha ao enviar e-mail. Verifique se o endereço está correto e tente novamente.');
    }
    this.isRecovering.set(false);
  }

  async onLogin() {
    this.errorMsg.set('');
    
    if (!this.email || !this.password) {
      this.errorMsg.set('Por favor, preencha o e-mail e a senha.');
      return;
    }

    this.isLoading.set(true);

    const success = await this.authService.login(this.email, this.password);
    
    if (success) {
      const user = this.authService.currentUser();
      if (user) {
        switch(user.role) {
          case 'SUPER_ADMIN':
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          case 'PARTNER':
            this.router.navigate(['/parceiro']);
            break;
          case 'COMPANY_ADMIN':
            this.router.navigate(['/empresa']);
            break;
          default:
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigateByUrl(returnUrl || '/');
            break;
        }
      } else {
        this.isLoading.set(false);
        this.errorMsg.set('Sessão não identificada. Verifique se seu perfil foi configurado.');
      }
    } else {
      this.errorMsg.set('E-mail ou senha incorretos.');
      this.isLoading.set(false);
    }
  }
}
