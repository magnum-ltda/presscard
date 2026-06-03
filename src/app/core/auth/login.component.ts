import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-container">
      <div class="glass-panel">
        <div class="header">
          <h1>Clube de Benefícios</h1>
          <p>Acesso Restrito - Selecione seu Perfil</p>
        </div>
        
        <div class="profiles-grid">
          <div *ngFor="let user of mockUsers" 
               class="profile-card" 
               (click)="login(user.email)"
               [ngClass]="user.role.toLowerCase()">
            <div class="avatar">
              {{ getInitials(user.name) }}
            </div>
            <div class="info">
              <h3>{{ user.name }}</h3>
              <span class="role-badge">{{ user.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a1c2c 0%, #4a192c 100%);
      font-family: 'Inter', sans-serif;
      padding: 2rem;
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 3rem;
      width: 100%;
      max-width: 800px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      color: white;
    }

    .header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(to right, #fff, #a5a5a5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .header p {
      color: #a0aec0;
      font-size: 1.1rem;
    }

    .profiles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .profile-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .profile-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 10px 20px -10px rgba(0,0,0,0.3);
    }

    .profile-card.super_admin, .profile-card.admin { border-left: 4px solid #ef4444; }
    .profile-card.employee { border-left: 4px solid #3b82f6; }
    .profile-card.partner { border-left: 4px solid #10b981; }
    .profile-card.financial, .profile-card.support { border-left: 4px solid #8b5cf6; }

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: white;
      font-size: 1.2rem;
    }

    .info h3 {
      color: white;
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
    }

    .role-badge {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      font-weight: 500;
      letter-spacing: 0.05em;
    }
  `]
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  mockUsers: Employee[] = this.authService.mockUsers;

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  login(email: string) {
    if (this.authService.loginWithMockUser(email)) {
      const user = this.authService.currentUser();
      if (!user) return;
      
      switch(user.role) {
        case 'SUPER_ADMIN':
        case 'ADMIN':
          this.router.navigate(['/admin']);
          break;
        case 'PARTNER':
          this.router.navigate(['/parceiro']);
          break;
        case 'EMPLOYEE':
        default:
          this.router.navigate(['/portal']);
          break;
      }
    }
  }
}
