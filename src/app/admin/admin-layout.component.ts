import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatIconModule],
  template: `
    <div class="admin-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/admin/dashboard" routerLinkActive="active">
            <i class="icon">📊</i> <span class="nav-text">Dashboard</span>
          </a>
          <a routerLink="/admin/empresas" routerLinkActive="active">
            <i class="icon">🏢</i> <span class="nav-text">Empresas</span>
          </a>
          <a routerLink="/admin/parceiros" routerLinkActive="active">
            <i class="icon">🤝</i> <span class="nav-text">Parceiros</span>
          </a>
          <a routerLink="/admin/funcionarios" routerLinkActive="active">
            <i class="icon">👥</i> <span class="nav-text">Funcionários</span>
          </a>
          <a routerLink="/admin/beneficios" routerLinkActive="active">
            <i class="icon">🎁</i> <span class="nav-text">Benefícios</span>
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="topbar">
          <div class="topbar-title">Gestão Corporativa</div>
          <div class="user-menu-container" (click)="toggleMenu($event)">
            <div class="user-profile" *ngIf="user()">
              <div class="user-info-text">
                <span class="user-role">{{ user()?.role }}</span>
                <span class="user-name">{{ user()?.name }}</span>
              </div>
              <mat-icon>account_circle</mat-icon>
            </div>
            
            <div class="dropdown-menu" *ngIf="isMenuOpen()">
              <button (click)="logout()" class="dropdown-item logout">
                <mat-icon>logout</mat-icon> Sair
              </button>
            </div>
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

    /* Removed sidebar-footer and logout-btn */

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

    .user-menu-container {
      position: relative;
      cursor: pointer;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .user-profile:hover {
      background-color: #f1f5f9;
    }

    .user-info-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .user-name { font-weight: 600; color: #1e293b; font-size: 0.95rem; }
    .user-role { font-size: 0.75rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

    .dropdown-menu {
      position: absolute;
      top: 110%;
      right: 0;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      min-width: 150px;
      z-index: 1000;
      padding: 0.5rem 0;
    }

    .dropdown-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border: none;
      background: none;
      text-align: left;
      font-size: 0.9rem;
      cursor: pointer;
      color: #334155;
      font-family: inherit;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    .dropdown-item:hover {
      background-color: #f8fafc;
    }

    .dropdown-item.logout {
      color: #ef4444;
    }

    .dropdown-item.logout:hover {
      background-color: #fef2f2;
    }

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
        font-size: 0.65rem;
        gap: 0.2rem;
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
  private eRef = inject(ElementRef);
  
  user = this.authService.currentUser;
  isMenuOpen = signal(false);

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen.update(val => !val);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen.set(false);
    }
  }

  logout() {
    this.authService.logout();
    window.location.href = '/auth/login';
  }
}
