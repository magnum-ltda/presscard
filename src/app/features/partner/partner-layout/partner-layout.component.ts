import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-partner-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <div class="partner-layout">
      <header class="topbar">
        <div class="logo">📦 Portal do Parceiro</div>
        <div class="user-info">
          <span>Olá, {{ user()?.name }}</span>
          <button class="logout-btn" (click)="logout()" title="Sair"><mat-icon>logout</mat-icon></button>
        </div>
      </header>
      
      <div class="main-container">
        <nav class="sidebar">
          <a routerLink="/parceiro/validador" routerLinkActive="active">
            <mat-icon>check_circle</mat-icon> Validador
          </a>
          <a routerLink="/parceiro/historico" routerLinkActive="active">
            <mat-icon>history</mat-icon> Histórico
          </a>
        </nav>
        
        <main class="content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .partner-layout { display: flex; flex-direction: column; min-height: 100vh; background: #f8fafc; }
    .topbar { background: var(--navy-dark); color: white; display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .logo { font-size: 1.25rem; font-weight: 700; color: var(--gold-accent); }
    .user-info { display: flex; align-items: center; gap: 1rem; }
    .logout-btn { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; border-radius: 8px; padding: 0.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
    .logout-btn:hover { background: #ef4444; border-color: #ef4444; }
    
    .main-container { display: flex; flex: 1; overflow: hidden; }
    .sidebar { width: 250px; background: white; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 1.5rem 0; }
    .sidebar a { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.5rem; color: #475569; text-decoration: none; font-weight: 500; border-left: 3px solid transparent; transition: 0.2s; }
    .sidebar a:hover { background: #f1f5f9; color: #1e293b; }
    .sidebar a.active { background: #f0fdf4; color: #16a34a; border-left-color: #16a34a; }
    
    .content { flex: 1; padding: 2rem; overflow-y: auto; }

    @media (max-width: 768px) {
      .main-container { flex-direction: column; }
      .sidebar { width: 100%; border-right: none; border-bottom: 1px solid #e2e8f0; padding: 0; flex-direction: row; }
      .sidebar a { flex: 1; justify-content: center; padding: 1rem; border-left: none; border-bottom: 3px solid transparent; }
      .sidebar a.active { border-left-color: transparent; border-bottom-color: #16a34a; }
      .content { padding: 1rem; }
    }
  `]
})
export class PartnerLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.currentUser;

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
