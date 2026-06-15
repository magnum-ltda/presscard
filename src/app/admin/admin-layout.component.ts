import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="admin-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/admin/dashboard" routerLinkActive="active">
            <i class="icon">📊</i> Dashboard
          </a>
          <a routerLink="/admin/empresas" routerLinkActive="active">
            <i class="icon">🏢</i> Empresas
          </a>
          <a routerLink="/admin/parceiros" routerLinkActive="active">
            <i class="icon">🤝</i> Parceiros
          </a>
          <a routerLink="/admin/funcionarios" routerLinkActive="active">
            <i class="icon">👥</i> Funcionários
          </a>
          <a routerLink="/admin/beneficios" routerLinkActive="active">
            <i class="icon">🎁</i> Benefícios
          </a>
        </nav>
        <div class="sidebar-footer">
          <button (click)="logout()" class="logout-btn">
            <i class="icon">🚪</i> Sair
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="topbar">
          <div class="topbar-title">Gestão Corporativa</div>
          <div class="user-profile" *ngIf="user()">
            <span class="user-role">{{ user()?.role }}</span>
            <span class="user-name">{{ user()?.name }}</span>
          </div>
        </header>
        
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-layout {
      display: flex;
      height: 100vh;
      background-color: #f1f5f9;
      font-family: 'Inter', sans-serif;
    }

    .sidebar {
      width: 260px;
      background-color: #1e293b;
      color: white;
      display: flex;
      flex-direction: column;
      box-shadow: 4px 0 10px rgba(0,0,0,0.1);
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .sidebar-header h2 { 
      margin: 0; 
      font-size: 1.25rem; 
      font-weight: 700; 
      color: #f8fafc; 
    }

    .sidebar-nav {
      flex: 1;
      padding: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .sidebar-nav a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.5rem;
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.2s;
      border-left: 3px solid transparent;
    }

    .sidebar-nav a:hover, .sidebar-nav a.active {
      background-color: rgba(255,255,255,0.05);
      color: white;
      border-left-color: #3b82f6;
    }

    .sidebar-nav a .icon { 
      font-style: normal; 
      font-size: 1.2rem; 
    }

    .sidebar-footer {
      padding: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    
    .logout-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem;
      background-color: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .logout-btn:hover {
      background-color: #ef4444;
      color: white;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .topbar {
      height: 70px;
      background-color: white;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .topbar-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #334155;
    }

    .user-profile {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .user-name { font-weight: 600; color: #1e293b; font-size: 0.95rem; }
    .user-role { font-size: 0.75rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

    .content-area {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }

    /* Mobile Responsive Sidebar -> Bottom Nav */
    @media (max-width: 768px) {
      .admin-layout {
        flex-direction: column;
      }
      .sidebar {
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        flex-direction: row;
        box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
        padding-bottom: env(safe-area-inset-bottom);
      }
      .sidebar-header, .sidebar-footer {
        display: none;
      }
      .sidebar-nav {
        flex-direction: row;
        padding: 0;
        justify-content: space-around;
        width: 100%;
      }
      .sidebar-nav a {
        flex-direction: column;
        padding: 0.5rem;
        font-size: 0.7rem;
        gap: 0.25rem;
        border-left: none;
        border-top: 3px solid transparent;
        flex: 1;
        text-align: center;
      }
      .sidebar-nav a:hover, .sidebar-nav a.active {
        border-top-color: #3b82f6;
        border-left-color: transparent;
        background-color: rgba(255,255,255,0.1);
      }
      .sidebar-nav a .icon {
        font-size: 1.5rem;
      }
      .main-content {
        margin-bottom: 60px; /* Space for bottom nav */
      }
      .topbar {
        padding: 0 1rem;
        height: 60px;
      }
      .content-area {
        padding: 1rem;
      }
      .topbar-title {
        font-size: 1.1rem;
      }
    }
  `]
})
export class AdminLayoutComponent {
  private authService = inject(AuthService);
  user = this.authService.currentUser;

  logout() {
    this.authService.logout();
    window.location.href = '/auth/login';
  }
}
