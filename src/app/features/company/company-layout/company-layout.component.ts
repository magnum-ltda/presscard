import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-company-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
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
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="top-header">
          <div class="header-title">
            <h2>Gestão Corporativa</h2>
          </div>
          <div class="user-menu-container" (click)="toggleMenu($event)">
            <div class="user-profile" *ngIf="user()">
              <div class="user-info-text">
                <span class="user-role">Gestor de RH</span>
                <span class="user-name">{{ user()?.name }}</span>
              </div>
              <mat-icon>account_circle</mat-icon>
            </div>
            
            <div class="dropdown-menu" *ngIf="isMenuOpen()">
              <button (click)="onLogout()" class="dropdown-item logout">
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
    .company-layout { display: flex; min-height: 100vh; background: #f8fafc; font-family: 'Inter', sans-serif; }
    .sidebar { width: 280px; background: #1e293b; color: white; display: flex; flex-direction: column; transition: 0.3s; }
    .brand { padding: 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid #334155; }
    .logo-icon { font-size: 1.5rem; }
    .logo-text { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.5px; }
    
    .nav-menu { flex: 1; padding: 1.5rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .nav-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #cbd5e1; text-decoration: none; border-radius: 8px; transition: 0.2s; font-weight: 500; }
    .nav-item:hover, .nav-item.active { background: #334155; color: white; }
    .nav-item.active { background: #2563eb; }
    /* Removido o sidebar-footer e estilos vinculados ao logout antigo */
    .main-content { flex: 1; display: flex; flex-direction: column; min-width: 0; }
    .top-header { background: white; padding: 1.5rem 2rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
    .header-title h2 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #0f172a; }
    .content-area { padding: 2rem; flex: 1; overflow-y: auto; }

    .user-menu-container { position: relative; cursor: pointer; }
    .user-profile { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; border-radius: 8px; transition: background-color 0.2s; }
    .user-profile:hover { background-color: #f8fafc; }
    .user-info-text { display: flex; flex-direction: column; align-items: flex-end; }
    .user-name { font-weight: 600; color: #0f172a; font-size: 0.95rem; }
    .user-role { font-size: 0.75rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

    .dropdown-menu { position: absolute; top: 110%; right: 0; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); min-width: 150px; z-index: 1000; padding: 0.5rem 0; }
    .dropdown-item { width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; border: none; background: none; text-align: left; font-size: 0.9rem; cursor: pointer; color: #334155; font-family: inherit; font-weight: 500; transition: background-color 0.2s; }
    .dropdown-item:hover { background-color: #f8fafc; }
    .dropdown-item.logout { color: #ef4444; }
    .dropdown-item.logout:hover { background-color: #fef2f2; }
  `]
})
export class CompanyLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
