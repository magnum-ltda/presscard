import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
