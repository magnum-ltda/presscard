import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-company-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="company-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="brand">
          <span class="logo-icon">🏢</span>
          <span class="logo-text">Portal da Empresa</span>
        </div>

        <nav class="nav-menu">
          <a routerLink="/empresa/funcionarios" routerLinkActive="active" class="nav-item">
            <span class="icon">👥</span>
            <span>Funcionários</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <div class="user-info" *ngIf="user()">
            <div class="avatar">{{ user()?.name?.charAt(0) }}</div>
            <div class="details">
              <span class="name">{{ user()?.name }}</span>
              <span class="role">Gestor de RH</span>
            </div>
          </div>
          <button class="logout-btn" (click)="onLogout()">
            <span class="icon">🚪</span>
            <span>Sair</span>
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="top-header">
          <div class="header-title">
            <h2>Gestão Corporativa</h2>
          </div>
        </header>
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .company-layout { display: flex; min-height: 100vh; background: #f8fafc; font-family: 'Inter', sans-serif; }
    .sidebar { width: 280px; background: #1e293b; color: white; display: flex; flex-direction: column; transition: 0.3s; }
    .brand { padding: 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid #334155; }
    .logo-icon { font-size: 1.5rem; }
    .logo-text { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.5px; }
    
    .nav-menu { flex: 1; padding: 1.5rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #cbd5e1; text-decoration: none; border-radius: 8px; transition: 0.2s; font-weight: 500; }
    .nav-item:hover, .nav-item.active { background: #334155; color: white; }
    .nav-item.active { background: #2563eb; }
    
    .sidebar-footer { padding: 1.5rem; border-top: 1px solid #334155; }
    .user-info { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
    .avatar { width: 40px; height: 40px; border-radius: 50%; background: #3b82f6; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; }
    .details { display: flex; flex-direction: column; }
    .name { font-weight: 600; font-size: 0.9rem; }
    .role { font-size: 0.8rem; color: #94a3b8; }
    
    .logout-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; background: transparent; border: 1px solid #475569; color: #cbd5e1; border-radius: 6px; cursor: pointer; transition: 0.2s; font-weight: 500; }
    .logout-btn:hover { background: #ef4444; border-color: #ef4444; color: white; }
    
    .main-content { flex: 1; display: flex; flex-direction: column; min-width: 0; }
    .top-header { background: white; padding: 1.5rem 2rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
    .header-title h2 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #0f172a; }
    .content-area { padding: 2rem; flex: 1; overflow-y: auto; }
  `]
})
export class CompanyLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.currentUser;

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
